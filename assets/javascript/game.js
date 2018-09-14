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
        name: "blue",
        value: 0
    }
};

// current/goal score 
var currentScore = 0;
var goal = 0;

// win/loss count
var winCount = 0;
var lossCount = 0;

// to start the game
var start = function () {
    currentScore = 0;

    // gets the goal score between two numbers
    goal = getRandom(19, 120)

    // setting random values for each crystal
    crystals.blue.value = Math.random(1, 12);
    crystals.yellow.value = Math.random(1, 12);
    crystals.red.value = Math.random(1, 12);
    crystals.green.value = Math.random(1, 12);

    // to update the scores
    $("#totalScore").text(currentScore);
    $("#randomNumber").text(goal);
};

var check = function () {
    // checking to see if the current score is greater than the
    // random number provided
    if(currentScore > goal) {
        alert("Loser! ");
        // console.log("loser");

        // to reset the game
        start(); 
    }

    else if(currentScore === goal) {
        alert("WINNER!!! CONGRATS!!!");
        // console.log("winner");

        // to reset the game
        start();
    }
};

start();

$("#blue").click(function() {
    values(crystals.blue);
});

$("#yellow").click(function() {
    values(crystals.yellow);
});

$("#red").click(function() {
    values(crystals.red);
});

$("#green").click(function() {
    values(crystals.green);
});


