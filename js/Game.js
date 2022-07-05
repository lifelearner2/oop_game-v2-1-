/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
//This file to create Game class methods for starting and ending the game, handling interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard.
//Step 2, step 3, step 4
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
*step 5
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
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
  checkForWin() {
    let phraseLetters = document.getElementsByClassName("hide");
    let guessedLetter = document.getElementsByClassName("show");
    if (this.guessedLetter === this.phraseLetters) {
      return true;
    } else {
      return false;
    }
    //checks if player has revealed all of the letters in the active phrase
  }
  // To test the `checkForWin()` method, enter the
  // following line of code directly into the console:
  // game.checkForWin()

  /**
   * removeLife Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    const livesLeft = document.querySelectorAll("img");
    this.missed ++;
    //removes a life from the scoreboard(one of liveHeart.png images is replaced with lostHeart.png image), increments
    //the missed property and if the player has lost the game calls the gameOver method.
    for (let i = 0; i < this.missed.length; i++) {
      if (this.missed > 4) {
        livesLeft[this.missed].src = "images/lostHeart.png";
        this.gameOver(true)
      } 
      }
    }
  }
  // To test the `removeLife()` method, I simply called the method in the console to test that it
  // properly updated a heart image in the scoreboard (indicating that a life was "lost"):

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon); {
    const screenOverlay = document.getElementById("overlay");
    screenOverlay.style.display = "none";
    screenOverlay.setAttribute("class", "start");
    //const gameWon  
    //displays a final win or loss message by showing original start screen overlay styled with either win or lose CSS class
    if (gameWon) {
      screenOverlay.className = "win";
      gameOverMessage.innerHTML = "Congratulations! You guessed the phrase!";
    } else {
      screenOverlay.className = "lose";
      gameOverMessage.innerHTML =
        "Sorry, you did mot guess correctly this time, try again!";
    }
  }

  /** step 10:
   * Handles onscreen keyboard button clicks
   * @param (HTMLButtonElement) button - The clicked button element
   */
  //Logic and branching included in handleInteraction method
  //Step 9: matching letter, letter displayed instead of placeholder or remove life if no match
  //check if player won by revealing all letters in phrase or lost if player out of lives
  //winner or loser message must be displayed on screen.
  // handleInteraction(button) {
  //   //if phrase does not include guessed letter, the wrong CSS class
  //   //is added to the selected letter's keyboard button and the removeLife is called.
  //   //if phrase includes guessed letter, the chosen CSS class is added to the
  //   //selected letter's keyboard button, the showMatchedletter method is
  //   //called on the phrase, and the checkForWin method is called.
  //   //If player has won game, the gameOver() method is called.

  //   if (phrase === !guessedLetter) {
  //       game.removeLife();
  //   } else  {
  //     phrase.includes.guessedLetter 
  //       game.showMatchedLetter() && game.checkForWin()
  //   }
    
  //   console.log(button);
  //}

// Then I called the `removeLife()` method four more times to test that the game would end and
// display the "lost" message:
//removeLife(lost);
// And finally, I called the `gameOver()` method passing `true` to test that the game would end
// and display the "won" message:
//gameOver(true);
