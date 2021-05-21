/* exported getValues */
function getValues(object) {
  var arr = [];

  for (var x in object) {
    arr.push(object[x]);
  }
  return arr;
}
