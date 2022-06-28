/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//This file is to create a new instance of the "Game" class and add event listeners for the start button and onscreen keyboard buttons.

//testing that code is working on console/webpage:
// const phrase = new Phrase();
// const game = new Game();

//testing lowercase phrase:
// const phrase = new Phrase ('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

//testing random phrases:
// const game = new Game();

// game.phrases.forEach( (phrase, index) => {
//     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

//testing the random selection of phrases from game.js
//this may not show all five phrases to the console as it is showing phrases at random so you may see a phrase more than once.
// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
// };
// const game = new Game();

// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

//Testing `addPhraseToDisplay` method
const game = new Game();
game.getRandomPhrase().addPhraseToDisplay();  //returns an object that was created by calling Phrase class's constructor new Phrase

