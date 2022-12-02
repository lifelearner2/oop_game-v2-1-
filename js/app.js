/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//This file is to create a new instance of the "Game" class and add event listeners for the start button and onscreen keyboard buttons.

//STEP 8: Declared variable game & startButton & created event listener that when it's clicked the game will start.
const game = new Game();
const startButton = document.getElementById("btn__reset");
startButton.addEventListener("click", () => {
  game.startGame();
});

//This code activates the buttons (as well as the space around the buttons) when clicked. The console log will log the letter or the empty space that was clicked
//Clicking an onscreen keyboard button results in a call to "handleInteraction" method for the clicked keyboard button
const keyButton = document.getElementById("qwerty");
keyButton.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.tagName === "BUTTON") {
    game.handleInteraction(e.target);
  }
});
console.log(keyButton);

//TESTING game by typing the following directly into console::
//1. game.startGame() - works - can also type in game.activePhrase to view randomly generated phrase
//2. game.activePhrase.checkLetter('a') - works
//3. game.activePhrase.showMatchedLetter('a') - works and shows all matched letters - not just one but all letters that match
//4. game.checkForWin() - works
//5. game.removeLife() - works. Goes to orange game over (loss) screen on 5th remove Life click.
//6. game.gameOver() - works - if you pass true it goes to win screen and if you pass false it goes to lose screen.
