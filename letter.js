function Letter(correctChar) {
    this.correctChar = correctChar;
    this.guessed = false;
    this.charOutput = "";
    this.returnChar = function() {
        if (this.guessed === true) {
            this.charOutput = this.correctChar;
        } else {
            this.charOutput = "_";
        };
    };
    this.checkChar = function(guessedChar) {
        if (this.correctChar === guessedChar) {
            this.guessed = true;
        } else {
        };
    };
};

module.exports = Letter;