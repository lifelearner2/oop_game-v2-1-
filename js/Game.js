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
}
