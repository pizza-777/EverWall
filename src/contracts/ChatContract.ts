export const ChatContract = {
    abi: {
        "ABI version": 2,
        "version": "2.2",
        "header": [
            "time"
        ],
        "functions": [
            {
                "name": "getMessage",
                "inputs": [
                    {
                        "name": "message",
                        "type": "string"
                    }
                ],
                "outputs": []
            },
            {
                "name": "constructor",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "chatId",
                "inputs": [],
                "outputs": [
                    {
                        "name": "chatId",
                        "type": "uint256"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "chatId",
                "type": "uint256"
            }
        ],
        "events": [],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            },
            {
                "name": "chatId",
                "type": "uint256"
            }
        ]
    } as const,
    tvc: "te6ccgECEgEAAasAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsPBQQRAoLtRNDXScMB+GYh2zzTAAGegwjXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B2zzyPAwGA0rtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPI8Dg4GAzwgghBotV8/uuMCIIIQbdAaQbrjAiCCEH/uhji64wIKCQcDKDD4RvLgTPhCbuMA1NHbPDDbPPIADQgLAAIwAVAw0ds8+EohjhyNBHAAAAAAAAAAAAAAAAA7dAaQYMjOy//JcPsA3vIADQIiMPhCbuMA+Ebyc9H4ANs88gAMCwAk+Er4Q/hCyMv/yz/Pg8v/ye1UAVztRNDXScIBjiNw7UTQ9AVxIYBA9A6T1wv/kXDi+GqAQPQO8r3XC//4YnD4Y+MNDQAm7UTQ0//TP9MAMdP/0fhq+GP4YgAK+Eby4EwCCvSkIPShERAAFHNvbCAwLjYxLjIAAA==",
    code: "te6ccgECDwEAAX4ABCSK7VMg4wMgwP/jAiDA/uMC8gsMAgEOAoLtRNDXScMB+GYh2zzTAAGegwjXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B2zzyPAkDA0rtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPI8CwsDAzwgghBotV8/uuMCIIIQbdAaQbrjAiCCEH/uhji64wIHBgQDKDD4RvLgTPhCbuMA1NHbPDDbPPIACgUIAAIwAVAw0ds8+EohjhyNBHAAAAAAAAAAAAAAAAA7dAaQYMjOy//JcPsA3vIACgIiMPhCbuMA+Ebyc9H4ANs88gAJCAAk+Er4Q/hCyMv/yz/Pg8v/ye1UAVztRNDXScIBjiNw7UTQ9AVxIYBA9A6T1wv/kXDi+GqAQPQO8r3XC//4YnD4Y+MNCgAm7UTQ0//TP9MAMdP/0fhq+GP4YgAK+Eby4EwCCvSkIPShDg0AFHNvbCAwLjYxLjIAAA==",
    codeHash: "ba2931d1cc7b5b988e1853a6cd606e02f83a7df9a0788c69c297358fffc40b72",
}
