var $click = document.querySelector('.task-list');

$click.addEventListener('click', function (event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagname: ', event.target.tagName);

  if (event.target.tagName !== 'BUTTON') {

    return;
  }
  var taskList = event.target.closest('.task-list-item');
  console.log('closest task-list-item: ', taskList);
  taskList.remove();

});
