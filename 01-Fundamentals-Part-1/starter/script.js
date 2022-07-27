/* 
//====== lecture values and variables, data types ======
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
*/

/*
// ====== lecture let, const and var ======
let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 1990;

const job;
*/

/*
// ====== lecture basic operators ======
const now = 2022;
const ageYtjt = now - 2000;
console.log(ageYtjt);
console.log(ageYtjt * 10, ageYtjt / 10, 2 ** 3); // 2**3 means 2 to the power of 3. 2^3. 2 * 2 * 2.

const firstName = 'Ytjt';
const lastName = 'iykyk';
console.log(firstName + lastName); // String concatenate
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10;
console.log(x);
const ageIykYk = now - 2001;
console.log(ageYtjt > ageIykYk);
console.log(ageIykYk >= 30);

const isAdult = ageIykYk >= 18;
*/

/*
// ====== lecture string and template literals ======
const fName = 'Ytjt';
const sName = 'Iykyk';
const job = 'Software Engineer';
const bYear = 1998;
const y = 2025;

const ytjt = "i'm " + fName + ', a ' + (y - bYear) + ' years old ' + job + '!';
console.log(ytjt);
//Template literals
const ytjtNew = `I'm ${fName}, a ${y - bYear} years old ${job}!`;
console.log(ytjtNew);

console.log(`Just a regular string...`);

console.log(`Just 
a 
regular 
string...`);
*/

/* 
// ====== lecture if else statements control structure ======
const age = 17;

if (age >= 18) {
  console.log('Ytjt can start their driving license');
} else {
  const yearsLeft = 18 - age;
  console.log(`Ytjt is too young. Wait another ${yearsLeft} year :)`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
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
  country +
  ' is in ' +
  continent +
  ', and its ' +
  population +
  ' people speak ' +
  language;
console.log(description);

// Assignment 015 - Strings and Template Literals

const description2 = `${country} is in ${continent}, and its ${population} people speak ${language}.`;
console.log(description2);

// Assignment 016 - Taking Decisions: if/else Statements

// let population = 130000000;
if (population >= 33000000) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(
    `${country}'s population is ${avgPopulation - population} below average.`
  );
}
 */
// ========================= CODING CHALLENGE =========================
/* 
///////////// Coding Challenge #1 /////////////

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

///////////// Coding Challenge #2 /////////////

if (markHigherBMI) {
  console.log(`Mark's BMI is higher than John's!
  Mark's BMI (${bmiMark2}) is higher than John's BMI (${bmiJohn2})`);
} else {
  console.log(`John's BMI is higher than Mark's!
  John's BMI (${bmiJohn2}) is higher than Mark's BMI (${bmiMark2})`);
}

// if (markHigherBMI) {
//   console.log(`Mark's BMI is higher than John's!
//   Mark's BMI (${bmiMark1}) is higher than John's BMI (${bmiJohn1})`);
// } else {
//   console.log(`John's BMI is higher than Mark's!
//   John's BMI (${bmiJohn1}) is higher than Mark's BMI (${bmiMark1})`);
// }
 */

///////////// Coding Challenge #3 /////////////
/* 
//Task 1
const avgDolphin = (88 + 91 + 110) / 3;
const avgKoala = (96 + 108 + 89) / 3;
console.log(avgDolphin, avgKoala);

// Task 2
if (avgDolphin > avgKoala) {
  console.log('Winner is Dolphins!');
} else if (avgKoala > avgDolphin) {
  console.log('Winner is Koalas!');
} else {
  console.log('Its a DRAW!');
}
*/
/* 
//BONUS 1
const avgDolphin = (97 + 112 + 101) / 3;
const avgKoala = (109 + 95 + 123) / 3;
console.log(avgDolphin, avgKoala);

if (avgDolphin > avgKoala && avgDolphin >= 100) {
  console.log('Winner is Dolphins!');
} else if (avgKoala > avgDolphin && avgKoala >= 100) {
  console.log('Winner is Koalas!');
} else {
  console.log('Its a DRAW!');
}
 */

//BONUS 2
const avgDolphin = (97 + 112 + 101) / 3;
const avgKoala = (109 + 95 + 106) / 3;
console.log(avgDolphin, avgKoala);

if (avgDolphin === avgKoala && avgDolphin >= 100 && avgKoala >= 100) {
  console.log("It's a DRAW!");
} else if (avgDolphin >= 100 && avgDolphin > avgKoala) {
  console.log('Winner is DOLPHINS!');
} else if (avgKoala >= 100 && avgKoala > avgDolphin) {
  console.log('Winner is KOALAS!');
} else {
  console.log('No one wins LOL');
}
