/* exported getKeys */
function getKeys(object) {
  var arr = [];

  for (var x in object) {

    arr.push(x);
  }
  return arr;
}
