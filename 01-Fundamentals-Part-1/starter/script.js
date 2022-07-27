// ============================ ASSIGNMENTS ============================

/* // Assignment 011 - Values And Variables

let country = 'South Korea';
let continent = 'Asia';
let population = 51780000;

console.log(country);
console.log(continent);
console.log(population); */

/* //Assignment 012 - Data Types

const isIsland = true;
let language;

console.log(isIsland);
console.log(population);
console.log(country);
console.log(language); */

/* // Assignment 013 - let, const and var

language = 'Hangul';
// isIsland = false; */

/* // Assignment 014 - Basic Operators

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
console.log(description); */

/* // Assignment 015 - Strings and Template Literals

const description2 = `${country} is in ${continent}, and its ${population} people speak ${language}.`;
console.log(description2); */

/* // Assignment 016 - Taking Decisions: if/else Statements

// let population = 130000000;
if (population >= 33000000) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(
    `${country}'s population is ${avgPopulation - population} below average.`
  );
} */

/* //Assignment 017 -Type Conversion and Coercion
console.log('9' - '5'); // 4 ✅
console.log('19' - '13' + '17'); // 617 ✅
console.log('19' - '13' + 17); // 23 ✅
console.log('123' < 57); // false ✅
console.log(5 + 6 + '4' + 9 - 4 - 2); // 117 ❌ 1143 ✅
console.log('7' + 3 + 2); //75 ❌ 732 ✅
console.log('7' + 3 - 2); //71 ✅
console.log(5 + 6 + '4' + 9 * 4 * 2); // 11472 ✅ */

/* // Assignment 018 - Equality Operators: == vs. ===
// const numNeighbours = prompt(
//   'How many neighbour countries does your country have?');

// if (numNeighbours == 1) {
//   console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No borders');
// }

const numNeighbours = Number(
  prompt('How many neighbour countries does your country have?')
);

if (numNeighbours === 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 border');
} else {
  console.log('No borders');
} */

//Assignment 019 - Logical Operators

const country = 'South Korea';
const continent = 'Asia';
const population = 51780000;
const isIsland = true;
const language = 'Hangul';

console.log(country);
console.log(continent);
console.log(population);
console.log(language);
console.log(isIsland);

if (language === 'English' && population < 50000000 && !isIsland) {
  console.log(`You should live in ${country}! :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}
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
const avgDolphin = (96 + 108 + 89) / 3;
const avgKoala = (88 + 91 + 110) / 3;
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
/* 
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
 */
///////////// Coding Challenge #4 /////////////

/* //TASK 1
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip
  }.`
); */
