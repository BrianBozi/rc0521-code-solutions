/* exported takeRight */
function takeRight(array, count) {
  var newArr = [];
  var output = array.length - count;
  for (var i = output; i < array.length; i++) {
    if(array.length === 0){
      return newArr
    }
      newArr.push(array[i])
  }
  return newArr
}
