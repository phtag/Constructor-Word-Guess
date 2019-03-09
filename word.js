const Letter = require('./letter');

function Word(myWord) {
    console.log('Word=' + myWord);
    this.wordArray = [];
    // populate the array of letters using the passed argument value
    for (var i=0;i<myWord.length;i++) {
        // Create a new letter object using the Letter constructor
        var letter = new Letter(myWord[i], false);
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