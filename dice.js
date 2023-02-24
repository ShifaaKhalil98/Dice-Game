var player_1 = randomNumber(1, 6);
var player_2 = randomNumber(1, 6);
_dice = document.getElementsByClassName("die");

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (player_1 == 1) {
  _dice[0].src = "one.jpg";
} else if (player_1 == 2) {
  _dice[0].src = "two.jpg";
} else if (player_1 == 3) {
  _dice[0].src = "three.jpg";
} else if (player_1 == 4) {
  _dice[0].src = "four.jpg";
} else if (player_1 == 5) {
  _dice[0].src = "five.jpg";
} else if (player_1 == 6) {
  _dice[0].src = "six.jpg";
}

if (player_2 == 1) {
  _dice[1].src = "one.jpg";
} else if (player_2 == 2) {
  _dice[1].src = "two.jpg";
} else if (player_2 == 3) {
  _dice[1].src = "three.jpg";
} else if (player_2 == 4) {
  _dice[1].src = "four.jpg";
} else if (player_2 == 5) {
  _dice[1].src = "five.jpg";
} else if (player_2 == 6) {
  _dice[1].src = "six.jpg";
}

if (player_1 == player_2) {
  document.getElementById("headingText").innerText = "Draw";
} else if (player_1 < player_2) {
  document.getElementById("headingText").innerText = "Player 2 wins";
} else if (player_1 > player_2) {
  document.getElementById("headingText").innerText = "Player 1 wins";
}
