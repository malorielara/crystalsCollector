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

    
}