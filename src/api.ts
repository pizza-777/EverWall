import {
  Address,
  ProviderRpcClient,
  WalletContractType,
} from 'everscale-inpage-provider';

import { ChatContract } from '@/contracts/ChatContract';
import { ChatFatherContract } from '@/contracts/ChatFatherContract';

type everWallet = { address: Address; publicKey: string; contractType: WalletContractType; }

let _ever: ProviderRpcClient;
let _accountInteraction: everWallet | undefined;

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

export async function createWall(): Promise<string | undefined> {
  const everProvider = await ever();

  try {
    const chatId = await createChat();
    console.log("chatId", chatId);

    if (chatId) {
      const address: Address = await everProvider.getExpectedAddress(ChatContract.abi,
        {
          tvc: ChatContract.tvc,
          workchain: 0,
          initParams: {
            chatId
          }
        })
      console.log("Address: " + address);
      return address.toString();
    } else {
      console.log("Error creating chat");
    }
  } catch (e: unknown) {
    console.log(e);
  }
}

async function createChat(): Promise<number | undefined> {
  const accountInteraction = await everWallet();
  const everProvider = await ever();

  if (typeof accountInteraction !== 'undefined') {
    const chatFather = new everProvider.Contract(
      ChatFatherContract.abi,
      new Address('0:36064b6eb94a6f4d5e2e817d200d06de291910947e9f8271011ec6ac112d1b24')
    );
    console.log(chatFather);
    try {
      const chatId: number = Date.now();
      const transaction = await chatFather.methods.deploy({
        chatId,
        chatCode: ChatContract.code,
      }).send({
        from: accountInteraction.address,
        amount: '100000000',
        bounce: true
      })
      console.log(transaction);
      return chatId;
    } catch (e: unknown) {
      console.log(e);
    }
  }
}

export async function sendMessage(message: string, chatAddress: string) {
  const everProvider = await ever();
  const accountInteraction = await everWallet();

  const chat = new everProvider.Contract(
    ChatContract.abi,
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
    console.log(e);
  }
}

export async function getMessages(chatAddress: string) {
  const everProvider = await ever();
  const chat = new everProvider.Contract(
    ChatContract.abi,
    new Address(chatAddress)
  );
  try {
    const transactions = (await everProvider.getTransactions({
      address: chat.address,
    })).transactions
    console.log('transactions', transactions);

    const data = transactions.map((t) => {
      return {
        sender: t.inMessage.src?.toString() ?? '',
        message: t.inMessage.body?.toString() ?? '',
        timestamp: t.createdAt,
        id: t.id.hash
      }
    }).filter((t) => {
      console.log('t: ', t);

      if (t.message == '') return false;
      return true;
    });

    let decodedMessage: { message: string } | undefined
    for (let i = 0; i < data.length; i++) {
      decodedMessage = await decodeBody(data[i].message);
      console.log('decoded Message2: ', decodedMessage);

      if (typeof decodedMessage == 'undefined') {
        data.splice(i, 1);
        continue;
      }

      data[i].message = decodedMessage.message;

    }
    console.log("data resulted", data);
    return data;

  } catch (e: unknown) {
    console.error(e);
  }
}

async function decodeBody(body: string): Promise<{ message: string } | undefined> {
  const everProvider = await ever();
  try {
    const message = await everProvider.unpackFromCell({
      structure: [
        { "name": "message", "type": "string" }
      ],
      boc: body,
      allowPartial: true
    });
    console.log('decoded message', message);
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

export async function getMessage(hash: string) {

  const _ever = await ever();

  try {
    const t = (await _ever.getTransaction({ hash: hash })).transaction
    console.log(t);
    if (typeof t === 'undefined') return
    const data = {
      sender: t.inMessage.src?.toString() ?? '',
      message: t.inMessage.body?.toString() ?? '',
      timestamp: t.createdAt,
      id: t.id.hash
    }

    const message = await decodeBody(data.message);
    if (typeof message === 'undefined') return
    data.message = message.message;
    return data;
    
  } catch (e: unknown) {
    console.log(e);
    // alert('Wrong message ID')
  }

}
