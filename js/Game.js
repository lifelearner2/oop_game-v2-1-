/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
//This file to create Game class methods for starting and ending the game, handling interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard.

//STEP 2, STEP 3, STEP 4 starting counter for missed letters clicked at zero. Created variable to hold array of phrases.
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
   * STEP 5: The 'getRandomPhrase' method selects random phrase from 'this.phrases' property above and returns a random phrase from the array.
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    let random = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[random];
  }

  /**
   *Hiding start screen overlay, showing initial 'start game' screen
   *Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    const screenOverlay = document.getElementById("overlay");
    screenOverlay.style.display = "none";
    screenOverlay.setAttribute("class", "start");
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  // STEP 9: Checks for winning move
  // @return {boolean} true if game has been won, false if game wasn't won.
  // Checks if player has revealed all of the letters in the active phrase - that there are no more letters that are "hidden"
  checkForWin() {
    let phraseLetters = document.getElementsByClassName("hide");
    if (phraseLetters.length <= 0) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * STEP 9: Removes a life from the scoreboard
   * 'this.missed' counts and increases the value of the missed property as missed letters are clicked.
   * Checks if player has remaining lives and ends game if player is out
   * Removes a life from the scoreboard (one of .png images is replaced with lostHeart.png image), increments the missed property and if the player has lost the game calls the gameOver method.
   * The heart/lives must be a -1 to set index back to zero, otherwise it skips first heart life and only elimates 4/5 heart lives.
   */

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
   * @param {boolean} gameWon - Shows whether or not the user won the game
   */
  gameOver(gameWon) {
    const screenOverlay = document.getElementById("overlay");
    const gameOverMessage = document.getElementById("game-over-message");
    screenOverlay.style.display = "none";
    screenOverlay.setAttribute("class", "start");

    //Displays a final win or loss message by showing original start screen overlay styled with either win or lose CSS class
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

  //STEP 12: After a game is completed, the game board is reset so that clicking the start game button loads a new game.
  resetGame() {
    const keyButton = document.getElementById("qwerty");
    const buttons = keyButton.getElementsByTagName("button");
    console.log(buttons);

    //Looping through all buttons and updating buttons to original CSS 'key' class instead of 'chosen' or 'wrong' class(from previous game)
    //Re-enabling all the buttons to work again, as in the last game they were disabled once clicked.
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].className = "key";
      buttons[i].disabled = false;
    }

    let phraseDiv = document.getElementById("phrase");
    phraseDiv.querySelector("ul").innerHTML = ""; //Removing 'li' elements from Phrase 'ul' element

    this.missed = 0; //Resets missed letters back to zero
    const resetLives = document.querySelectorAll("img"); //Accessing the heart images and storing under resetLives variable
    for (let i = 0; i < resetLives.length; i++) {
      resetLives[i].src = "images/liveHeart.png"; //Resets lives at restart of game
    }
  }

  //STEP 11: Logic and branching included in 'handleInteraction' method
  //Checks to see if the onscreen keyboard button clicked by the player matches a letter in the phrase, and then directs the game based on a correct or incorrect guess.
  //If the phrase includes the guessed letter, add the `chosen` CSS class to the selected letter's keyboard button, call the `showMatchedLetter()` method on the phrase, and
  //then call the `checkForWin()` method.
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
      //checkForWin returns boolean - T/F. If player has won game, the gameOver() method is called.
      if (this.checkForWin()) {
        this.gameOver(true); //If the player has won the game, call the `gameOver()` method.
      }
      console.log(button);
    }
  }
}
