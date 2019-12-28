// Begins the game
$(document).ready(function() {

    var computerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z"];
    
    var ComputerGuess;
    var maxGuess = 8;
    var wins = 0;
    var loss = 0;

// Maximum number of guesses
function hardMode() {
    maxGuess = 8;
}

// Computer generates a random letter
    computerGuess = computerLetters[Math.floor(Math.random() * computerLetters.length)];
    console.log(computerGuess);
});

// Player's guess 
function compareGuess() {
    var userGuess = document.getElementById("guessBox").value;
    console.log(userGuess);

// Display messages for if letter is too high/low/correct
    if(userGuess > computerGuess) {
    document.getElementById("gameText").innerHTML = "Oops, too high. Try again.";
    document.getElementById("guessBox").value = "";
} else if (userGuess < computerGuess) {
    document.getElementById("gameText").innerHTML = "Too low! C'mon, you got this.";
    document.getElementById("guessBox").value = "";
} else {
    document.getElementById("gameText").innerHTML = "Correct! Not bad.";
}
}