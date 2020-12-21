
var turn_counter = 0;
var table_ids = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]
var board_state = [-1,-1,-1,-1,-1,-1,-1,-1,-1]
var started = false
var turn = 1 

function isEmpty(_str) {
	return (!_str || 0 === _str.length)
}

function whose_move(){
	return this.turn
}

function toggle_move() {
	this.turn = !this.turn
}

function game_started(){
	return this.started
}

function begin_play(){

	if (started == true) {
		alert("Already started. Please press Reset Play to start again.");
	}
	else if(isEmpty(player1_id.value) || isEmpty(player2_id.value)) {
		alert("Two player game, both the fields are mandatory.")
	} else {
		document.getElementById("player1_id").value = player1_id.value + (" (X)");
		document.getElementById("player2_id").value = player2_id.value + (" (O)");
		document.getElementById("player1_id").disabled = true;
		document.getElementById("player2_id").disabled = true;

		setTimeout( () => document.getElementById("turn_info").innerHTML = `Turn for: <b>${player1_id.value}</b>`, 10);
		started = true;
	}

}

function reset_play(){
	document.getElementById("player1_id").value = "";
	document.getElementById("player2_id").value = "";

	document.getElementById("player1_id").disabled = false;
	document.getElementById("player2_id").disabled = false;

	document.getElementById("turn_info").innerHTML = "Game has not begun.";
	turn = 1
	turn_counter = 0;
	started = false;
	
	board_state = [-1,-1,-1,-1,-1,-1,-1,-1,-1]

	A1.innerHTML = "";
	A2.innerHTML = "";
	A3.innerHTML = "";
	B1.innerHTML = "";
	B2.innerHTML = "";
	B3.innerHTML = "";
	C1.innerHTML = "";
	C2.innerHTML = "";
	C3.innerHTML = "";
}

function play(move) {

	if (started == false) {
		alert("The game has not started.")
	} else {

		var x_o;

		if (whose_move() == 1) {
			x_o = "X";
		} else {
			x_o = "O";
		}

		if (move == "A1") {
			if(checkValid(0)) {
				board_state[0] = whose_move();
				A1.innerHTML = `<b>${x_o}</b>`;
				setTimeout(() => validate(`<b>${x_o}</b>`), 10);
			}	
		} else if (move == "A2") {
			if(checkValid(1)) {
				board_state[1] = whose_move();
				A2.innerHTML = `<b>${x_o}</b>`;
				setTimeout(() => validate(`<b>${x_o}</b>`), 10);
			}
		} else if (move == "A3") {
			if(checkValid(2)) {
				board_state[2] = whose_move();
				A3.innerHTML = `<b>${x_o}</b>`;
				setTimeout(() => validate(`<b>${x_o}</b>`), 10);
			}	
		} else if (move == "B1") {
			if(checkValid(3)) {
				board_state[3] = whose_move();
				B1.innerHTML = `<b>${x_o}</b>`;
				setTimeout(() => validate(`<b>${x_o}</b>`), 10);
			}	
		} else if (move == "B2") {
			if(checkValid(4)) {
				board_state[4] = whose_move();
				B2.innerHTML = `<b>${x_o}</b>`;
				setTimeout(() => validate(`<b>${x_o}</b>`), 10);
			}	
		} else if (move == "B3") {
			if(checkValid(5)) {
				board_state[5] = whose_move();
				B3.innerHTML = `<b>${x_o}</b>`;
				setTimeout(() => validate(`<b>${x_o}</b>`), 10);
			}	
		} else if (move == "C1") {
			if(checkValid(6)) {
				board_state[6] = whose_move();
				C1.innerHTML = `<b>${x_o}</b>`;
				setTimeout(() => validate(`<b>${x_o}</b>`), 10);
			}
		} else if (move == "C2") {
			if(checkValid(7)) {
				board_state[7] = whose_move();
				C2.innerHTML = `<b>${x_o}</b>`;
				setTimeout(() => validate(`<b>${x_o}</b>`), 10);
			}	
		} else if (move == "C3") {
			if(checkValid(8)) {
				board_state[8] = whose_move();
				C3.innerHTML = `<b>${x_o}</b>`;
				setTimeout(() => validate(`<b>${x_o}</b>`), 10);
			}
		} else {
			alert("Input is not a valid cell number! Please try again.");
		}
	}

}

function checkValid(index) {
	if(board_state[index] != -1) {

		alert("Invalid move! Try again.");
		return false;

	} else {
		return true;
	}
}

function validate(check) {

	turn_counter++;

	a1 = A1.innerHTML;
	a2 = A2.innerHTML;
	a3 = A3.innerHTML;
	b1 = B1.innerHTML;
	b2 = B2.innerHTML;
	b3 = B3.innerHTML;
	c1 = C1.innerHTML;
	c2 = C2.innerHTML;
	c3 = C3.innerHTML;

	if (turn == 1) {
		var winner = player1_id.value;
	} else {
		var winner = player2_id.value;
	}
	
	if (a1 == check && a2 == check &&a3 == check) {
		alert("Winner is: " + winner);
		reset_play();
	} else if (b1 == check &&b2 == check &&b3 == check) {
		alert("Winner is: " + winner);
		reset_play();
	} else if (c1 == check &&c2 == check &&c3 == check) {
		alert("Winner is: " + winner);
		reset_play();
	} else if (a1 == check &&b1 == check &&c1 == check) {
		alert("Winner is: " + winner);
		reset_play();
	} else if (a2 == check &&b2 == check &&c2 == check) {
		alert("Winner is: " + winner);
		reset_play();
	} else if (a3 == check &&b3 == check &&c3 == check) {
		alert("Winner is: " + winner);
		reset_play();
	} else if (a1 == check &&b2 == check &&c3 == check) {
		alert("Winner is: " + winner);
		reset_play();
	} else if (c1 == check &&b2 == check &&a3 == check) {
		alert("Winner is: " + winner);
		reset_play();
	} else if (turn_counter >= 9) {
		alert("It is a tie.");
		reset_play();
	} else {
		toggle_move();

		if (turn == 1) {
			document.getElementById("turn_info").innerHTML = `Turn for: <b>${player1_id.value}</b>`;
		} else {
			document.getElementById("turn_info").innerHTML = `Turn for: <b>${player2_id.value}</b>`;
		}
	}
}

function moveEnter(event) {		
	if(event.keyCode == 13) {
		event.preventDefault()
		play()
	}

}
