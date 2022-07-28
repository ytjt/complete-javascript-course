'use strict';
/* ----- CODING CHALLENGE #1 ----- */

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// // Test Data 1
// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);

// // Test Data 2
// // const avgDolphins = calcAverage(85, 54, 41);
// // const avgKoalas = calcAverage(23, 34, 27);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log('No one wins huhu');
//   }
// }

// checkWinner(avgDolphins, avgKoalas);

/* ----- CODING CHALLENGE #2 ----- */

// Function expression
// const calcTip = function (bill) {
//   const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   return tip;
// };

// Arrow function
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(calcTip(100));

const bills = [125, 555, 44];
console.log(`Bills: ${bills}`);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(`Tips: ${tips}`);

const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(`Total paid: ${total}`);
