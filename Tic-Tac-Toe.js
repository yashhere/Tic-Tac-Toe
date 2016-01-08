var turn = 'X';

var box1 = document.getElementById("#one").innerHTML,
	box2 = document.getElementById("#two").innerHTML,
	box3 = document.getElementById("#three").innerHTML,
	box4 = document.getElementById("#four").innerHTML,
	box5 = document.getElementById("#five").innerHTML,
	box6 = document.getElementById("#six").innerHTML,
	box7 = document.getElementById("#seven").innerHTML,
	box8 = document.getElementById("#eight").innerHTML,
	box9 = document.getElementById("#nine").innerHTML;

function checkWinner() {
	if(box1 === 'X' && box2 === 'X' && box3 === 'X')
		alert("X wins");
	else if(box4 ==='X' && box5 === 'X' && box6 === 'X')
		alert("X wins");
	else if(box7 ==='X' && box8 === 'X' && box9 === 'X')
		alert("X wins");
	else if(box1 ==='X' && box4 === 'X' && box7 === 'X')
		alert("X wins");
	else if(box2 ==='X' && box5 === 'X' && box8 === 'X')
		alert("X wins");
	else if(box3 ==='X' && box6 === 'X' && box9 === 'X')
		alert("X wins");
	else if(box1 ==='X' && box5 === 'X' && box9 === 'X')
		alert("X wins");
	else if(box3 ==='X' && box5 === 'X' && box7 === 'X')
		alert("X wins");
	else if(box1 === 'O' && box2 === 'O' && box3 === 'O')
		alert("O wins");
	else if(box4 ==='O' && box5 === 'O' && box6 === 'O')
		alert("O wins");
	else if(box7 ==='O' && box8 === 'O' && box9 === 'O')
		alert("O wins");
	else if(box1 ==='O' && box4 === 'O' && box7 === 'O')
		alert("O wins");
	else if(box2 ==='O' && box5 === 'O' && box8 === 'O')
		alert("O wins");
	else if(box3 ==='O' && box6 === 'O' && box9 === 'O')
		alert("O wins");
	else if(box1 ==='O' && box5 === 'O' && box9 === 'O')
		alert("O wins");
	else if(box3 ==='O' && box5 === 'O' && box7 === 'O')
		alert("O wins");
	else if(box1.length > 0 && box2.length > 0 && box3.length > 0 && box4.length > 0 && box5.length > 0 && box6.length > 0 && box7.length > 0 && box8.length > 0 && box9.length > 0)
		alert("Tie");
}


function putMark(point) {
	current = document.getElementById(point).innerHTML;
	if(current.length > 0)
		return;
	else if(turn === 'X') {
		current = 'X';
		turn = 'O';
	}
	else if(turn === 'O') {
		current = 'O';
		turn = 'X';
	}
	checkWinner();
}

box1.addEventListner('onclick', function() {
	putMark("#one");
});

box2.addEventListner('onclick', function() {
	putMark("#two");
});

box3.addEventListner('onclick', function() {
	putMark("#three");
});

box4.addEventListner('onclick', function() {
	putMark("#four");
});

box5.addEventListner('onclick', function() {
	putMark("#five");
});

box6.addEventListner('onclick', function() {
	putMark("#six");
});

box7.addEventListner('onclick', function() {
	putMark("#seven");
});

box8.addEventListner('onclick', function() {
	putMark("#eight");
});

box9.addEventListner('onclick', function() {
	putMark("#nine");
});