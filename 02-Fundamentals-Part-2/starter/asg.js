/* ----- LECTURE 01: FUNCTIONS ----- */

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
// }

// console.log(describeCountry('Malaysia', 33.8, 'Kuala Lumpur'));
// console.log(describeCountry('South Korea', 51.98, 'Seoul'));
// console.log(describeCountry('Japan', 124.9, 'Tokyo'));

/* ----- LECTURE 02: FUNCTION DECLARATIONS VS EXPRESSION ----- */

//FUNCTION DECLARATION
function percentageOfWorld1(population) {
  const worldPopulation = 7900;
  return `${(population / worldPopulation) * 100}%`;
}

console.log(percentageOfWorld1(33.8));
console.log(percentageOfWorld1(51.98));
console.log(percentageOfWorld1(124.9));

//FUNCTION EXPRESSION
const percentageOfWorld2 = function (population) {
  const worldPopulation = 7900;
  return `${(population / worldPopulation) * 100}%`;
};

console.log(percentageOfWorld1(33.8));
console.log(percentageOfWorld1(51.98));
console.log(percentageOfWorld1(124.9));
