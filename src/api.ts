import {
  Address,
  ProviderRpcClient,
  WalletContractType,
} from 'everscale-inpage-provider';

import { ChatContract } from '@/contracts/ChatContract';
import { ChatFatherContract } from '@/contracts/ChatFatherContract';

type everWallet = { address: Address; publicKey: string; contractType: WalletContractType; }

let _ever: ProviderRpcClient;
let _accountInteraction: everWallet;

async function ever(): Promise<ProviderRpcClient> | never {
  if (typeof _ever === 'undefined') {
    _ever = new ProviderRpcClient();
    if (!(await _ever.hasProvider())) {
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
        timestamp: t.createdAt
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


