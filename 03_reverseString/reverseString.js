const reverseString = function(words) {
    result = '';
    for (let i = words.length; i > 0; i--) {
        result += words[i - 1];
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
