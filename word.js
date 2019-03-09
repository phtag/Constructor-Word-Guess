const Letter = require('./letter');

function Word(myWord) {
    this.wordArray = [];
    // populate the array of letters using the passed argument value
    for (var i=0;myWord.length;i++) {
        // Create a new letter object using the Letter constructor
        var letter = new Letter(LettermyWord[i].toLowerCase(), false);
        this.wordArray.push(letter);
    }
    this.displayedWord = function() {
        var updatedDisplayedWord = [];
        for (var i=0;i<this.myWord.length;i++) {
            updatedDisplayedWord = myWord[i].currentValue();
        }
        return updatedDisplayedWord;
    }
    this.checkGuessedLetter = function(guessedCharacter) {
        for (var i=0;i<this.myWord.length;i++) {
            myWord[i].checkLetter(guessedCharacter);
        }
    }
}
module.exports = Word;