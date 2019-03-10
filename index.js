var Word = require('./word');
var Letter = require('./letter');
const inquirer = require('inquirer');
var index;
var currentWord;
const wordsList = ['fortunate', 'excitable', 'gentrification'];

// function displayCurrentWord(currentWord) {
//     var wordToDisplay = '';
//     var length = currentWord.wordArray.length;
//     for (var i=0;i<currentWord.wordArray.length;i++) {
//         wordToDisplay += currentWord.wordArray[i].currentValue() + ' ';
//     }
//     console.log(wordToDisplay);
// }
function getUserLetterGuesses() {
    inquirer
    .prompt({
      name: "guess",
      type: "input",
      message: "Guess a letter!",
    })
    .then(function(answer) {
        // check current guessed letter and update the word object
        currentWord.checkGuessedLetter(answer.guess);
        // refresh the displayed word
        currentWord.displayedWord();
        // check for terminating condition
        if (!currentWord.hasWordBeenGuessed()) {
            // prompt the user for the next letter
            getUserLetterGuesses();
        } else {
            console.log('Congratulations! You correctly guessed the word.');
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
    var index = Math.floor(Math.random() * wordsList.length);
    currentWord = new Word(wordsList[index]);
    console.log('=====================================================');
    console.log('Next word to guess:');
    currentWord.displayedWord();
    getUserLetterGuesses();
}

