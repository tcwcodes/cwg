var Word = require("./word");
var answerArr = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
var answerPicked = "";

function pickAnswer() {
    var answerIndex = Math.floor(Math.random() * answerArr.length);
    answerPicked = answerArr[answerIndex];
    answerArr.splice(answerIndex, 1);
    var word = new Word(answerPicked);
    console.log(answerPicked);
    console.log(answerArr);
    word.buildWord();
    word.callGuess("r");
};

pickAnswer();