
const palindromes = function(string) {
    processedString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
    return (
      processedString
        .split("")
        .reverse()
        .join("") == processedString
    );
  };

module.exports = palindromes

/* dis one kinda worked

const palindromes = function(str) {
    string = str.split();
    reverseString = string.reverse();
    if (reverseString.length !== string.length) return false;
    for (i = 0; i < string.length; ++i) {
        if (string[i] !== reverseString[i]) return false;
    };
    return true;
};

*/


/* dis one aint work
const palindromes = function(str) {
    let splitString = str.split("");
    let punctuationless = splitString.replace(/[^A-Za-z0-9_]/g,"");
    let string = punctuationless.slice(0);
    let reverseString = string.reverse();
    console.log(splitString);
    console.log(reverseString);
    if (reverseString.length !== splitString.length) return false;
    for (i = 0; i < splitString.length; ++i) {
        if (splitString[i] !== reverseString[i]) return false;
    };
    return true;
};
*/
