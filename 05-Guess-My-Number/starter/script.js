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
// SCORE TO BE MUTATED
let score = 20; // state variable (part of application state)

// THE SECRET NUMBER
const secretNumber = Math.trunc(Math.random() * 20 + 1); // gives number between 0 and 1, Math.trunc() to remove the decimals, * 20 because we want 0 - 20, + 1 is to elevate until 20 (or else max is 19.99999999999999 and remove d.p will just give until 19)

document.querySelector('.number').textContent = secretNumber;

// EVENT - something that happens on the page (mouse click, mouse moving, keypress etc.)
//.addEventListener(name of the event that we are listening for, (what to do - event handler) function value);
document.querySelector('.check').addEventListener('click', function () {
  //   console.log(document.querySelector('.guess').value);

  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  /* -- WHEN THERE IS NO INPUT -- */
  if (!guess) {
    // empty input = 0 = is a falsy value
    document.querySelector('.message').textContent = 'NO NUMBER?! >:(';

    score--;
    document.querySelector('.score').textContent = score;

    /* -- WHEN THE GUESS IS CORRECT -- */
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'CORRECT! :D';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem'; // needs to specify string that contains number and unit.

    /* -- WHEN THE GUESS IS TOO HIGH -- */
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'ITS TOO HIGH >.<';

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'YOU LOST THE GAME. BRUH?!';

      document.querySelector('.score').textContent = 0;
    }

    /* -- WHEN THE GUESS IS TOO LOW -- */
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'ITS TOO LOW >.<';

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'YOU LOST THE GAME. BRUH?!';

      document.querySelector('.score').textContent = 0;
    }
  }
});
