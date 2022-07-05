/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
//This file is to create a Phrase class to handle the creation of phrases.
//step 2, step 3: created class "Phrase" and converted all letters in Phrase to lowercase.
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  /**Step 6: created method to add letter placeholders(empty box) to hide each letter of the phrase on the display when game starts.
   *Display phrase on game board
   *split phrase into an array to separate the letters in each phrase
   *loop over each letter in the phrase. Use forEach() to call a function for each letter in the phrase
   *create an if statement if letter is a space ("") create an 'li' element with the class 'space'.
   *else create an li element with the classes 'hide letter' and the letter that is being looped over.
   *\set the textContent of the 'li' to be the character that is being looped over
   */
  //displays phrase on gameboard
  addPhraseToDisplay() {
    let phraseDiv = document.getElementById("phrase");
    let ul = document.querySelector("ul");
    let li = "";
    console.log(this.phrase);

    for (let i = 0; i < this.phrase.length; i++) {
      if (this.phrase[i] === " ") {
        li += `<li class="space">${this.phrase[i]}</li>`;
      } else {
        li += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
      }
    }
    ul.innerHTML = li;
    console.log(ul);
  }
  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  //checkLetter method checks to see if the letter selected by the player matches a letter in the phrase.  Not sure this is working
  checkLetter(letter) {
    if (this.phrase.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }

  //To test the "checkLetter()` method,
  //enter the following line of code directly into the console:
  //game.activePhrase.checkLetter('a')

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  //showMatchedLetter method reveals the letter(s) on the board that matches the player's selection. not sure this is working.
  //To reveal matching letter(s), select all of the letter DOM elements that have a CSS class name that matches the selected letter and replace each selected hide CSS class with 'show'Class
  showMatchedLetter(letter) {
    let revealLetter = document.querySelectorAll("letter");
    for (let i = 0; i < revealLetter.length; i++) {
      if (revealLetter[i].textContent.includes(letter)) {
        revealLetter[i].textContent.includes(letter);
        revealLetter[i].className = `show letter ${letter}`;
      }
    }
  }
  //To test the Phrase class's `showMatchedLetter()` method, enter the following line of code
  // directly into the console, passing in a letter that you know is your active phrase:
  // game.activePhrase.showMatchedLetter('a')
}
