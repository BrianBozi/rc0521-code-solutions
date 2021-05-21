/* exported toObject */
function toObject(keyValuePair) {

  var property = keyValuePair[0];
  var key = keyValuePair[1];

  var obj = { [property]: key };
  return obj;
}

// function toObject(keyValuePair) {
//   var obj = {};
//   var str = '';
//   for (var x of keyValuePair) {

//   }

// }
