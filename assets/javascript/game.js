// crystals
var crystals = {
    blue: {
        name: "blue",
        value: 0
    },
    yellow: {
        name: "yellow",
        value: 0
    },
    red: {
        name: "red",
        value: 0
    },
    green: {
        name: "green",
        value: 0
    }
};

// current/goal score 
var currentScore = 0;
var goal = 0;

// win/loss count
var winCount = 0;
var lossCount = 0;


// helps produce a random number
var randomNum = function (min, max) {
    return "Random Number: " + (Math.floor(Math.random() * (max - min + 1)) + min);
}

$(document).ready(function() {

// to start the game
var start = function () {
    currentScore = 0;

    // gets the goal score between two numbers
    goal = randomNum(19, 120)

    // setting random values for each crystal
    crystals.blue.value = Math.random(1, 12);
    crystals.yellow.value = Math.random(1, 12);
    crystals.red.value = Math.random(1, 12);
    crystals.green.value = Math.random(1, 12);

    // to update the scores
    $("#totalScore").text(currentScore);
    $("#randomNumber").text(goal);
};

    console.log("Blue: " + crystals.blue.value + " | Green: " + crystals.green.value + " | Red: " + crystals.red.value +
        " | Yellow: " + crystals.yellow.value);

var check = function () {
    // checking to see if the current score is greater than the
    // random number provided
    if (currentScore > goal) {
        alert("Loser! ");
        // console.log("loser");

        // add to the loss counter
        lossCount++;

        // able to show on text
        $("#rowLoss").text(lossCount);

        // to reset the game
        start();
    } else if (currentScore === goal) {
        alert("WINNER!!! CONGRATS!!!");
        // console.log("winner");

        // add to win counter
        winCount++;

        // so its able to show on the text
        $("#rowWin").text(winCount);

        // to reset the game
        start();
    }
};

var values = function (crystalsClicked) {

    // to update the current score
    currentScore += crystalsClicked.value;

    // update the scores thus far
    $("#totalScore").text(currentScore);

    // this calls the check function to see if the score equals the
    // random number to see if the player has won or not
    check();
};

start();

// $(document).ready(function() {
// $(document).on("click", ".crystals", value);
$("#blue").click(function () {
    values(crystals.blue);
});

console.log(crystals);

$("#yellow").click(function () {
    values(crystals.yellow);
});

$("#red").click(function () {
    values(crystals.red);
});

$("#green").click(function () {
    values(crystals.green);
});
})