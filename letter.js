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
        if (guessedCharacter === this.underlyingCharacter) {
            console.log('checkLetter: you guessed correct letter = ' + guessedCharacter);
            this.guessed = true;
        } 
    }
}
module.exports = Letter;