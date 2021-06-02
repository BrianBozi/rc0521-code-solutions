var $heading = document.querySelector('h1');
var countDown = 4;

function Timer() {
  var timerID = setInterval(function () {
    if (countDown === 1) {
      $heading.textContent = 'hasta la vista baby';
      clearInterval(timerID);
      return;
    } countDown -= 1;
    $heading.textContent = countDown;
  }, 1000);
}

window.addEventListener('load', function () {
  Timer();
});
