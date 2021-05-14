/* exported addSuffixToAll */
function addSuffixToAll(word, suffix) {
  var arr = [];
  for (var i = 0; i < word.length; i++) {
    arr.push(word[i] += suffix);
  }
  return arr;
}
