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

console.log(cat.age);