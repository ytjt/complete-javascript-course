'use strict';

// function calcAge() {
//   var now = 2037;
//   var age = now - 2027;
//   console.log(now);
//   return age;
// }
// calcAge();
// console.log(now);

// Function Declaration
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);

//   function printAge() {
//     const output = `Hi! My name is ${firstName} and I am ${age}-years old!`;
//     console.log(output);

//     if (birthYear <= 1981 && birthYear >= 1996) {
//       var millenial = true;
//       const output = `${firstName}, you are a millenial because you were born in ${birthYear}`;
//       console.log(output);
//     } else {
//       millenial = false;
//       const firstName = 'IYKYK';
//       const output = `${firstName}, you are not a millenial because you were born in ${birthYear}`;
//       console.log(output);
//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial);
//     // console.log(add(2, 5));
//   }
//   printAge();
//   return age;
// }

// Function expression
// const calcAge = function (birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);
//   return age;
// };

// Arrow function
// const calcAge = birthYear => {
//   const age = 2037 - birthYear;
//   console.log(firstName);
//   return age;
// };

// const firstName = 'YTJT';
// calcAge(2017);

/* ---------------- HOISTING ------------ */
// console.log(me);
// // console.log(job);
// console.log(year);

// var me = 'YTJT';
// let job = 'Software Engineer';
// const year = 2022;

// Functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addExpr);
// console.log(addArrow);
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

//Example
// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);
// console.log(z);

/* ---------------- THIS KEYWORD IN PRACTICE ------------ */

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(2020);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(2020);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2020,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const kekw = jonas.calcAge;
// kekw();

/* ---------------- REGULAR FUNCTIONS VS. ARROW FUNCTIONS ------------ */
// // var firstName = 'Matilda';
// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     // Problem
//     // const isMillenial = function () {
//     //   console.log(this);
//     //   console.log(this.year >= 1981 && this.year <= 1996);
//     // };
//     // isMillenial();

//     // Solution 1
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };
//     // isMillenial();

//     // Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   //Arrow function
//   greet: () => {
//     console.log(this);
//     console.log(this.firstName);
//     console.log(`Hey ${this.firstName}`);
//   }, //window.firstName
// }; //not a code block, its an object literal
// jonas.greet();
// jonas.calcAge();

// // Arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 4, 2, 4);

// const addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

/* ---------------- PRIMITIVES VS. OBJECTS (PRIMITIVE VS. REFERENCE TYPES) ------------ */

// Primitive types
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log('age:', age);
// console.log('oldAge:', oldAge);

// Reference types
// const me = {
//   name: 'Jonas',
//   age: 30,
// };
// console.log('Me:', me);

// const friend = me;
// friend.age = 27;

// console.log('Friend:', friend);
// console.log('Me:', me);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage:', jessica);
// console.log('After marriage:', marriedJessica);

let marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

marriedJessica = {};

console.log(marriedJessica);

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Krystal', 'Taylor'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Jennie');
jessicaCopy.family.push('Irene');
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
