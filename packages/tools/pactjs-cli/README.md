# kadena.js - pactjs-cli

<p align="center">
  <picture>
    <source srcset="https://github.com/kadena-community/kadena.js/raw/master/common/images/Kadena.JS_logo-white.png" media="(prefers-color-scheme: dark)"/>
    <img src="https://github.com/kadena-community/kadena.js/raw/master/common/images/Kadena.JS_logo-black.png" width="200" alt="kadena.js logo" />
  </picture>
</p>

> pactjs-cli is a cli tool to create TypeScript types (d.ts files) from Pact
> Smart Contracts

## generate

Generate client based on a contract

| **Parameter**        | **Description**                                                                                                        | **Required**                | **Default value** |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------- | ----------------- |
| -c, --clean          | Clean existing generated files                                                                                         | No                          |                   |
| -i, --caps-interface | Custom name for the interface of the caps. Can be used to create a type definition with a limited set of capabilities. | No                          |                   |
| -f, --file           | Generate d.ts from Pact contract file                                                                                  | If --contract is ommitted   |                   |
| --contract           | Generate d.ts from Pact contract from the blockchain                                                                   | If --file is ommitted       |                   |
| --api                | The API to use for retrieving the contract (e.g. https://api.chainweb.com/chainweb/0.0/mainnet01/chain/8/pact)         | When --contract is provided |                   |
| --chain              | The chainId to retrieve the contract from                                                                              | When --contract is provided | 0                 |
| --network            | The networkId to retrieve the contract from (e.g. testnet)                                                             | When --contract is provided | mainnet           |

**Generate from file**

```bash
pactjs-cli generate --file ./myContract.pact
```

**Generate from chain**

```bash
pactjs-cli generate --contract free.coin --api https://api.chainweb.com/chainweb/0.0/mainnet01/chain/8/pact --chain 0 --network testnet04
```

## retrieve-contract

Retrieve a contract from an API using a /local call

| **Parameter** | **Description**                                                                                    | **Required** | **Default value**        |
| ------------- | -------------------------------------------------------------------------------------------------- | ------------ | ------------------------ |
| -m --module   | The module you want to retrieve (e.g. "coin")                                                      | Yes          |                          |
| -o, --out     | File to write the contract to (e.g. ./myContract.pact)                                             | Yes          |                          |
| -a, --api     | API to fetch the contract from (e.g. https://api.chainweb.com/chainweb/0.0/mainnet01/chain/8/pact) | Yes          | https://api.chainweb.com |
| -n, --network | Network to retrieve from (e.g. testnet)                                                            | No           | mainnet                  |

Retrieve a contract from chain

```bash
pactjs-cli retrieve-contract --out ./myContract.pact
```

## template-generate

Generate statically typed generators for templates

| **Parameter** | **Description**                                     | **Required** | **Default value** |
| ------------- | --------------------------------------------------- | ------------ | ----------------- |
| -c, clean     | Clean existing template                             | No           |                   |
| -f, --file    | File or directory to use to generate the client     | Yes          |                   |
| -o, --out     | Output file/directory to place the generated client | Yes          |                   |

Generate a client from a template

```bash
pactjs-cli template-generate --file ./contractDir --out ./myContract.pact
```
