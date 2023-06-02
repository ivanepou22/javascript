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

// Comparing an Object with Another Object
const parrot = {
  group: 'bird',
  feathers: true,
  chirp: function () {
    console.log('Chirp chirp!');
  }
};

const pigeon = {
  group: 'bird',
  feathers: true,
  chirp: function () {
    console.log('Chirp chirp!');
  }
};

const myBird = parrot;

// console.log(parrot === pigeon) false
// console.log(myBird === parrot) true

// calling methods
const developer = {
  name: 'Andrew',
  sayHello: function () {
    console.log('Hi there!');
  }
};

//call
developer.sayHello();

//Passing Arguments Into Methods
const developer1 = {
  name: 'Andrew',
  sayHello: function () {
    console.log('Hi there!');
  },
  favoriteLanguage: function (language) {
    console.log(`My favorite programming language is ${language}`);
  }
};

developer.favoriteLanguage('JavaScript');
// My favorite programming language is JavaScript'

const myArray = [ function alerter() { alert('Hello!'); } ];
myArray[0]();

//💡 Call Methods by Property Name 💡
// We've been using anonymous functions (i.e., functions without a name) for object methods. However, naming those functions is still
//  valid JavaScript syntax. Consider the following object, greeter:

const greeter = {
  greet: function sayHello() {
    console.log('Hello!');
  }
};

//Note that the greet property points to a function with a name: sayHello. 
// Whether this function is named or not, greet is invoked the same way:

greeter.greet();

// A Method Can Access the Object it was Called On
// Recall that an object can contain data and the means to manipulate that data. 
// But just how can an object reference its own properties, much less manipulate some of those properties itself? 
// This is all possible with the this keyword!
// Using this, methods can directly access the object that it is called on.
//  Consider the following object, triangle:

const triangle = {
  type: 'scalene',
  identify: function () {
    console.log(`This is a ${this.type} triangle.`);
  }
};

// Note that inside the identify() method,
//  the value this is used. When you say this, 
//  what you're really saying is "this object" or "the object at hand." 
//  this is what gives the identify() method direct access to the triangle object's properties:

triangle.identify();