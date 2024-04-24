'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 25;

// document.querySelector('.guess').value = 10;
// console.log(document.querySelector('.guess').value);

let secret = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?'; 

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // NO Input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  }

  // WIN
  else if (guess === secret) {
    document.querySelector('.number').textContent = secret;
    document.querySelector('.message').textContent = 'Correct Guess!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if(score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // Guess is too high
  else if (guess > secret) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF0000';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = '!';
    }
  }

  // Guess is too low
  else if (guess < secret) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF0000';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = '!';

    }
  }
});

// Task 1
document.querySelector('.again').addEventListener('click' , function() {

  // Task 2
  score = 20;
  secret = Math.trunc(Math.random() * 20) + 1;

  // Task 3
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  // Task 4
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})
