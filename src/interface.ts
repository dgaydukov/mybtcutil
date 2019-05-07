/**
 * List of interfaces used for wallet utility
 */

/**
 * Wallet.
 * Cause by default all bitcoin wallets use Wif as key format, we also export private key as hex string, just in case
 */
 export interface IWallet{
     privateKey: string;
     privateKeyHex: string;
     publicKey: string;
     address: string;
 }



 export interface IHdWallet{
     privateKey: string;
     publicKey: string;
 }


 export interface IUtxo {
    privateKey: string;
    address: string;
    value: string;
    txId: string;
    vout: number;
}

export interface ITarget {
    to: string;
    value: string;
}

export interface IBtcTxOpts {
    from: IUtxo[],
    to: ITarget[],
    changeAddress?: string;
}

export interface IEncryptedWallet {
    encryptedKey: string;
    address: string;
}


export interface ICryptoWallet {
    generateHdWallet(): IHdWallet;

    deriveWallet(index: string, masterPrivateKey: string): IWallet;

    generateWallet(privateKey?: string): IWallet;

    getAddressFromPrivateKey(privateKey: string): string;

    getAddressFromPublicKey(publicKey: string): string;

    getPublicKeyFromPrivateKey(privateKey: string): string;

    validateAddress(address: string): boolean;

    sign(msg: string, privateKey: string): string;

    verify(msg: string, sig: string, publicKey: string): boolean;

    hashMessage(msg: string): string;

    recoverPublicKey(msg: string, sig: string): string;

    buildRawTx(opts: IBtcTxOpts, privateKey: string): string;

    encryptWallet(privateKey: string, password: string): IEncryptedWallet;

    decryptWallet(wallet: IEncryptedWallet, password: string): string;
}