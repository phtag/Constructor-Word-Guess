function Word(myWord) {
    this.myWord = myWord;
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