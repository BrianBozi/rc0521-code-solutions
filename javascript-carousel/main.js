var $images = document.querySelectorAll('.slide');
// var $imageSlider = document.querySelectorAll('.image-slider');
var $prevButton = document.querySelector('.previous-btn');
var $nextButton = document.querySelector('.next-btn');
// var $allSlides = document.querySelectorAll('.slide');
var $bottomButtonTab = document.querySelector('.bottom-selectors');
var $bottomButtons = document.querySelectorAll('.bottom-btn');
var counter = 0;

// /function activate(images, button) {
function activate(images, button) {
  images[counter].className = 'slide on';
  button[counter].className = 'bottom-btn ' + 'oon';
}
// function deactivate(images, button) {
function deactivate(images, button) {
  images[counter].className = 'slide off';
  button[counter].className = 'bottom-btn';
}

function nextImage() {
  // $button is for fontawesome button
  deactivate($images, $bottomButtons);
  // deactivate($images);
  counter = (counter + 1) % $images.length;
  activate($images, $bottomButtons);
}

function prevImage() {
  deactivate($images, $bottomButtons);
  if (counter === 0) {
    counter = 5;
  }
  counter = (counter - 1) % $images.length;
  activate($images, $bottomButtons);
}
// event listeners for the next and prev buttons
$nextButton.addEventListener('click', nextImage);
$prevButton.addEventListener('click', prevImage);

// bottom buttons
$bottomButtonTab.addEventListener('click', function (event) {
  for (var i = 0; i < $bottomButtons.length; i++) {
    if (event.target !== $bottomButtons[i]) {
      $images[i].className = 'slide ' + 'off';
      $bottomButtons[i].className = 'bottom-btn';
    } else {
      counter = i;
      $images[i].className = 'slide ' + 'on';
      $bottomButtons[i].className = 'bottom-btn ' + 'oon';

    }
  }

});

// setInterval
setInterval(function () { nextImage(); }, 3000);
