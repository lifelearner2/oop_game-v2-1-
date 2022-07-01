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
  addPhraseToDisplay() {
    let phraseDiv = document.getElementById("phrase");
    let ul = document.querySelector("ul");
    // let splitPhrase = this.activePhrase.split('')
    let li = "";
    // console.log(splitPhrase);
    console.log(this.phrase);

    for (let i = 0; i < this.phrase.length; i++) {
      if (this.phrase[i] === " ") {
        li += `<li class="space">${this.phrase[i]}</li>`;
      } else {
        li += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
      }
      // ul.insertAdjacentHTML("beforeend", li);
    }
    ul.innerHTML = li;
    console.log(li);
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */

  //showMatchedLetter(letter) {
}

//creating variable to store letters
//const letterSpace = "";

//li.textContent = this.phrases[i];

// console.log(letterSpace);
