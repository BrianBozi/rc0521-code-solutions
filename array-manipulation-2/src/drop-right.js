/* exported dropRight */
function dropRight(array, count) {
  var newArr = [];
  for ( var i = 0; i < array.length - count; i++){
    if(array.length === 0 ){
      break
    }
    newArr.push(array[i])
  }
  return newArr
}
