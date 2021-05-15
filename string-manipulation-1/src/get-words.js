/* exported getWords */

function getWords(strings) {
  var words = strings.split(' ');
  var gotWords = words.filter(Boolean);
  return gotWords;
}
