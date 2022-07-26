/* 
let js = 'amazing';
if (js === 'amazing') alert('JavaScript is FUN!');

console.log(40 + 8 + 23 - 10);

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
console.log(typeof true);
console.log(typeof 'ytjt');
console.log(typeof 23);
let year;
console.log(year);
console.log(typeof year);
year = 1998;
console.log(year);
console.log(typeof year);
console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 1990;

const job;

const now = 2022;
const ageYtjt = now - 2000;
console.log(ageYtjt);
console.log(ageYtjt * 10, ageYtjt / 10, 2 ** 3); // 2**3 means 2 to the power of 3. 2^3. 2 * 2 * 2.

const firstName = 'Ytjt';
const lastName = 'iykyk';
console.log(firstName + lastName);
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10;
console.log(x);
const ageIykYk = now - 2001;
console.log(ageYtjt > ageIykYk);
console.log(ageIykYk >= 30);

const isAdult = ageIykYk >= 18;
*/

// ============================ ASSIGNMENTS ============================
/* 
// Assignment 011 - Values And Variables

let country = 'South Korea';
let continent = 'Asia';
let population = 51780000;

console.log(country);
console.log(continent);
console.log(population);

//Assignment 012 - Data Types

const isIsland = true;
let language;

console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);

// Assignment 013 - let, const and var

language = 'Hangul';
// isIsland = false;

// Assignment 014 - Basic Operators

console.log(population / 2);
population += 1;
console.log(population);
const populationFinland = 6000000;
console.log(population > populationFinland);
const avgPopulation = 33000000;
console.log(population < avgPopulation);
const description =
  population +
  ' is in ' +
  continent +
  ', and its ' +
  population +
  ' people speak ' +
  language;
console.log(description);
 */
// ========================= CODING CHALLENGE =========================

// Coding Challenge #1

//Data 1
const markMass1 = 78;
const markHeight1 = 1.69;

const johnMass1 = 92;
const johnHeight1 = 1.95;

//Calculate BMI 1
const bmiMark1 = markMass1 / markHeight1 ** 2;
const bmiJohn1 = johnMass1 / johnHeight1 ** 2;

//BMI comparison 1
let markHigherBMI;
markHigherBMI = bmiMark1 > bmiJohn1;
console.log(bmiMark1, bmiJohn1);
console.log(markHigherBMI);

//Data 2
const markMass2 = 95;
const markHeight2 = 1.88;

const johnMass2 = 85;
const johnHeight2 = 1.76;

//Calculate BMI 2
const bmiMark2 = markMass2 / markHeight2 ** 2;
const bmiJohn2 = johnMass2 / johnHeight2 ** 2;

//BMI Comparison 2
markHigherBMI = bmiMark2 > bmiJohn2;
console.log(bmiMark2, bmiJohn2);
console.log(markHigherBMI);
