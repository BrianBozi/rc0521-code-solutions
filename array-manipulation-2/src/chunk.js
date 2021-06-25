/* exported chunk */

function chunk(array, size) {
  var arr = [];
  for (var i = 0; i < array.length; i += size) {
    var arr2 = array.slice(i, i + size);
    arr.push(arr2);
  }
  return arr;
}
