var num1 = 50;
var num2 = 7;
var num3 = 10;

var maximunValue = Math.max(num1, num2, num3);
console.log('The max value is :', maximunValue);

var heros = ['Spiderman', 'Hulk', 'IronMan', 'MegaMan'];
var randomNumber = Math.random();
randomNumber = randomNumber * heros.length;
var randomIndex = Math.floor(randomNumber);
console.log('Random number Value:', randomIndex);
var randomHero = heros[randomIndex];
console.log('random Hero', randomHero);

var library = [{
  title: 'Goosebumps',
  author: 'R.L. Stine'
},
{
  title: 'Ready Player One',
  author: 'Ernest Cline'
},
{
  title: 'Sign of the beaver',
  author: 'Elizabeth George Speare'
}];

var lastBook = library.pop();
console.log('the lastBook is:)', lastBook);

var firstBook = library.shift();
console.log('the firstBook is :', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('The library has :', library);

var fullName = 'Brian Bozigian';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
