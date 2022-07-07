/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
//This file to create Game class methods for starting and ending the game, handling interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard.
//STEP 2, STEP 3, STEP 4
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("Sweet Sixteen"),
      new Phrase("Have your cake and eat it too"),
      new Phrase("Live your best life"),
      new Phrase("God is good all the time"),
      new Phrase("Practice makes Progress"),
    ];
    this.activePhrase = null;
  }
  /**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
/*The getRandomPhrase method below will select and return a random phrase from the array above. 
*STEP 5
*/
  getRandomPhrase() {
    let random = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[random];
  }
  /**
   *Hiding start screen overlay
   *Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    const screenOverlay = document.getElementById("overlay");
    screenOverlay.style.display = "none";
    screenOverlay.setAttribute("class", "start");
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  /**
* STEP 9: Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won. If it hasn't been guessed yet console shows letter as "hide" or if it has been guessed it will be listed as "show"
*/ //checks if player has revealed all of the letters in the active phrase - basically that there are no more letters that are "hidden"
  checkForWin() {
    let phraseLetters = document.getElementsByClassName("hide");
    if (phraseLetters.length <= 0) {
      return true;
    } else {
      return false;
    }
  }
  // TEST `checkForWin()` method, type game.checkForWin() into console.
  /**
   * removeLife Increases the value of the missed property
   * STEP 9: Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */ //this.missed = 0;  //so the this.missed = 0 from earlier in this class doesn't count towards this method?
  //*now when i call removeLife in console (after just one time) it ends the game instead of removing all 5 lives.
  //removes a life from the scoreboard(one of .png images is replaced with lostHeart.png image), increments
  //the missed property and if the player has lost the game calls the gameOver method.
  //the heart/lives must be a -1 to set index back tot zero otherwise it skips first heart life.
  removeLife() {
    const livesLeft = document.querySelectorAll("img");
    this.missed++;
    livesLeft[this.missed - 1].src = "images/lostHeart.png";
    if (this.missed < 5) {
    } else {
      this.gameOver(false);
    }
  }
  /**
   * STEP 9: Displays 'game over' message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    const screenOverlay = document.getElementById("overlay");
    const gameOverMessage = document.getElementById("game-over-message");
    screenOverlay.style.display = "none";
    screenOverlay.setAttribute("class", "start");
    //const gameWon
    //displays a final win or loss message by showing original start screen overlay styled with either win or lose CSS class
    if (gameWon) {
      screenOverlay.className = "win";
      screenOverlay.style.display = "block"; //block means 'show'
      gameOverMessage.innerHTML = "Congratulations! You guessed the phrase!";
    } else {
      screenOverlay.className = "lose";
      screenOverlay.style.display = "block";
      gameOverMessage.innerHTML =
        "Sorry, you did not guess correctly this time, try again!";
    }
    this.resetGame();
  }
  //STEP 12: after a game is completed, the gameboard is reset so that clicking the start game button loads a new game.
  resetGame() {
    const keyButton = document.getElementById("qwerty");
    const buttons = keyButton.getElementsByTagName("button");
    console.log(buttons);

    
    //loop through all buttons and update buttons to original CSS 'key' class instead of 'chosen' or 'wrong' class(from previous game)
    //also re-enabling all the buttons to work again as in the last game they were disabled once clicked.
    for (let i=0; i<buttons.length; i++){
      buttons[i].className = "key"
      buttons[i].disabled = false;
    }
   
    let phraseDiv = document.getElementById("phrase"); 
    phraseDiv.querySelector("ul").innerHTML = ""; //Removing 'li' elements from Phrase 'ul' element

    this.missed = 0; //resets missed letters back to zero
    const resetLives = document.querySelectorAll("img"); //accessing the heart images and storing under resetLives variable
    for (let i = 0; i < resetLives.length; i++) {
      resetLives[i].src = "images/liveHeart.png"; //reset lives at restart of game
    }
  }

  //Step 9: matching letter, letter displayed instead of placeholder or remove life if no match
  //check if player won by revealing all letters in phrase or lost if player out of lives
  //winner or loser message must be displayed on screen.

  //If player has won game, the gameOver() method is called.
  //STEP 11: Logic and branching included in handleInteraction method
  //It checks to see if the onscreen keyboard button clicked by the player matches a letter in the phrase, and
  //then directs the game based on a correct or incorrect guess. This method should:
  //● Disable the selected letter’s onscreen keyboard button.
  //● If the phrase does not include the guessed letter, add the `wrong` CSS class to the
  //selected letter's keyboard button and call the `removeLife()` method.
  //● If the phrase includes the guessed letter, add the `chosen` CSS class to the selected
  //letter's keyboard button, call the `showMatchedLetter()` method on the phrase, and
  //then call the `checkForWin()` method. If the player has won the game, also call the
  //`gameOver()` method.

  //If phrase does not include guessed letter, the removeLife is called. Otherwise, the screen shows the matched letter and the game checks for a win.
  handleInteraction(button) {
    const guessedLetter = button.textContent;
    button.disabled = true; //disabling guessed letter's key button, so you can only choose a letter once
    if (!this.activePhrase.checkLetter(guessedLetter)) {
      button.className = "wrong"; //adds dark gray color to correct letter button clicked
      this.removeLife();
    } else {
      this.activePhrase.showMatchedLetter(guessedLetter);
      button.className = "chosen"; //adds orange color to wrong letter button clicked
      //checkForWin returns boolean - T/F
      if (this.checkForWin()) {
        this.gameOver(true);
      }

      console.log(button);
    }
  }
}
// TEST `removeLife()` method, call the method in the console to test that it properly updated a heart image in the scoreboard (indicating that a life was "lost"):
// Then call the `removeLife()` method four more times to test that the game would end and display the "lost" message: removeLife(lost);
// Finally, call the `gameOver()` method passing `true` to test that the game would end and display the "won" message: gameOver(true);
