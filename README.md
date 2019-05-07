# MyBtcUtil Library

## Content
* [Description](#description)
* [Installation](#installation)
* [Built With](#built-with)
* [Running tests](#running-tests)
* [Authors](#authors)

### Description

This project is a utility to build any bitcoin app. Basically it's a typescript wrap up around famous libraries (see the full list below).
The problme is, that there are 4-5 top libraries, but any of them has some limitations, and what's more important all of them are pure js. So they don't have ts definitions.
This is a little inconvenient, that's why I have created this library.


### Installation

You can install this project with the following commands:
```shell
# clone the repository
git clone https://github.com/dgaydukov/mybtcutil

# go to repo
cd mybtcutil

# install
npm i

# run the project
npm start
```


### Built With

* [bitcoinjs-lib](https://github.com/bitcoinjs/bitcoinjs-lib) - basic and most used library
* [bip38](https://github.com/bitcoinjs/bip38) - encrypt private key with password
* [bip39](https://github.com/bitcoinjs/bip39) - generate mnemonic code and seed (For HD wallets)
* [hdkey](https://github.com/cryptocoinjs/hdkey) - generate HD keys and derive any private keys and addresses (BIP32)
* [secp256k1](https://github.com/cryptocoinjs/secp256k1-node) - base library to work with elyptic curve (used to sign/verify messages)
* [coinselect](https://github.com/bitcoinjs/coinselect) - calculate what UTXO to use for particular transaction



### Running tests

To run tests, type in console `npm test`. This will run all tests under `./test` folder.


### Authors

* **Gaydukov Dmitiry** - *Take a look* - [How to become a Senior Javascript Developer](https://github.com/dgaydukov/how-to-become-a-senior-js-developer)