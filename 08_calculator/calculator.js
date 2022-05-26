const add = function(number1, number2) {
	return number1 + number2;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(numbers) {
  var sum = 0;
	for(number of numbers){
    sum += number;
  }
  return sum;
};

const multiply = function(numbers) {
  var total = 0;
	for(var i = 0; i < numbers.length; i++){
    if(i == 0){
      total = numbers[i];
    }
    else{
      total = total * numbers[i];
    }
  }
  return total;
};

const power = function(number, exponent) {
	return Math.pow(number, exponent);
};

const factorial = function(number) {
	var total = 1;
  for(var i = 1; i <= number; i++){
    total = total * i;
  }
  return total;
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
