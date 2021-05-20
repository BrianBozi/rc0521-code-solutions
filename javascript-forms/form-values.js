var $contact = document.querySelector('#contact-form');

$contact.addEventListener('submit', function (event) {
  event.preventDefault();
  var info = {
    name: $contact.name.value,
    email: $contact.email.value,
    message: $contact.elements.message.value
  };
  console.log(info);
  document.querySelector('form').reset();
});
