import {
  Address,
  ProviderRpcClient,
  WalletContractType,
} from 'everscale-inpage-provider';

import { PostContract } from '@/contracts/PostContract';
import { EverscaleStandaloneClient } from 'everscale-standalone-client';

type everWallet = { address: Address; publicKey: string; contractType: WalletContractType; }

let _ever: ProviderRpcClient;
let _accountInteraction: everWallet | undefined;

const _everStandalone = new ProviderRpcClient({
  fallback: () =>
    EverscaleStandaloneClient.create({
      connection: 'mainnet',
    }),
      forceUseFallback: true,
});

async function ever(): Promise<ProviderRpcClient> | never {
  if (typeof _ever === 'undefined') {
    _ever = new ProviderRpcClient();
    if (!(await _ever.hasProvider())) {
      alert('Please install the EverWallet extension');
      throw new Error('Extension is not installed');
    }
  }

  return _ever
}

async function everWallet(): Promise<everWallet | never> {
  const _ever = await ever();
  if (typeof _accountInteraction === 'undefined') {
    const { accountInteraction } = await _ever.requestPermissions({
      permissions: ['basic', 'accountInteraction'],
    });
    if (accountInteraction == null) {
      alert('Issue with permissions');
      throw new Error('Insufficient permissions');
    }
    _accountInteraction = accountInteraction
  }

  return _accountInteraction;
}

export async function sendMessage(message: string, chatAddress: string) {
  const everProvider = await ever();
  const accountInteraction = await everWallet();

  const chat = new everProvider.Contract(
    PostContract.abi,
    new Address(chatAddress)
  );
  try {
    const tr = await chat.methods.getMessage({
      message: message,
    }).send({
      from: accountInteraction.address,
      amount: '1',
      bounce: true
    })
    return tr;
  } catch (e: unknown) {
    console.error(e);
  }
}

export async function getPosts(chatAddress: string): Promise<{ message: string, sender: string, timestamp: number, id: string }[] | undefined> {
  const everProvider = _everStandalone;
  const chat = new everProvider.Contract(
    PostContract.abi,
    new Address(chatAddress)
  );
  try {
    const transactions = (await everProvider.getTransactions({
      address: chat.address,
    })).transactions

    const data = transactions.map((t) => {
      return {
        sender: t.inMessage.src?.toString() ?? '',
        message: t.inMessage.body?.toString() ?? '',
        timestamp: t.createdAt,
        id: t.id.hash
      }
    }).filter((t) => {
      if (t.message == '') return false;
      return true;
    });

    let decodedMessage: { message: string } | undefined
    for (let i = 0; i < data.length; i++) {
      decodedMessage = await decodeBody(data[i].message);

      if (typeof decodedMessage == 'undefined') {
        data.splice(i, 1);
        continue;
      }

      data[i].message = decodedMessage.message;

    }
    return data;

  } catch (e: unknown) {
    console.error(e);
  }
}

async function decodeBody(body: string): Promise<{ message: string } | undefined> {
  const everProvider = _everStandalone;
  try {
    const message = await everProvider.unpackFromCell({
      structure: [
        { "name": "message", "type": "string" }
      ],
      boc: body,
      allowPartial: true
    });

    return message.data;

  } catch (e) {
    console.error(e);
  }
}

export function genRandomAddress(): string {
  let address = '0:';
  const chars = '0123456789abcdef';
  for (let i = 0; i < 64; i++) {
    address += chars[Math.floor(Math.random() * chars.length)];
  }
  return address;
}

export async function login() {
  await everWallet()
  const _ever = await ever();
  await _ever.ensureInitialized()
}

export async function logout() {
  const _ever = await ever();
  _ever.disconnect();
  _accountInteraction = undefined
}

export async function authState(): Promise<boolean | string> {
  const _ever = await ever();

  const state = await _ever.getProviderState()

  if (typeof state.permissions.accountInteraction === 'undefined') {
    return false
  }

  return state.permissions.accountInteraction.address.toString();
}

export async function getPost(hash: string) {

  const _ever = _everStandalone;

  try {
    const t = (await _ever.getTransaction({ hash: hash })).transaction

    if (typeof t === 'undefined'){
      console.error('undefined t');
      return
    } 
    const data = {
      sender: t.inMessage.src?.toString() ?? '',
      message: t.inMessage.body?.toString() ?? '',
      timestamp: t.createdAt,
      id: t.id.hash
    }

    const message = await decodeBody(data.message);
    if (typeof message === 'undefined') {
      console.error('undefined message');
      return
    }
    data.message = message.message;   
    return data;

  } catch (e: unknown) {
    console.error(e);
    // alert('Wrong message ID')
  }
}