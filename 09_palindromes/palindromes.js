const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '')

    let reversedStr = str.split('').reverse().join('');

    return reversedStr === str
};

// Do not edit below this line
module.exports = palindromes;
