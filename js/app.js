/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//This file is to create a new instance of the "Game" class and add event listeners for the start button and onscreen keyboard buttons.

//TESTING that code is working on console/webpage:
//  const phrase = new Phrase();
//  const game = new Game();

//TESTING lowercase phrase:
//  const phrase = new Phrase ('Life is like a box of chocolates');
//  console.log(`Phrase - phrase: ${phrase.phrase}`);

//TESTING random phrases:
//  const game = new Game();

//TESTING the random selection of phrases from game.js
//this may not show all five phrases to the console as it is showing phrases at random so you may see a phrase more than once.
//  const logPhrase = (phrase) => {
//  console.log(`Phrase - phrase: `, phrase.phrase);
//};
//  const game = new Game();

//  logPhrase(game.getRandomPhrase());
//  logPhrase(game.getRandomPhrase());
//  logPhrase(game.getRandomPhrase());
//  logPhrase(game.getRandomPhrase());
//  logPhrase(game.getRandomPhrase());

//TESTING `addPhraseToDisplay` method
//  const game = new Game();
//  game.getRandomPhrase().addPhraseToDisplay();  //returns an object that was created by calling Phrase class's constructor new Phrase
//     or
//  const game = new Game();
//  const randomPhrase = game.getRandomPhrase();
//  const phrase = new Phrase(randomPhrase.phrase);
//  phrase.addPhraseToDisplay();

//TESTING `start game()` method
    const game = new Game();

//STEP 8: declaring/defining var startButton with the id of btn__reset from the html(two underscores!)
    const startButton = document.getElementById("btn__reset");
//  console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

//created event listener for the start button. When it's clicked the game will start.
    startButton.addEventListener("click", () => {
//  const game = new Game();
    game.startGame();
});

//TESTING game by typing the following directly into console::
//1. game.startGame() - works - may also need to type in game.activePhrase
//2. game.activePhrase.checkLetter('a') - works
//3. game.activePhrase.showMatchedLetter('a') - works and shows all matched letters not just one or two.
//4. game.checkForWin() - works
//5. game.removeLife() - works. Goes to orange game over (loss) screen on 5th remove Life click.
//6. game.gameOver() - works - if you pass true it goes to win screen and if you pass false it goes to lose screen.

//clicking an onscreen keyboard button results in a call to "handleInteraction" method for the clicked keyboard button
//this code activates the buttons (as well as the space around the buttons) when clicked. The console log will log the letter or the empty space that was clicked
    const keyButton = document.getElementById("qwerty");
    keyButton.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.tagName === "BUTTON") {
    game.handleInteraction(e.target);
 }
});
    console.log(keyButton);

//STEP 10: clicking spaces between and around the onscreen keyboard buttons does not result in the handleInteraction method being called.
/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
    //const handleInteraction = game.handleInteraction(e.target);
    handleInteraction(button) = document.getElementById("qwerty");
        handleInteraction.addEventListener("click", (e) => {
            console.log(e.target);
        if (e.target.tagName === "BUTTON") {
        game.handleInteraction(e.target);
       console.log(button);
        }
    });





//after a game is completed, the gameboard is reset so that clicking the start game button loads a new game.




