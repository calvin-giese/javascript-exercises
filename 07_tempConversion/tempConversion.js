const ftoc = function(fahrenheit) {
  var celsius = (fahrenheit - 32) * 0.5556;
  return formatTemp(celsius);
};

const ctof = function(celsius) {
  var fahrenheit = (celsius * 1.8) + 32;
  return formatTemp(fahrenheit);
};

function formatTemp(temp){
  temp = temp.toFixed(1);
  return parseFloat(temp);
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
