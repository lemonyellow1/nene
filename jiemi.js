// 导入必要的库
const bitcoin = require('bitcoinjs-lib');
const CryptoJS = require('crypto-js');
const bip39 = require('bip39');
const bip32 = require('bip32');
const wif = require('wif');
const XLSX = require('xlsx');

const encryptionKey = 'mmAa112211'; // 自定义的密钥，请更换为你自己的安全密钥
// 解密私钥和助记词
const decryptedPrivateKey = CryptoJS.AES.decrypt(encryptedPrivateKey, encryptionKey).toString(CryptoJS.enc.Utf8);
const decryptedMnemonic = CryptoJS.AES.decrypt(encryptedMnemonic, encryptionKey).toString(CryptoJS.enc.Utf8);
