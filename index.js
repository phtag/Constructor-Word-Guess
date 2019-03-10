// Variable declarations
var Word = require('./word');
var Letter = require('./letter');
const inquirer = require('inquirer');
var index;
var currentWord;
var guessesRemaining;
const wordsList = {
        words: ['fortunate', 
            'excitable', 
            'gentrification',
            'the arc of a story',
            'Beauty and the Beast',
            'Once upon a time'],
        used: [false, 
            false,
            false,
            false,
            false,
            false]};

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
    var wordsRemaining = 0;
    // see if there are any words remaining to be played
    for (var i=0;i<wordsList.words.length;i++) {
        if (!wordsList.used[i]) {
            wordsRemaining++;
        }
    }
    if (wordsRemaining > 0) {
        // Let the user keep playing as there are still words remaining
        do
        {
            index = Math.floor(Math.random() * wordsList.words.length);
        }
        while (wordsList.used[index]);
        // mark the word as having been used
        wordsList.used[index] = true;
        currentWord = new Word(wordsList.words[index]);
        console.log('=====================================================');
        console.log('Next word to guess:');
        currentWord.updateDisplayedWord();
        getUserLetterGuesses();
    } else {
        console.log('The game is over. See you next time!');
    }
}
// Executable code starts here
startNewGame();

