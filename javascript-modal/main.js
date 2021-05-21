var $button1 = document.querySelector('.button1');
var $button2 = document.querySelector('.button2');
var $popUp = document.querySelector('.pop-up');

function show(event) {
  $popUp.className = 'pop-up-on';

}
$button1.addEventListener('click', show);

function hide(event) {
  $popUp.className = 'pop-up';

}

$button2.addEventListener('click', hide);
