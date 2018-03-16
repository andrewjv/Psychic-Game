var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'v', 'w', 'x', 'y', 'z']
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = 9;
var newLetter = null;
var guessedLetters = [];

//Letter the computer selects//
var computerGuess = letters[Math.floor(Math.random() * letters.length)];

//updating the guesses the user has left
var updateGuessLeft = function() {
    document.getElementById("guesses-left").innerHTML = 'Guesses Left: ' + guessesLeft;
};

//computer guesses the new letter after a loss or win 
var newLetter = function () {
    this.newLetter = this.letters[Math.floor(Math.random() * this.letters.length)];
};

// updating the letters guessed in the "guesses so far"

var userLettersGuessed = function () {
    document.getElementById("letters-guessed").innerHTML = "Letters guessed: " + guessedLetters.join(', ')
}

 
var reset = function () {
     totalGuesses = 9;
     guessesLeft = 9;
     guessedLetters = [];

     updateGuessLeft();
     newLetter();
     userLettersGuessed();
    
    };

 document.onkeyup = function(event) {
     guessesLeft--;
     var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

     guessedLetters.push(userGuess)
     updateGuessLeft();
     userLettersGuessed();

     if (guessesLeft > 0) {
         if (userGuess == newLetter) {
             wins++;
             document.getElementById("wins").innerHTML = 'Wins: ' + wins;
             console.log('You know what I know');
             reset();
            }
        }
         
            else if(guessesLeft==0) {
             //you lose
             losses++;
             document.getElementById("losses").innerHTML = 'Losses: ' + losses;
             console.log("you know nothing");
             reset();
            }
}

