'use strict';
// SCORE TO BE MUTATED
let score = 20; // state variable (part of application state)

//HIGHSCORE
let highScore = 0;

// THE SECRET NUMBER
let secretNumber = Math.trunc(Math.random() * 20 + 1); // gives number between 0 and 1, Math.trunc() to remove the decimals, * 20 because we want 0 - 20, + 1 is to elevate until 20 (or else max is 19.99999999999999 and remove d.p will just give until 19)

// FUNCTION
const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

const displayScore = score =>
  (document.querySelector('.score').textContent = score);

// EVENT - something that happens on the page (mouse click, mouse moving, keypress etc.)
//.addEventListener(name of the event that we are listening for, (what to do - event handler) function value);

document.querySelector('.check').addEventListener('click', function () {
  //   console.log(document.querySelector('.guess').value);

  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  /* -- WHEN THERE IS NO INPUT -- */
  if (!guess) {
    // empty input = 0 = is a falsy value
    displayMessage('NO NUMBER?! >:(');

    /* -- WHEN THE GUESS IS CORRECT -- */
  } else if (guess === secretNumber) {
    displayMessage('CORRECT! :D');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem'; // needs to specify string that contains number and unit.

    // Display the correct guessed number
    document.querySelector('.number').textContent = secretNumber;

    // SET HIGHSCORE
    highScore <= score ? (highScore = score) : null;

    //Display the highscore.
    document.querySelector('.highscore').textContent = highScore;

    /* -- WHEN THE GUESS IS WRONG -- */
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '😿 ITS TOO HIGH >.<' : '😿 ITS TOO LOW >.<'
      );
      displayScore(score--);
    } else {
      displayMessage('YOU LOST THE GAME. BRUH?!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // document.querySelector('.score').textContent = 20;
  score = 20;
  displayScore(score);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});
