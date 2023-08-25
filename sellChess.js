/*In a chess club, people can bring chess pieces to sell. The cost of the pieces is the chess value of each one (9 for the queen, 5 for the rook, 4 for the king, 3 for the bishop and knight, and 1 for each pawn) multiplied by $100 in the event that the set does not include a king, or $200 if it does.
The objective is to calculate the price of any given 5-piece set.
Entrée
A line containing a String S, consisting of 5 characters.
Eeach one indicates a piece: "Q" for queen, "K" for king, "B" for bishop, "N" for knight, "P" for pawn, and "R" for rook. Characters can be repeated indicating more than one piece of the same value
Sortie
A single line containing the numeric value of the total amount of money the bazaar will pay
Contraintes
Exemple
Entrée
PPPPP
Sortie
500*/

function sellChess(string) {
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "Q") {
      sum += 9;
    }
    if (string[i] === "R") {
      sum += 5;
    }
    if (string[i] === "K") {
      sum += 4;
    }
    if (string[i] === "B" || string[i] === "N") {
      sum += 3;
    }
    if (string[i] === "P") {
      sum += 1;
    }
  }
  return string.includes("K") ? sum * 200 : sum * 100;
}

console.log(sellChess("PPPPP")); // 500
console.log(sellChess("KPBKRRQQQQ")); // 11600
console.log(sellChess("K")); // 800