'use strict';
/* ----- CODING CHALLENGE #1 ----- */

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 2;

// Average score
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(85, 54, 41);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  }
}

checkWinner(avgDolphins, avgKoalas);
