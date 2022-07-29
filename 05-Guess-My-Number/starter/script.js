'use strict';

/* console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'YA BETHOOOOL!!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 21;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 21;

console.log(document.querySelector('.guess').value); */

/* ------------------------- HANDLING CLICK EVENTS ------------------------- */
// Event - something that happens on the page (mouse click, mouse moving, keypress etc.)
//.addEventListener(name of the event that we are listening for, function value);

const secretNumber = Math.trunc(Math.random() * 20 + 1); // gives number between 0 and 1, Math.trunc() to remove the decimals, * 20 because we want 0 - 20, + 1 is to elevate until 20 (or else max is 19.99999999999999 and remove d.p will just give until 19)

let score = 20; // state variable (part of application state)
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  //   console.log(document.querySelector('.guess').value);

  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // empty input = 0 = is a falsy value
    document.querySelector('.message').textContent = '❌ NO NUMBER';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'CORRECT! :D';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '❌ TOO HIGH';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '❌ TOO LOW';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
