function Letter(correctChar) {
    this.correctChar = correctChar;
    this.guessed = false;
    this.charOutput = "";
    this.returnChar = function() {
        if (this.guessed === true) {
            this.charOutput = correctChar;
        } else {
            this.charOutput = "_";
        };
        // console.log(this.charOutput);
    };
    this.checkChar = function(guessedChar) {
        if (this.correctChar === guessedChar) {
            this.guessed = true;
            // console.log(this.guessed);
        } else {
            // this.guessed = false;
            // console.log(this.guessed);
        };
    };
};

// letter.checkChar("b");

// letter.checkChar();
// letter.returnChar();

module.exports = Letter;

// function Letter(correctChar, guessedChar) {
//     this.correctChar = correctChar;
//     this.guessedChar = guessedChar;
//     this.guessed = false;
//     // this.charOutput = "";
//     this.returnChar = function() {
//         if (this.guessed == true) {
//             // this.charOutput = correctChar;
//             console.log(this.guessedChar);
//         } else {
//             // this.charOutput = "_";
//             console.log("_");
//         };
//         // console.log(this.charOutput);
//     };
//     this.checkChar = function() {
//         if (this.correctChar === this.guessedChar) {
//             this.guessed = true;
//             console.log(this.guessedChar);
//         } else {
//             this.guessed = false;
//             console.log("_");
//         };
//         // console.log(this.guessed);
//     };
// };