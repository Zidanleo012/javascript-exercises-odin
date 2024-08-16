const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
	let result = 0;
  numArray.forEach(num => {
    result += num;
  })
  return result;
};

const multiply = function(numArray) {
  let result = 1;
  numArray.forEach(num => {
    result *= num
  })

  return result;
};

const power = function(num, pow) {
  let result = 1;
  for (let i = 0; i < pow; i++) {
    result *= num;
  }

  return result;
};

const factorial = function(num) {
	if (num === 0 || num === 1){
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
