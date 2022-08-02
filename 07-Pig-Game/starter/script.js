'use strict';
const actPlay0 = document.querySelector('.player--0');
const actPlay1 = document.querySelector('.player--1');
const elementScore0 = document.querySelector('#score--0');
const elementScore1 = document.getElementById('score--1');
const elementDice = document.querySelector('.dice');
const elCurrScore0 = document.getElementById('current--0');
const elCurrScore1 = document.getElementById('current--1');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
elementScore0.textContent = '0';

elementScore1.textContent = '0';

elementDice.classList.add('hidden');

let playing = true;
let scores = [0, 0];
let currScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    elementDice.classList.remove('hidden');
    elementDice.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currScore;
    } else {
      document.getElementById(`current--${activePlayer}`).textContent =
        currScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      actPlay0.classList.toggle('player--active');
      actPlay1.classList.toggle('player--active');
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    document.getElementById(`score--${activePlayer}`).textContent = scores[
      activePlayer
    ] += currScore;

    if (scores[activePlayer] >= 10) {
      playing = false;
      elementDice.classList.add('hidden');
      btnRoll.classList.add('hidden');
      btnHold.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      document.getElementById(`current--${activePlayer}`).textContent =
        currScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      actPlay0.classList.toggle('player--active');
      actPlay1.classList.toggle('player--active');
    }
  }
});

btnNew.addEventListener('click', function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  playing = true;
  scores = [0, 0];
  activePlayer = 0;
  currScore = 0;
  btnRoll.classList.remove('hidden');
  btnHold.classList.remove('hidden');
  document.querySelector(`.player--0`).classList.add('player--active');
  elCurrScore0.textContent = currScore;
  elCurrScore1.textContent = currScore;
  elementScore0.textContent = scores[0];
  elementScore1.textContent = scores[1];
});
