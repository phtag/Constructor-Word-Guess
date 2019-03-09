const Word = require('./word');
const Letter = require('./letter');
const inquirer = require('inquirer');

const wordsList = ['fortunate', 'excitable', 'gentrification'];
var index = Math.floor(Math.random() * wordsList.length);
console.log(index);
function displayCurrentWord() {
    var wordToDisplay = '';
    for (var i=0;Word.myWord.length;i++) {
        if (Word.myWord[i].guessed) {
            wordToDisplay += Word.myWord[i].currentValue + ' ';
        }
    }
    console.log(wordToDisplay);
}