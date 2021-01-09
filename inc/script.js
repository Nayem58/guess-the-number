"use strict";
const hiddenNumber = document.querySelector(".number");
const inputFieldGuess = document.querySelector(".guess");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
let scoreValue = +score.textContent;
const highScore = document.querySelector(".highscore");
let highScoreValue = +highScore.textContent;
const btnCheck = document.querySelector(".btn.check");
const btnAgain = document.querySelector(".btn.again");
let randomNumber = Math.floor(Math.random() * 20 + 1);
// console.log(randomNumber);

// setting up body bg color
const bodyBg = (color) =>
  (document.querySelector("body").style.backgroundColor = color);

btnCheck.addEventListener("click", () => {
  if (inputFieldGuess.value !== "") {
    const inputFieldGuessValue = +inputFieldGuess.value;
    if (inputFieldGuessValue === randomNumber) {
      bodyBg("#60b347");
      message.textContent = "You Guessed Right";
      if (scoreValue > highScoreValue) {
        highScore.textContent = scoreValue;
        highScoreValue = scoreValue;
      }
      hiddenNumber.textContent = randomNumber;
    } else if (inputFieldGuessValue > randomNumber) {
      message.textContent = "Too High";
      scoreValue--;
      score.textContent = scoreValue;
    } else {
      message.textContent = "Too Low";
      scoreValue--;
      score.textContent = scoreValue;
    }
  }
});

btnAgain.addEventListener("click", () => {
  hiddenNumber.textContent = "?";
  inputFieldGuess.value = "";
  score.textContent = 20;
  scoreValue = 20;
  randomNumber = Math.floor(Math.random() * 20 + 1);
  console.log(randomNumber);
  bodyBg("#222");
});
