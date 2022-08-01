'use strict';

const elementScore0 = document.querySelector('#score--0');
const elementScore1 = document.getElementById('score--1');
const elementDice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');

elementScore0.textContent = '0';

elementScore1.textContent = '0';

elementDice.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  elementDice.classList.remove('hidden');
  elementDice.src = `dice-${dice}.png`;
});
