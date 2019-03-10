// Variable declarations
var Word = require('./word');
var Letter = require('./letter');
const inquirer = require('inquirer');
var index;
var currentWord;
var guessesRemaining;
const wordsList = ['fortunate', 'excitable', 'gentrification'];

//  Function definitions
function getUserLetterGuesses() {
    inquirer
    .prompt({
      name: "guess",
      type: "input",
      message: "Guess a letter!",
    })
    .then(function(answer) {
        var continuePlayingPrompt;
        // check current guessed letter and update the word object
        var result = currentWord.checkGuessedLetter(answer.guess);
        // refresh the displayed word
        currentWord.updateDisplayedWord();
        if (!result) {
            // decrement the number of guesses remaining
            guessesRemaining--;
        }
        if (guessesRemaining > 0) {
            if (!result) {
                // since the last guess was wrong, let the player know how many guesses they have remaining
                console.log('\x1b[31m', 'INCORRECT!!!');
                console.log('\x1b[36m', 'You still have ' + guessesRemaining + ' guesses remaining');
                console.log('\x1b[37m');      
            }
            else {
                console.log('\x1b[32m','CORRECT!!!');
                console.log('\x1b[37m');    
             }
             // check for terminating condition
            if (!currentWord.hasWordBeenGuessed()) {
                // prompt the user for the next letter
                getUserLetterGuesses();
                continuePlayingPrompt = false;
            } else {
                // refresh the displayed word
                console.log('Congratulations! You correctly guessed the word.');
                continuePlayingPrompt= true;
            }
        } else {
            console.log('\x1b[31m', 'Sorry, but you have no more guesses remaining for this word');
            console.log('\x1b[37m');
            continuePlayingPrompt = true;
        }
        if (continuePlayingPrompt) {
            inquirer
            .prompt({
            name: "continue",
            type: "confirm",
            message: "Do you want to continue playing?",
            })
            .then(function(answer) {
                if (answer.continue) {
                    startNewGame();
                }
            });
        }
    });
}
function startNewGame() {
    guessesRemaining = 10;
    index = Math.floor(Math.random() * wordsList.length);
    currentWord = new Word(wordsList[index]);
    console.log('=====================================================');
    console.log('Next word to guess:');
    currentWord.updateDisplayedWord();
    getUserLetterGuesses();
}
// Executable code starts here
startNewGame();

