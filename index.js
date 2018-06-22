var Word = require("./word");
var inquirer = require("inquirer");
var colors = require('colors');
var answerArr = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
var answerIndex = "";
var answerPicked = "";
var word = "";

function pickAnswer() {
    answerIndex = Math.floor(Math.random() * answerArr.length);
    answerPicked = answerArr[answerIndex];
    answerArr.splice(answerIndex, 1);
    // console.log(answerPicked);
    buildAnswer();
};

function buildAnswer() {
    word = new Word(answerPicked);
    word.buildWord();
    // console.log(word);
    promptUser();
};

function promptUser() {
    // console.log(answerArr.length);
    if (word.losses === 5) {
        console.log("You lost! The answer was ".red + answerPicked.red + ".".red);
        if (answerArr.length === 0) {
            console.log("Game over!\n".rainbow);
        } else {
            console.log("Maybe this time ...\n".red);
            pickAnswer();
        };
    } else if (word.wordString.includes("_") === false) {
        console.log("You won! The answer was ".cyan + answerPicked.cyan + ".".cyan);
        if (answerArr.length === 0) {
            console.log("Game over!\n".rainbow);
        } else {
            console.log("Let's keep it going!\n".cyan);
            pickAnswer();
        };
    } else {
        inquirer.prompt([
            {
                type: "input",
                message: "Guess a letter!\n" + word.wordString.rainbow + "\n",
                name: "promptGuess"
            },
        ])
        .then(function(res) {
            guess = res.promptGuess;
            word.callGuess(guess);
            promptUser();
        });
    };
};

console.log("\nWelcome to the game of words and " + "c o l o r s !\n".rainbow);
pickAnswer();