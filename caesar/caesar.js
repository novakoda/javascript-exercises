const caesar = function(string, shift) {
    return string
        .split("")
        .map(char => shiftChar(char, shift))
        .join("");
};
  
const codeSet = code => (code < 97 ? 65 : 97);

const mod = (n, m) => (n % m + m) % m;

const shiftChar = (char, shift) => {
const code = char.charCodeAt();

if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    return String.fromCharCode(
    mod(code + shift - codeSet(code), 26) + codeSet(code)
    );
}
return char;
};


module.exports = caesar

/* WHAT I HAD DAT HALF ASS WORKED
function isUpperCase(str) {
    return str === str.toUpperCase();
}

function isLetter(str) {
    return str === str.replace(/[^A-Za-z]/g, '');
}

const caesar = function(str, shift) {
    let message = '';
    for (i = 0; i < str.length; i++) {
        if (isUpperCase(str[i]) && isLetter(str[i])) {
            message += String.fromCharCode((str.charCodeAt(i) + shift - 65) % 26 + 65);
        } else if (isLetter(str[i] === false)) {
            message += str[i];
        } else {
            message += String.fromCharCode((str.charCodeAt(i) + shift - 97) % 26 + 97);
        }
    };
    return message;
}
*/