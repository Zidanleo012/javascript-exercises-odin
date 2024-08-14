const sumAll = function(...args) {
    const nonInt = args.filter(num => num % 1 !== 0 || typeof num !== 'number')
    if (args[0] < 0 || args[1] < 0 || nonInt.length > 0) return 'ERROR';

    const sorted = args.sort((a, b) => a - b);
    let smallNum = sorted[0];
    let largeNum = sorted[1];

    let sum = 0;
    for (; smallNum <= largeNum; smallNum++) {
        sum += smallNum;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
