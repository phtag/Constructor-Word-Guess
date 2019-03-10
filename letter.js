function Letter(underlyingCharacter, guessed)
{
    this.underlyingCharacter = underlyingCharacter.toLowerCase();
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
        if (guessedCharacter === this.underlyingCharacter) {
            if (!this.guessed) {
                newGuess = true;
            }
            this.guessed = true;
        } 
        return newGuess;
    }
}
module.exports = Letter;