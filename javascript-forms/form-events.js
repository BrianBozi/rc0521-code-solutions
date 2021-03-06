var $name = document.querySelector('input[type="text"');
var $email = document.querySelector('input[type="email"');
var $textArea = document.querySelector('textarea');

function handleFocus(event) {
  console.log('focus event fired');
  console.log('event target name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event target name:', event.target.name);
}

function handleInput(event) {
  console.log('event target name:', event.target.name);
  console.log('event target value:', event.target.value);

}

$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);

$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);

$textArea.addEventListener('focus', handleFocus);
$textArea.addEventListener('blur', handleBlur);
$textArea.addEventListener('input', handleInput);
