var number = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', function (event) {
  number++;
  var temp;
  if (number < 4) {
    temp = 'cold';
  } else if (number < 7) {
    temp = 'cool';
  } else if (number < 10) {
    temp = 'tepid';
  } else if (number < 13) {
    temp = 'warm';
  } else if (number < 16) {
    temp = 'hot';
  } else {
    temp = 'nuclear';
  }
  $hotButton.className = 'hot-button ' + temp;
  $clickCount.textContent = 'Clicks: ' + number;

});
