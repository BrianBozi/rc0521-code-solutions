/* exported drop */
function drop (array, count){
  var output = [];
  for(var x = count; x < array.length; x++){
    if (array.length === 0){
      return output
    } else{
      output.push(array[x])

    }
  }
   return output;
}
