var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {

  // So we are looping thorugh the [i] or the 3 $tabs
  // so if it isnt == to the event.target(the one clicked on)
  // then those [i] will be change to tab
  // however (else) if it does matchMedia, then the class name will be
  // changed to .tab and .active.

  for (var i = 0; i < $tabs.length; i++) {
    if (event.target !== $tabs[i]) {
      $tabs[i].className = 'tab';
    } else {
      event.target.className = 'tab ' + 'active';
    }
  }
  var $dataView = event.target.getAttribute('data-view');

  for (var x = 0; x < $view.length; x++) {
    if ($dataView === $view[x].getAttribute('data-view')) {
      $view[x].className = 'view';
    } else {
      $view[x].className = 'view ' + 'hidden';
    }
  }

});
