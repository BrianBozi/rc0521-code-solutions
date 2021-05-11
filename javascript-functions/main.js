function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('5 minsutes is ' + convertMinutesToSecondsResult + ' seconds');

function greet(name) {
  var greeting = 'Hello there ' + name;
  return greeting;
}

var myGreeting = greet('Brian');
console.log(myGreeting);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var roomArea = getArea(17, 42);
console.log('The area of my room is ', roomArea);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var theFirstName = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('The first name is ', theFirstName);

function getLastElement(array) {
  var lastArray = array.length - 1;
  return array[lastArray];
}

var getLastArray = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('The last item in the array is:', getLastArray);
