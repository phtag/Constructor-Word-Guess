function letter(underlyingCharacter)
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
    this.updateCharacter = function(guessedCharacter) {
        if (guessedCharacter === this.underlyingCharacter) {
            this.guessed = true;
        } 
    }
}