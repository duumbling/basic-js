const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  _checkArgs(args) {
    if (!args[0] || !args[1]) throw new Error('Incorrect arguments!');
  }

  encrypt(message, key) {
    this._checkArgs(arguments);
    message = message.toUpperCase();
    key = key.toUpperCase();

    let encryptedMessage = '';
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        const keyCode = key.charCodeAt(j % key.length) - 65;
        const shiftedCode = (charCode + keyCode - 65) % 26 + 65;
        encryptedMessage += String.fromCharCode(shiftedCode);
        j++;
      } else {
        encryptedMessage += message[i];
      }
    }

    return this.direct ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    this._checkArgs(arguments);
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let decryptedMessage = '';
    let j = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const charCode = encryptedMessage.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        const keyCode = key.charCodeAt(j % key.length) - 65;
        const shiftedCode = (((charCode - 65) - keyCode) + 26) % 26 + 65;
        decryptedMessage += String.fromCharCode(shiftedCode);
        j++;
      } else {
        decryptedMessage += encryptedMessage[i]
      }
    }

    return this.direct ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
