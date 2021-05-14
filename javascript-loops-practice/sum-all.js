/* exported sumAll */
function sumAll(number) {
  var sum = 0;
  for (var i = 0; i < number.length; i++) {
    sum += number[i];
  }
  return sum;
}
