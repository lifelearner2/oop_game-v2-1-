/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
//This file is to create a Phrase class to handle the creation of phrases.

//STEP 2, STEP 3: Created class "Phrase" and converted all letters in Phrase to lowercase.
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  //STEP 6: Displays phrase on game board
  addPhraseToDisplay() {
    let phraseDiv = document.getElementById("phrase");
    let ul = document.querySelector("ul");
    let li = "";
    console.log(this.phrase);

    //STEP 6: Created method to add letter placeholders to hide each letter of the phrase on the display when game starts.
    //Loop over each letter in the phrase to call a function for each letter in the phrase - either to hide or show the letter
    /*create an if statement if letter is a space ("") create an 'li' element with the class 'space'.
     *else create an li element with the classes 'hide letter' and the letter that is being looped over.
     *\set the textContent of the 'li' to be the character that is being looped over
     */
    for (let i = 0; i < this.phrase.length; i++) {
      if (this.phrase[i] === " ") {
        li += `<li class="space">${this.phrase[i]}</li>`;
      } else {
        li += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
      }
    }
    //Adding the 'li' element (which holds all the letters) to the 'ul' element in the HTML
    ul.innerHTML = li;
    console.log(ul);
  }

  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  //STEP 9: 'checkLetter' method checks to see if the letter selected by the player matches a letter in the phrase.
  checkLetter(letter) {
    if (this.phrase.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  //STEP 9: 'showMatchedLetter' method reveals the letter(s) on the board that matches the player's selection.
  //To reveal matching letter(s), select all of the letter DOM elements that have a CSS class name that matches the selected letter and replace each selected hide CSS class with 'show'Class
  showMatchedLetter(letter) {
    let revealLetter = document.querySelectorAll(".letter");
    console.log(revealLetter);
    for (let i = 0; i < revealLetter.length; i++) {
      if (revealLetter[i].textContent.includes(letter)) {
        //revealLetter[i].textContent.includes(letter);
        revealLetter[i].className = `show letter ${letter}`;
      }
    }
  }
}
