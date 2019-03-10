const Letter = require('./letter');

function Word(myWord) {
    this.wordArray = [];
    // populate the array of letters using the passed argument value
    for (var i=0;i<myWord.length;i++) {
        // Create a new letter object using the Letter constructor
        var letter = new Letter(myWord[i], false);
        this.wordArray.push(letter);
    }
    this.displayedWord = function() {
        var updatedDisplayedWord = '';
        for (var i=0;i<this.wordArray.length;i++) {
            updatedDisplayedWord += this.wordArray[i].currentValue() + ' ';
        }
        console.log(updatedDisplayedWord);
        return updatedDisplayedWord;
    }
    this.checkGuessedLetter = function(guessedCharacter) {
        for (var i=0;i<this.wordArray.length;i++) {
            this.wordArray[i].checkLetter(guessedCharacter);
        }
    }
    this.hasWordBeenGuessed = function() {
        for (var i=0;i<this.wordArray.length;i++) {
            if (!this.wordArray[i].guessed) {
                return false;
            }
        }
        return true;
    }
}
module.exports = Word;