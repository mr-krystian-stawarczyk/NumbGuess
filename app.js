//Game Values //

let min = 1,
	max = 10,
	winningNumb = 2,
	guessesLeft = 3;

// UI //

const game = document.querySelector("#game"),
	minNum = document.querySelector(".min-num"),
	maxNum = document.querySelector(".max-num"),
	guessBtn = document.querySelector("#guess-btn"),
	guessInput = document.querySelector("#guess-input"),
	message = document.querySelector(".message");

// Assign min and max values UI //
minNum.textContent = min;
maxNum.textContent = max;

// Listening btn for guess//

guessBtn.addEventListener("click", function () {
	let guess = parseInt(guessInput.value);
	//Validation//
	if (isNaN(guess) || guess < min || guess > max) {
		setMessage(`Please enter proper number between ${min} and ${max}`, "red");
	}

	//Check if WON
	if (guess === winningNumb) {
		guessInput.disabled = true;
		// Change color border
		guessInput.style.color = "green";
		// Set message when WON
		setMessage(`${winningNumb} is correct! You win CHAMP!`, "green");
	} else {
	}
});

// Set message
function setMessage(msg, color) {
	message.textContent = msg;
	message.style.color = color;
}
