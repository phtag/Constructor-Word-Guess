const Letter = require('./letter');
function Word(myWord) {
    this.wordArray = [];
    // populate the array of letters using the passed argument value
    for (var i=0;i<myWord.length;i++) {
        // Create a new letter object using the Letter constructor
        if (myWord[i] != ' ') {
            var letter = new Letter(myWord[i], false);
        } else {
            //  we don't want the player to be guessing space characters so we initialize all 
            //  spaces to true to indicate that they were guessed already
            var letter = new Letter(myWord[i], true);
        }
        this.wordArray.push(letter);
    }
    this.updateDisplayedWord = function() {
        var updatedDisplayedWord = '';
        for (var i=0;i<this.wordArray.length;i++) {
            updatedDisplayedWord += this.wordArray[i].currentValue() + ' ';
        }
        console.log(updatedDisplayedWord + '\n');
        return updatedDisplayedWord;
    }
    this.checkGuessedLetter = function(guessedCharacter) {
        var result = false;
        for (var i=0;i<this.wordArray.length;i++) {
            if (this.wordArray[i].checkLetter(guessedCharacter)) {
                result = true;
            }
        }
        return result;
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