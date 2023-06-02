// create and modify objects
//using literal 
const myObject = {};

//using the constructor function
const myObject1 = new Object();

const cat = {
  age: 2,
  name: 'Bailey',
  meow: function () {
    console.log('Meow!');
  },
  greet: function (name) {
    console.log(`Hello ${name}`);
  }
};

cat.age += 2;
cat.name = 'Bambi';

// Adding Properties
// Properties can be added to objects simply 
// by specifying the property name, then giving it a value. 
// Let's start off with a blank object, then add two properties:

const printer  = {}
printer.on = true;
printer.mode = 'Black and white';
printer['remainingSheets'] = 168;
printer.print = function () {
  console.log('The printer is printing!');
};

//remove the properties
const deleted = delete printer.mode;

console.log(deleted)