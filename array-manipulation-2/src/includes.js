/* exported includes */
// function includes(array, value){
//   for (var i = 0; i < array.length; i++){
//     if( value === array[i]){
//       return true
//     } else {
//       return false
//     }
//   }
// }

function includes(array, value){
  var output = false;
  // debugger
  for (var i = 0; i < array.length - 1; i++){
    if (value !== array[i]){
      output = false
    } else if(!array.length){
      output = false
      break

    }
    else {
      output = true;
      break
    }
  }
return output
}
