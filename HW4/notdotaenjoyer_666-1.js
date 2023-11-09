class VigenèreCipher {
    constructor(key, alphabet) {
        this.key = key;
        this.alphabet = alphabet;
    }

    encodeChar(char, keyChar) {
        const charIndex = this.alphabet.indexOf(char);
        const keyIndex = this.alphabet.indexOf(keyChar);
        if (charIndex === -1) {
            return char;
        }
        return this.alphabet[(charIndex + keyIndex) % this.alphabet.length];
    }

    decodeChar(char, keyChar) {
        const charIndex = this.alphabet.indexOf(char);
        const keyIndex = this.alphabet.indexOf(keyChar);
        if (charIndex === -1) {
            return char;
        }

        const newIndex = (charIndex - keyIndex + this.alphabet.length) % this.alphabet.length;
        return this.alphabet[newIndex];
    }

    encode(message) {
        return message.split('').map((char, index) => {
            return this.encodeChar(char, this.key[index % this.key.length]);
        }).join('');
    }

    decode(message) {
        return message.split('').map((char, index) => {
            return this.decodeChar(char, this.key[index % this.key.length]);
        }).join('');
    }
}


// Example usage:
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var key = 'password';

var c = new VigenèreCipher(key, alphabet);

console.log(c.encode('codewars')); // returns 'rovwsoiv'
console.log(c.decode('laxxhsj'));  // returns 'waffles'

console.log(c.encode('CODEWARS')); // returns 'CODEWARS'
