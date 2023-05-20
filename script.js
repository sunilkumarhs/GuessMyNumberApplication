'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const messageDisplay = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  messageDisplay('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = ' ';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    messageDisplay('❗No Number');
  } else if (guess === secretNumber) {
    if (score === 0) {
      messageDisplay('🧨You Lost the Game');
    } else {
      messageDisplay('🎉Correct Answer');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (highScore < score) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      messageDisplay(guess > secretNumber ? '📈To High' : '📉To Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      messageDisplay('🧨You Lost the Game');
      document.querySelector('.score').textContent = 0;
    }
  }
});
