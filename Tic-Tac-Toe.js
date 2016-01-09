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