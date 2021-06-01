function ExampleConstructor() {}

console.log('value of the prototyp', ExampleConstructor.prototype);
console.log('typeof the prototype', typeof ExampleConstructor.prototype);

var newVarr = new ExampleConstructor();

console.log('newVarr', newVarr);
var instance = newVarr instanceof ExampleConstructor;
console.log(instance);
