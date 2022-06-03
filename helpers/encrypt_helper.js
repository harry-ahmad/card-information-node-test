var CryptoJS = require("crypto-js");
var constants = require('../lib/constant');

module.exports.crypto_encrypt = function(originalText){
  var ciphertext = CryptoJS.AES.encrypt(originalText, constants.cryptoKey).toString();
  return ciphertext;
}

module.exports.crypto_decrypt = function(ciphertext){
  var bytes  = CryptoJS.AES.decrypt(ciphertext, constants.cryptoKey);
  var originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
}