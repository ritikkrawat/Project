'use strict';

let secret = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?'; 

let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // NO Input
  if (!guess) {
    displayMessage('No number!');
  }

  // WIN
  else if (guess === secret) {
    document.querySelector('.number').textContent = secret;
    displayMessage('Correct Guess!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if(score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  else if (guess !== secret) {
    if (score > 1) { 
      displayMessage(guess > secret ?'Too high':'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF0000';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = '!';
    }
  }
});

document.querySelector('.again').addEventListener('click' , function() {
  score = 20;
  secret = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})
