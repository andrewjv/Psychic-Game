var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'v', 'w', 'x', 'y', 'z']
var wins = 0;
var losses = 0;
var guesses = 9;
var newLetter = null;
var guessedLetters = [];

//Letter the computer selects//
var computerGuess = letters[Math.floor(Math.random() * letters.length)];

//updating the guesses the user has left
//and updating letters guessed
var updateDom = function () {
  document.getElementById("guesses-left").innerHTML = 'Guesses Left: ' + guesses;
  document.getElementById("letters-guessed").innerHTML = "Letters guessed: " + guessedLetters.join(', ')
};

//computer guesses the new letter after a loss or win 
var newLetter = function () {
  computerGuess = letters[Math.floor(Math.random() * letters.length)];
};

//resets game 
var reset = function () {
  guesses = 9;
  guessedLetters = [];

  newLetter();
  updateDom();
};
//pressing a key will begin the game
document.onkeyup = function (event) {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  if (!guessedLetters.includes(userGuess) && letters.includes(userGuess)) {
    guesses--;
    guessedLetters.push(userGuess)
  }

  updateDom();

//if user has more than 0 guesses left the game will run until the user wins or loses
  if (guesses > 0) {
    if (userGuess == computerGuess) {
      wins++;
      document.getElementById("wins").innerHTML = 'Wins: ' + wins;
      alert('You know what I know');
      reset();
    }
  }
//once the guesses reaches 0 the game will end and reset
  else if (guesses==0) {
    //you lose
    losses++;
    document.getElementById("losses").innerHTML = 'Losses: ' + losses;
    alert("you know nothing");
    reset();
  }
}

