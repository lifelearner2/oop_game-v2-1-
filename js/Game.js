/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
//This file to create Game class methods for starting and ending the game, handling interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard.

class Game {
constructor () {
    this.missed = 0;
    this.phrases = [
        new Phrase ('Sweet Sixteen'),
        new Phrase ('Have your cake and eat it too'),
        new Phrase ('Live your best life'),
        new Phrase ('God is good all the time'),
        new Phrase ('Practice makes Progress')
    ];
    this.activePhrase = null;
}
//The getRandomPhrase method below will select and return a random phrase from the array above. 
getRandomPhrase(phrases) {
    let random = Math.floor(Math.random() * game.phrases.length);
    return this.phrases[random];
};



}