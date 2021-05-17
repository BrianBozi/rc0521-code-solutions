function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

var $button = document.querySelector('.click-button');
$button.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var $hover = document.querySelector('.hover-button');
$hover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button doubled-clicked');
  console.log(event);
  console.log(event.target);
}

var $doubledClicked = document.querySelector('.double-click-button');
$doubledClicked.addEventListener('dblclick', handleDoubleClick);
