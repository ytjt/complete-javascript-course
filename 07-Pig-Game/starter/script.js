'use strict';
const actPlay0 = document.querySelector('.player--0');
const actPlay1 = document.querySelector('.player--1');
const elementScore0 = document.querySelector('#score--0');
const elementScore1 = document.getElementById('score--1');
const elementDice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const elCurrScore0 = document.getElementById('current--0');
const elCurrScore1 = document.getElementById('current--1');

elementScore0.textContent = '0';

elementScore1.textContent = '0';

elementDice.classList.add('hidden');

let currScore = 0;
let activePlayer = 0;
btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  elementDice.classList.remove('hidden');
  elementDice.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent =
      currScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    actPlay0.classList.toggle('player--active');
    actPlay1.classList.toggle('player--active');
  }
});
