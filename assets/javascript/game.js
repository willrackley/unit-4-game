//psuedo code
//you need a random number displayed for each game between 19-120 that the user needs to match
//need four crystals that have different random numbers between 1-12 for everytime you play the game
//the the user's crystal count needs to increment by the particular random number every time the crystal is clicked. (the user cannot see the number)
//if the users crystal count matches the computer score to match then the user wins, if he goes over then he loses
//once the players wins or loses, the game automatically restarts
//after every win and loss the win/loss counter increments by one

$(document).ready(function() {

var randDisplayedScore;
var win = 0;
var loss = 0;
var randCrystalCount = [];
var crystalNumbersArray = [1,2,3,4,5,6,7,8,9,10,11,12];
var userGuessTotal;

//--------FUNCTIONS----------

//function for once the browser first opens or is refreshed
function onPageLoad(){
    // when the browswer first loads we creat a loop to set an array that holds four random numbers then we set each of those numbers as the value of a crystal
    for(var i = 0; i < 4; i++){
        randCrystalCount[i] = crystalNumbersArray[Math.floor(Math.random() * crystalNumbersArray.length)];
        console.log(randCrystalCount);
    }
 
    $("#greenCrystal").attr("value", randCrystalCount[0]);
    $("#blueCrystal").attr("value", randCrystalCount[1]);
    $("#purpleCrystal").attr("value", randCrystalCount[2]);
    $("#roundCrystal").attr("value", randCrystalCount[3]);

    scoreDisplay();
    $("#wins").text("Wins: ");
    $("#loss").text("Losses: "); 
}

//function to display the random value that has to be matched
function scoreDisplay(){
    var randomScore = Math.floor(Math.random() * 120) + 19;
    $("#score-to-match").text(randomScore);
}

//function that determines how the user wins or loses and what happens after that
function winsAndLosses() {
    var userScoreTotal = $("#user-score").text();
    var computerScoreToMatch = $("#score-to-match").text();

    if(parseInt(userScoreTotal) === parseInt(computerScoreToMatch)){
        win++;
        $("#wins").text("wins: " + win);
        resetGame();
    } else if(parseInt(userScoreTotal) > parseInt(computerScoreToMatch)){
        loss++;
        $("#loss").text("loss: " + loss);
        resetGame();
    }
}

//function that starts the game over after the user wins or loses
function resetGame(){
    for(var i = 0; i < 4; i++){
        randCrystalCount[i] = crystalNumbersArray[Math.floor(Math.random() * crystalNumbersArray.length)];
        console.log(randCrystalCount);
    }

    $("#greenCrystal").attr("value", randCrystalCount[0]);
    $("#blueCrystal").attr("value", randCrystalCount[1]);
    $("#purpleCrystal").attr("value", randCrystalCount[2]);
    $("#roundCrystal").attr("value", randCrystalCount[3]);

    scoreDisplay();
    $("#wins").text("wins: " + win);
    $("#loss").text("loss: " + loss);

    var userScore = $("#user-score").text();
    $("#user-score").text("0");
}


//-------Game Logic----------

onPageLoad();

//once a button is clicked, the amount of points that the crystal holds adds to the users total score

$("#greenCrystal").click(function(){
   var numEntry = $(this).attr("value");
   var currentScore = $("#user-score").text();
   userGuessTotal = parseInt(currentScore) + parseInt(numEntry);
   $("#user-score").text(userGuessTotal);
   winsAndLosses();
});

$("#blueCrystal").click(function(){
    var numEntry = $(this).attr("value");
    var currentScore = $("#user-score").text();
    userGuessTotal = parseInt(currentScore) + parseInt(numEntry);
    $("#user-score").text(userGuessTotal);
    winsAndLosses();
});

$("#purpleCrystal").click(function(){
    var numEntry = $(this).attr("value");
    var currentScore = $("#user-score").text();
    userGuessTotal = parseInt(currentScore) + parseInt(numEntry);
    $("#user-score").text(userGuessTotal);
    winsAndLosses();
});

$("#roundCrystal").click(function(){
    var numEntry = $(this).attr("value");
    var currentScore = $("#user-score").text();
    userGuessTotal = parseInt(currentScore) + parseInt(numEntry);
    $("#user-score").text(userGuessTotal);
    winsAndLosses();
});
});
