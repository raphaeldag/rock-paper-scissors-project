let userScore = 0;
let computerScore = 0;
const userScore_span = document.querySelector("#user-score");
const computerScore_span = document.querySelector("#computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.querySelector("#r");
const paper_div = document.querySelector("#p");
const scissors_div = document.querySelector("#s");

function getComputerChoice() {
	const choices = ["r", "p", "s"];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function converterToWord(letter) {
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	return "Scissors";
}

function win(userChoice, computerChoice) {
	const userChoice_div = document.querySelector("#" + userChoice);
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${converterToWord(userChoice)} beats ${converterToWord(computerChoice)}. You win!`;
	userChoice_div.classList.add("green-glow");
	setTimeout(() => {
		userChoice_div.classList.remove("green-glow");
	}, 300);
}

function lose(userChoice, computerChoice) {
	const userChoice_div = document.querySelector("#" + userChoice);
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${converterToWord(userChoice)} loses ${converterToWord(computerChoice)}. You lost...!`;
	userChoice_div.classList.add("red-glow");
	setTimeout(() => {
		userChoice_div.classList.remove("red-glow");
	}, 300);
}

function draw(userChoice, computerChoice) {
	const userChoice_div = document.querySelector("#" + userChoice);
	result_p.innerHTML = `${converterToWord(userChoice)} equal ${converterToWord(computerChoice)}. It's a draw.!`;
	userChoice_div.classList.add("gray-glow");
	setTimeout(() => {
		userChoice_div.classList.remove("gray-glow");
	}, 300);
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;
	}
}

function main() {
	rock_div.addEventListener("click", () => {
		game("r");
	});

	paper_div.addEventListener("click", () => {
		game("p");
	});

	scissors_div.addEventListener("click", () => {
		game("s");
	});
}

main();
