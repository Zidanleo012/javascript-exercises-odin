const removeFromArray = function () {
    const arr = [].concat([...new Set(arguments[0])]);
    for (let i = arguments.length - 1; i > 0; i--) {
        let valueToRemove = arguments[i];
        let index = arr.indexOf(valueToRemove);
        if (index !== -1) {
            arr.splice(index, 1)
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
