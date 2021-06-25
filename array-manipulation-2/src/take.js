/* exported take */
function take(array, count){
  var output = [];
  for(var i = 0; i < count; i++) {
    if(array.length === 0){
      return output
    } else {
      output.push(array[i])
}
  }
 return output
}
