var Letter = require("./letter");

function Word(answer) {
    this.answer = answer;
    this.wordString = "";
    this.lettersArr = [];
    this.correctLetters = 0;
    this.wins = 0;
    this.losses = 0;
    this.guessesLeft = 5;
    this.buildWord = function() {
        for (var i = 0; i < this.answer.length; i++) {
            var letter = new Letter(this.answer[i]);
            this.lettersArr.push(letter);
        };
    this.returnString();
    };
    this.returnString = function() {
        var wordArray = [];
        for (var i = 0; i < this.answer.length; i++) {
            this.lettersArr[i].returnChar();
            wordArray.push(this.lettersArr[i].charOutput);
        };
        this.wordString = wordArray.join(" ");
    };
    this.callGuess = function(guess) {
        this.correctLettersPrevious = this.correctLetters;
        this.correctLetters = 0;
        for (var i = 0; i < this.answer.length; i++) {
            this.lettersArr[i].checkChar(guess);
            if (this.lettersArr[i].guessed === true) {
                this.correctLetters++
            } else {};
        };
        if (this.correctLetters > this.correctLettersPrevious) {
            this.wins++;
            console.log("\nCorrect!");
            console.log("");
        } else {
            this.losses++;
            this.guessesLeft = 5 - this.losses;
            console.log("\nIncorrect!\nGuesses left: " + this.guessesLeft);
            console.log("");
        };
        this.returnString();
        // console.log(this.lettersArr);
    };
};

module.exports = Word;

// word.buildWord();
// word.callGuess("r");
// word.returnString();
// word.callGuess();

// var blanksArray = [];

// function Letter(answer) {
//     this.answer = answer;
//     this.blanks = function() {
//         console.log(answer);
//         for (var i = 0; i < answer.length; i++) {
//             blanksArray.push("_");
//         };
//         var blanksString = blanksArray.join(" ");
//         console.log(blanksString);
//     };
// };

// pickAnswer();
// var letter = new Letter(answerPicked);
// letter.blanks();