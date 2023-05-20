'use strict';
// console.log(
//   (document.querySelector('.message').textContent = 'Correct Answer')
// );
// document.querySelector('.score').textContent = 30;
// document.querySelector('.number').textContent = 18;
// console.log((document.querySelector('.guess').value = 17));
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = ' ';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';

  // document.querySelector('.check').addEventListener('click', function () {
  //   const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);

  //   if (!guess) {
  //     document.querySelector('.message').textContent = '❗No Number';
  //   } else if (guess === secretNumber) {
  //     if (score === 0) {
  //       document.querySelector('.message').textContent = '🧨You Lost the Game';
  //     } else {
  //       document.querySelector('.message').textContent = '🎉Correct Answer';
  //       document.querySelector('.number').textContent = secretNumber;
  //       document.querySelector('body').style.backgroundColor = '#60b347';
  //       document.querySelector('.number').style.width = '30rem';
  //     }
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈To High';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '🧨You Lost the Game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉To Low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '🧨You Lost the Game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
  // });
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '❗No Number';
  } else if (guess === secretNumber) {
    if (score === 0) {
      document.querySelector('.message').textContent = '🧨You Lost the Game';
    } else {
      document.querySelector('.message').textContent = '🎉Correct Answer';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈To High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🧨You Lost the Game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉To Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🧨You Lost the Game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
