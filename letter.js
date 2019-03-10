function Letter(underlyingCharacter, guessed)
{
    this.underlyingCharacter = underlyingCharacter;
    this.guessed = guessed;
    this.currentValue = function() {
        if (this.guessed) {
            return this.underlyingCharacter;
        } else {
            return '_';
        }
    }
    this.checkLetter = function(guessedCharacter) {
        var newGuess = false;
        if (guessedCharacter.toLowerCase() === this.underlyingCharacter.toLowerCase()) {
            if (!this.guessed) {
                newGuess = true;
            }
            this.guessed = true;
        } 
        return newGuess;
    }
}
module.exports = Letter;