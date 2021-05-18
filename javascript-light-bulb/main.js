var $background = document.querySelector('.container');
var $button = document.querySelector('.circle');

var clicks = 0;

$button.addEventListener('click', function (event) {
  clicks++;
  var onOff;
  if (clicks % 2 === 0) {
    onOff = 'on';
  } else {
    onOff = 'off';
  }

  $button.className = 'circle ' + onOff;
  $background.className = 'container ' + onOff;
});
