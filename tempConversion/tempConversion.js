const ftoc = function(temp) {
  let newTemp = (temp - 32) * (5/9);
  rounded = newTemp.toFixed(1);
  rounded = parseFloat(rounded);
  return rounded;
}

const ctof = function(temp) {
  let newTemp = temp * (9/5) + 32;
  rounded = newTemp.toFixed(1);
  rounded = parseFloat(rounded);
  return rounded;
}

module.exports = {
  ftoc,
  ctof
}
