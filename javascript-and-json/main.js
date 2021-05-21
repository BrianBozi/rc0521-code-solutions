var array = [
  {

    isbn: '00111222E',
    title: 'Old Yeller',
    author: 'Fred Gipson'

  }, {

    isbn: '00111333B',
    title: 'Steve Jobs',
    author: 'Steve Jobs'

  }, {

    isbn: '0010101010',
    title: 'Goosebumps',
    author: 'RL Stine'

  }
];

console.log('Array:', array);
console.log('array typeof: ', typeof array);

// JSON.stringfiy will turb the array object literials in to a JSONstring.
// it is serialized
var stringifyBooks = JSON.stringify(array);

console.log('JOSN. stringify array: ', stringifyBooks);
console.log('JOSN. stringify array typeof: ', typeof stringifyBooks);

// JSON.parse will take the string and construct a value or object.
//  this is Deserialization
var student = '{ "Number": "1", "id": "136910E", "string name": " student" }';
console.log('logging student;', typeof student);

var studentJson = JSON.parse(student);
console.log('JSON student parse: ', typeof studentJson);
