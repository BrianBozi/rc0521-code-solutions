/* exported capitalize */
function capitalize(word) {

  var capital = word[0].toUpperCase();
  var lowerCase = word.toLowerCase();
  var length = lowerCase.length;
  var theWord = lowerCase.slice(1, length);

  return capital + theWord;

}
