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
  
  //Logic and branching included in handleInteraction method
  //Step 9: matching letter, letter displayed instead of placeholder or remove life if no match
  //check if player won by revealing all letters in phrase or lost if player out of lives
  //winner or loser message must be displayed on screen.
  handleInteraction() {
      //if phrase does not include guessed letter, the wrong CSS class
      //is added to the selected letter's keyboard button adn the removeLife is called.
      //if phrase includes guessed letter, the chosen CSS class is added to the 
      //selected letter's keyboard button, the showMatchedletter method is
      //called on the phrase, and the checkForWin method is called.
      //If player has won game, the gameOver() method is called.
    
  
    }
  checkForWin() {
      //checks if player has revealed all of the letters in the active phrase 
  }
  removeLife() {
      //removes a life from the scoreboard(one of liveHeart.png images is replaced with lostHeart.png image), increments
      //the missed property and if the player has lost the game calls the gameOver method.
  }
  gameOver() {
      //displays a final win or loss message by showing original start screen overlay styled with either win or lose CSS class
  }
}
