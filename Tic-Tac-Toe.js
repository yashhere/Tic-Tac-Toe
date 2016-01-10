var turn = "X",
	winner = null;

if(Math.random() > 0.5) {
	turn = "O";
}

function startGame() {
	setMessage(turn);
}

function setMessage(msg) {
	document.getElementById("message").innerText = "It's " + msg + "'s turn."; 
}

function message(msg) {
	document.getElementById("message").innerText = msg;
}

window.onload = function() {
	startGame();
}

function nextMove(box) {
	if(winner != null) {
		message(turn + " already won the game");
	} else if (box.innerText == "") {
		box.innerText = turn;
		switchTurn();
		setMessage(turn);
	} else {
		message("This Box is already used");
	}
}

function switchTurn() {
	if(checkWinner(turn)) {
		message("Congratulations " + turn);
		winner = turn;
	}
	if(turn === "X") {
		turn = "O";
	} else {
		turn = "X";
	}
}

function check(a, b, c, player) {
	var result = false;
	if(getBox(a) == player && getBox(b) == player && getBox(c) == player) {
		result = true;
	}
	return result;
}

function getBox(number) {
	return document.getElementById("\"" + number + "\"").innerText;
}

function checkWinner(player) {
	var result = false;
	if(check(1, 2, 3, player) ||
	   check(4, 5, 6, player) ||
	   check(7, 8, 9, player) ||
	   check(1, 4, 7, player) ||
	   check(2, 5, 8, player) ||
	   check(3, 6, 9, player) ||
	   check(1, 5, 9, player) ||
	   check(3, 5, 7, player)) {
		result = true;
	}
	return result;
}
=======
turn = "X";

function startGame() {
	setMessage(turn);
	var nextMove = function() {
			if(turn = "X") {
			turn = "O";
			setMessage(turn);
			document.innerHTML = turn;
		}

		else {
			turn = "X";
			setMessage(turn);
			document.innerHTML = turn;
		}
	}

	document.getElementById("1").onclick = nextMove;
	document.getElementById("2").onclick = nextMove;
	document.getElementById("3").onclick = nextMove;
	document.getElementById("4").onclick = nextMove;
	document.getElementById("5").onclick = nextMove;
	document.getElementById("6").onclick = nextMove;
	document.getElementById("7").onclick = nextMove;
	document.getElementById("8").onclick = nextMove;
	document.getElementById("9").onclick = nextMove;
}

function setMessage(msg) {
	document.getElementById("message").innerText = "It's " + msg + "'s turn."; 
}

window.onload = function () {
	startGame();
}