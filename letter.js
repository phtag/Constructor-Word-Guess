function Letter(underlyingCharacter, guessed)
{
    console.log('letter=' + underlyingCharacter);
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
            this.guessed = true;
        } 
    }
}
module.exports = Letter;