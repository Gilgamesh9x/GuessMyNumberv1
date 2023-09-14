"use strict";

let randomNum = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = String(0);

// create a function for the .message so we won't be repeating it a lot
function displayMessage(content) {
  return (document.querySelector(".message").textContent = content);
}

function guessingGame() {
  document.querySelector(".check").addEventListener("click", eventHandler);

  function eventHandler() {
    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
      // this means if guess is 0 (because 0 is a falsy value)
      displayMessage("No number!");
    } else {
      if (guess === randomNum) {
        document.querySelector(".number").textContent = guess;
        document.querySelector(".number").style.width = "30rem";
        document.querySelector("body").style.backgroundColor = "green";
        displayMessage("Congratulations!");
        document
          .querySelector(".check")
          .removeEventListener("click", eventHandler); // we disable the event Listener when the user wins
        document.querySelector(".check").classList.add("not-allowed"); // we change the style of the cursor when the user wins
        if (document.querySelector(".highscore").textContent === "0") {
          // this will replace the value 0 of high score with the value of the score in the first round
          document.querySelector(".highscore").textContent = score;
        } else if (document.querySelector(".highscore").textContent < score) {
          // if the highscore is lower than score, change it to score
          document.querySelector(".highscore").textContent = score;
        } else {
          console.log("Nothing will happen"); // if the highscore is higher than score, print that nothing will happen (just for clarification)
        }
      } else {
        {
          guess > randomNum
            ? displayMessage("Lower")
            : displayMessage("Higher");
        }
        if (score === 1) {
          // here when the score is 1, the user clicks one last time and if he doesn't get it, it's lost
          score--;
          displayMessage("You Lost.");
          document
            .querySelector(".check")
            .removeEventListener("click", eventHandler); // we disable the event Listener when the user loses
          document.querySelector(".check").classList.add("not-allowed"); // we change the style of the cursor when the user loses
          document.querySelector(".score").textContent = score;
          document.querySelector("body").style.backgroundColor = "red";
        } else {
          // here the score isn't 1 and the the game will just continue
          score--;
          document.querySelector(".score").textContent = score;
        }
      }
    }
  }
}

document.querySelector(".play").addEventListener("click", function () {
  document.querySelector(".check").classList.remove("not-allowed"); // we remove the style of not being able to click
  document.querySelector(".play").textContent = "Play Again!";
  // play and again are the same button
  score = 20; // we reset the score when playing again
  randomNum = Math.floor(Math.random() * 20) + 1; // we take another random num

  // we reset everything in the page except the Highscore
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = "";

  // call the game
  guessingGame();
});

////
