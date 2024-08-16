const fibonacci = function(num) {
    num = parseInt(num);
    if (num === 0) {
        return 0;
    } else if (num < 0) {
        return 'OOPS'
    }

    let num1 = 0;
    let num2 = 1;
    let temp = 0;

    for (let i = 0; i < num; i++) {
        temp = num2 + num1;
        num1 = num2;
        num2 = temp;
    }

    return num1;
};

// Do not edit below this line
module.exports = fibonacci;
