"use strict"

var turn = "X",
	winner = null;

if(Math.random() > 0.5) {
	turn = "O";
}

function startGame() {
	setMessage("It is " + turn + "'s turn");
}

function setMessage(msg) {
	document.getElementById("message").innerText = msg; 
}

function nextMove(square) {
	if(winner !== null) {
		setMessage(turn + " already won the game");
	} else if (square.innerText == "") {
		square.innerText = turn;
		switchTurn();		
	} else {
		setMessage("Invalid Move");
	}
}

function switchTurn() {
	if(checkWinner(turn)) {
		setMessage("Congrats " + turn +" , You win!!");
		winner = turn;
	}	else if(checkForTie()) {
		setMessage("It is a tie");
	}	else if(turn == "X") {
		turn = "O";
		setMessage("It is " + turn + "'s turn");
	} else {
		turn = "X";
		setMessage("It is " + turn + "'s turn");
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
	return document.getElementById("s" + number).innerText;
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

function checkForTie() {
	var result = false;
	if(getBox(1) !== "" &&
	   getBox(2) !== "" &&
	   getBox(3) !== "" &&
	   getBox(4) !== "" &&
	   getBox(5) !== "" &&
	   getBox(6) !== "" &&
	   getBox(7) !== "" &&
	   getBox(8) !== "" &&
	   getBox(9) !== "" && winner == null) {
		result = true;
	}
	return result;
}

window.onload = function() {
	startGame();
}