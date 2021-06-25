/* exported chunk */
function chunk (array, size){
  var arr = [];

  for( var i = 0; i < array.length; i++){
    var sliced  = array[i].slice(0, size)
    arr += sliced
  }

return arr
}
