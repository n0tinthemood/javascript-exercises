const palindromes = function (str) {
    let re = /[\W]/g
    let lowerRegStr = str.toLowerCase().replace(re, "");
    let reverseStr = lowerRegStr.split("").reverse().join("");
    return reverseStr === lowerRegStr;
};

// Do not edit below this line
module.exports = palindromes;
