/*Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
01 Test 1
Entrée
Sortie attendue
ROCK SCISSORS
PLAYER1
02 Test 2
Entrée
Sortie attendue
PAPER PAPER
DRAW
03 Test 3
Entrée
Sortie attendue
SCISSORS ROCK
PLAYER2
04 Test 4
Entrée
Sortie attendue
PAPER SCISSORS
PLAYER2*/

function gamePSR(call1, call2) {
  if (call1 === "ROCK" && call2 === "SCISSORS") {
    return "PLAYER1";
  } else if (call1 === "SCISSORS" && call2 === "ROCK") {
    return "PLAYER2";
  } else if (call1 === "PAPER" && call2 === "ROCK") {
    return "PLAYER1";
  } else if (call1 === "ROCK" && call2 === "PAPER") {
    return "PLAYER2";
  } else if (call1 === "SCISSORS" && call2 === "PAPER") {
    return "PLAYER1";
  } else if (call1 === "PAPER" && call2 === "SCISSORS") {
    return "PLAYER2";
  } else if (call1 === call2) {
    return "DRAW";
  }
}

console.log(gamePSR("ROCK", "SCISSORS")); // PLAYER1
console.log(gamePSR("SCISSORS", "ROCK")); // PLAYER2
console.log(gamePSR("PAPER", "ROCK")); // PLAYER1
console.log(gamePSR("ROCK", "PAPER")); // PLAYER2
console.log(gamePSR("SCISSORS", "PAPER")); // PLAYER1
console.log(gamePSR("PAPER", "SCISSORS")); // PLAYER2
console.log(gamePSR("ROCK", "ROCK")); // DRAW
console.log(gamePSR("SCISSORS", "SCISSORS")); // DRAW
