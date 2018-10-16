
	// Variable area this area will hold the variables for the game

	// variable holding random letters
	var randomWord = ["halloween", "trick", "treat", "boo", "zombie","ghost", "witch", "vampire", "monster", "frankenstein", "mummy", "pumpkin", "frightening"];

	// variable that tracks the amount of wins the player has
	var wins = 0;

	// contains the amount of tries the player has left
	var tries = 9;

	// contains the amount of losses the player has
	var losses = 0

	// contains the word the player needs to guess
	var answerWord = [];

	// used to display the letters the player needs to guess at the beginning of the game
	var letterBox = [];

	// this is the variable that checks the letter the player has guessed
	var checkLetter = [];

	// this variable updates the display to show the word to guess when the player guesses correctly
	var display = []

	// links to loss display
	var lossCount = document.getElementById("loss")

	// links to word display
	var wordDisp = document.getElementById("word");

	// links to win display
	var winCount = document.getElementById("wins")

	// links to try display
	var tryCount = document.getElementById("Tries")

	// links to letters guessed diaplay
	var wrong = document.getElementById("lGuess");

	// start or reset functionality area this will contain the reset function for the game
	function gameStart() {
	
		// clears the display
		display = [];

		// clears the letter box
		letterBox = [];

		// clears the count
		count = 0;

		// resets the tries
		tries = 9;

		// clears checkLetter
		checkLetter = [];

		// selects a random word and turns it to an array
		answerWord = randomWord[Math.floor(Math.random() * randomWord.length)];
		answerWord = answerWord.split('');

		// fills letter box with underscores for the display
		for (i = 0; i < answerWord.length; i++) {
			letterBox.push("_");
		}
		console.log(answerWord)
		console.log(letterBox)

		// runs the page create function
		pageCreate()
	}






	// page setup area this will contain the page setup function, it will reset the values on the page after a win or loss including the letters guessed, trys, word to guess display.

	function pageCreate() {

		// displays the current amount of wins
		winCount.innerHTML = wins;

		// displays the current amount of losses
		lossCount.innerHTML = losses;

		// resets the amount of tries on the page
		tryCount.innerHTML = tries;

		// clears the word display
		wordDisp.innerText = '';

		// clears the letters guessed display
		wrong.innerText = '';

		// fills the word display with the underscores from the letter box
		for (i = 0; i < letterBox.length; i++) {
			wordDisp.innerText += ` ${letterBox[i]} `;
		}
	}




	// This area will get the user input from the document

	document.onkeyup = function (e) {
		// only takes in letter inputs from the user
		if (e.which >= 65 && e.which <= 90) {
			console.log('event: ', e.key);

			// sets a variable of character code which takes in the users input and converts it to lower case
			var charCode = e.key.toLowerCase();

			// user character code and checks it against the answer word to see if the user guess was correct
			var index = answerWord.indexOf(charCode);

			// checks if the user guess is right using the index variable
			if (index > -1) {
				// alert("right");
				// checkLetter.push(charCode);
				// displayWord()


				for (var i = 0; i < answerWord.length; i++) {
					
					// checks if the user guess is correct again and puts the user guess into the answer word
					if (answerWord[i].toLowerCase() === charCode) {

						// loops through the answer word an and replaces the letter box where the answer word was right
						letterBox[i] = answerWord[i];
					}
				}

				// clears out the word display so it game dosent create an array everytime the user get the answer right
				wordDisp.innerText = '';

				// loops through the word display and puts replaces the word display with the letter box that contains the correct user guess
				for (i = 0; i < letterBox.length; i++) {
					wordDisp.innerText += ` ${letterBox[i]} `;
				}
				console.log(display)

				// if the answer word and the letter box are the same you win the game
				if (answerWord.join('') === letterBox.join('')) {
					
					// lets you know if you won
					console.log('you win');

					// adds one to the wins
					wins++;

					// restarts game
					gameStart();
				}

			} else {
				// alert("wrong guess");
				checkLetter.push(charCode);
				// console.log("You guessed " + checkLetter);
				wrong.innerText = checkLetter;

				// removes one from the tries
				tries--;

				// updates the tries display
				tryCount.innerHTML = tries;
			}
			// check if tries === 0
			if (tries === 0){
				// tells you if you lost based on the amount of tries you have left
				console.log ("you lost")

				// adds to the amount of losses
				losses++;

				// resets game 
				gameStart()
			}
		}
	}

gameStart()

