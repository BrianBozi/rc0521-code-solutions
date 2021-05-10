var student = {
  firstName: 'Brian',
  lastName: 'Bozigian',
  age: 26
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('fullname:', fullName);

student.liveInIrvine = false;
student.previousOccupation = 'customer service rep';
console.log('lives in irvine', student.liveInIrvine);
console.log('previous occupation:', student.previousOccupation);
console.log('Value of student:', student);

var vehicle = {
  make: 'toyota',
  model: 'prius',
  year: '2006'
};

vehicle['color'] = 'silver';
vehicle['isConvertible'] = false;

console.log('vehicle color: ', vehicle['color']);
console.log('vehicle isConvertible:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'rusty',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
