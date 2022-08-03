everdev network default se
everdev se reset
wget -nc https://github.com/tonlabs/ton-labs-contracts/raw/master/solidity/safemultisig/SafeMultisigWallet.tvc
wget -nc https://raw.githubusercontent.com/tonlabs/ton-labs-contracts/master/solidity/safemultisig/SafeMultisigWallet.abi.json
everdev c d SafeMultisigWallet.abi.json -s tradingBot -v 1000e9 -i "owners:[0x9c2d5cfa59defd4534861a066e4e3c0833d4d32ff4fa2318234064d6b538d471],reqConfirms:1"

everdev sol compile ChatFather.sol

everdev c d ChatFather -v 1e9 -n se 
#everdev c r SafeMultisigWallet.abi.json sendTransaction -i "dest:\"0:6b88b0bfe91eb0db67979854e60bb3b4ffcc3c6e212afc1d0e48c850a45a1a60\",value:1000000000,bounce:true,flags:3,payload:\"te6ccgEBAQEABgAACAnvDY0=\"" -a 0:70da6d4b6b3ab29f418aabffa3a630de48de9e9f2659030329dee11ea656b77f -s tradingBot
