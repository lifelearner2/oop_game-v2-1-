/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
//This file is to create a Phrase class to handle the creation of phrases.
//step 2, step 3: created class "Phrase" and converted all letters in Phrase to lowercase.
class Phrase {
constructor (phrase) {
    this.phrase = phrase.toLowerCase();
}
//Step 6: created method to add letter placeholders(empty box) to hide each letter of the phrase on the display when game starts.
addPhraseToDisplay() {
let displayPhrase = document.querySelector("#phrase ul"); 
console.log(displayPhrase);
//split phrase into an array to separate the letters in each phrase
let splitPhrase = "this.phrase".split('')
//loop over each letter in the phrase. Use forEach() to call a function for each letter in the phrase
//create an if statement if letter is a space ("") create an 'li' element with the class 'space'.
// else create an li element with the classes 'hide letter' and the letter that is being looped over.

// splitPhrase.forEach(splitPhrase => {
//     displayPhrase.push(splitPhrase.hidden)
// })
//crating variable to store letters
const letterBox = "";

for (let i = 0; i <this.activePhrase.length; i++) {
    if (this.activePhrase[i] === " ") {
        letterBox += `<li class="space"> </li>`
    } else {
        letterBox += `<li class="hide letter ${this.activePhrase[i]}">${this.activePhrase[i]}</li>`
    } 
  }
displayPhrase.innerHTML = letterBox;

//set the textContent of the 'li' to be the character that is being looped over
//append the 'li' element to the `#phrase ul`
console.log(letterBox);



};
}