var Letter = require("./letter");

function Word(answer) {
    this.lettersArr = [];
    this.buildWord = function() {
        for (var i = 0; i < answer.length; i++) {
            var letter = new Letter(answer[i]);
            this.lettersArr.push(letter);
        };
    this.returnString();
    };
    this.returnString = function() {
        var wordArray = [];
        for (var i = 0; i < answer.length; i++) {
            this.lettersArr[i].returnChar();
            wordArray.push(this.lettersArr[i].charOutput);
        };
        wordArray = wordArray.join(" ");
        console.log(wordArray);
    };
    this.callGuess = function(guess) {
        for (var i = 0; i < answer.length; i++) {
            this.lettersArr[i].checkChar(guess);
        };
        this.returnString();
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