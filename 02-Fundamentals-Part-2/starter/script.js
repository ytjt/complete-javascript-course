'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :P');

// const interface = 'Audio';

// function logger() {
//   console.log('My name is YTJT');
// }

// logger();
// logger();
// logger();

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apples ${orangePieces} pieces of oranges.`;

//   return juice;
// }
// console.log(typeof fruitProcessor());
// console.log(fruitProcessor(2, 3));

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// //Function declaration
// function calcAge1(birthYear) {
//   // const age = 2037 - birthYear;
//   // return age;
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// //function expression (anonymous function)
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);

// console.log(age1, age2);

// //Arrow function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   //   return retirement;
//   return `${firstName} retires in ${retirement} years.`;
// };

// console.log(yearsUntilRetirement(1991, 'YTJT'));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years.`);
//     return retirement; // return keyword immediately exit the function
//   } else {
//     console.log(`${firstName} has already retired!`);
//     return -1; //to show no meaning
//   }
// };

// console.log(yearsUntilRetirement(1991, 'YTJT'));
// console.log(yearsUntilRetirement(1950, 'Po'));

// // Arrays

// //Literal Syntax
// const friends = ['Fatin', 'Liyana', 'Yuna', 'Minji'];
// console.log(friends);

// // Alternative syntax
// const y = new Array(1998, 2000, 2001, 2002);

// console.log(friends[2], friends[3]);

// console.log(friends.length); // array size
// console.log(friends[friends.length - 1]); // retrieve last element

// friends[1] = 'Sabrina';
// console.log(friends);

// const firstName = 'Ytjt';
// const ytjt = [firstName, 'Iykyk', 2022 - 1998, 'student', friends];
// console.log(ytjt);

// // Exercise

// const years = [1990, 1967, 2002, 2010, 2018];

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// console.log(calcAge(years[years.length - 1]));
// console.log(calcAge(years[0]));

// const ages = [calcAge(years[0]), calcAge(years[years.length - 1])];
// console.log(ages);

// // Array Methods
// const friends = ['Fatin', 'Liyana', 'Yuna', 'Minji'];

// // Add element to the end of the array
// friends.push('Jiwon');
// console.log(friends);
// console.log(friends.length);

// const newLength = friends.push('Juyeon');
// console.log(friends);
// console.log(newLength); // 6
// console.log(friends.length); // 6

// // Add element to the beginning of the array
// friends.unshift('Sabrina');
// console.log(friends);

// //Removing the last elements in the array
// friends.pop();
// console.log(friends);

// const popped = friends.pop();
// console.log(friends);
// console.log(popped); // Jiwon

// //Removing the first element in the array
// friends.shift();
// console.log(friends);
// const shifted = friends.shift();
// console.log(friends);
// console.log(shifted); // Fatin

// console.log(friends.indexOf('Yuna'));
// console.log(friends.indexOf('Fatin')); // -1

// console.log(friends.includes('Yuna'));
// console.log(friends.includes('Fatin'));

/* ---- INTRODUCTION TO OBJECTS ---- */
// // Array - can hold different type of data.
// const ytjtArray = ['Ytjt', 'Iykyk', 2037 - 2020, ['Jiwon', 'Yuna', 'Sooyoung']];

// // Object literal syntax
// // 1. Order of value does not matter
// // 2. Unstructured data
// // 3. retrieve data from its name
// // property: value
// // 4 properties / keys
// const ytjt = {
//   firstName: 'Ytjt',
//   lastName: 'Iykyk',
//   age: 2037 - 2020,
//   friends: ['Jiwon', 'Yuna', 'Sooyoung'],
// };

// console.log(ytjt);

// // Dot Notation
// console.log(ytjt.lastName); // objectName.property

// //Brackets Notation - Compute
// console.log(ytjt['lastName']); // objectName[expression]

// const nameKey = 'Name';
// console.log(ytjt['first' + nameKey]);
// console.log(ytjt['last' + nameKey]);

// const interestedIn = prompt(
//   'What do you want to know about ytjt? Choose between firstName, lastName, age and friends'
// );

// // console.log(ytjt.interestedIn); // undefined - because no property called interestedIn

// if (ytjt[interestedIn]) {
//   console.log(ytjt[interestedIn]);
// } else {
//   console.log(
//     `Wrong request. '${interestedIn}' choice is not available. Choose between firstName, lastName, age and friends`
//   );
// }

// ytjt.location = 'South Korea';
// ytjt['favouriteFood'] = 'Ramyeon';
// console.log(ytjt);

// // Challenge
// // "Ytjt has 3 friends, and her bestfriend is called Yuna."
// console.log(
//   `${ytjt.firstName} has ${ytjt.friends.length} friends, and her bestfriend is called ${ytjt.friends[1]}`
// );

/* ---- OBJECT METHODS ---- */

// const ytjt = {
//   firstName: 'Ytjt',
//   lastName: 'Iykyk',
//   birthYear: 1990,
//   friends: ['Jiwon', 'Yuna', 'Sooyoung'],
//   hasDriversLicense: true,

//   // Use function expression (property: function value)
//   // calcAge: function(birthYear){ // Method - any function that is attached to an object
//   //   return 2022 - birthYear;
//   // }

//   // calcAge: function () {
//   //   // this - points to 'this' object
//   //   console.log(this);
//   //   return 2022 - this.birthYear;
//   // },

//   calcAge: function () {
//     this.age = 2022 - this.birthYear; // creates new property in the object called 'age' and assign the value.
//     return this.age;
//   },

//   getSummary: function () {
//     return `${
//       this.firstName
//     } is ${this.calcAge()} years old, and she has ${(this.hasDriversLicense =
//       this.hasDriversLicense ? `a` : `no`)} drivers license.`;
//   },
// };

// console.log(ytjt.calcAge(1990));
// console.log(ytjt['calcAge'](1990));

// console.log(ytjt.calcAge()); // when have 'this' keyword

// console.log(ytjt.age);

// // Challenge - getSummary() function
// // "Ytjt is 46-year old, and she has a/no driver's license."
// console.log(ytjt.getSummary());

/* ---- LOOPING ARRAYS ---- */

const ytjtArray = [
  'Ytjt',
  2037 - 2020,
  'Iykyk',
  ['Jiwon', 'Yuna', 'Sooyoung'],
  false,
];
const types = []; // empty array

for (let i = 0; i < ytjtArray.length; i++) {
  // Reading
  console.log(ytjtArray[i], typeof ytjtArray[i]);

  // Filling
  // types[i] = typeof ytjtArray[i];
  types.push(typeof ytjtArray[i]);
}

console.log(types);

const years = [2000, 2001, 2002, 2003, 2004];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// Continue and break
console.log('---- ONLY STRING ----');
for (let i = 0; i < ytjtArray.length; i++) {
  if (typeof ytjtArray[i] !== 'string') continue; // continue - immediately exit the current ITERATION

  console.log(ytjtArray[i], typeof ytjtArray[i]);
}

console.log('---- BREAK WITH NUMBER ----');

for (let i = 0; i < ytjtArray.length; i++) {
  if (typeof ytjtArray[i] === 'number') break; // break - immediately exit the current LOOP

  console.log(ytjtArray[i], typeof ytjtArray[i]);
}
