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

function changeToEight(n) {
  n = 8;// whatever n was, it is now 8... but only in this function!
}

let n = 7;

changeToEight(n);

//Passing an object

let originalObject = {
    favoriteColor : 'red'
}

function setToBlue(object) {
    object.favoriteColor = 'blue';
}

const iceCreamOriginal = {
  Andrew: 3,
  Richard: 15
};

const iceCreamCopy = iceCreamOriginal;
iceCreamCopy.Richard;
iceCreamCopy.Richard = 99;
// console.log(iceCreamCopy)
// console.log(iceCreamOriginal)