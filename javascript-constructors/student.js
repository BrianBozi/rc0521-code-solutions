/* exported Student */
function Student(firstName, lastName, subject) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.subject = subject;
}

// var getFullName = {
//   describe: function () {
//     var getFullName = this.firstName + ' ' + this.lastName;
//     return getFullName;
//   }

// };

// Object.setPrototypeOf(Student, getFullName);

Student.prototype.getFullName = function () {
  var getFullName = this.firstName + ' ' + this.lastName;
  return getFullName;
};

Student.prototype.getIntroduction = function () {
  var getIntroduction = 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';
  return getIntroduction;
};
