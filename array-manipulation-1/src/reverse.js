/* exported reverse */
function reverse(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    arr.unshift(array[i]);
  }
  return arr;
}
