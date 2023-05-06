/*You are playing Shifumi with an opponent.
Your opponent and yourself can play Scissors, Hand, Stone or any other string value.

Shifumi rules:
- Scissors win over Hand
- Hand win over Stone
- Stone win over Scissors
- If your opponent play anything else than Scissors, Hand or Stone, you must tell him Error to win.

You are required to output the winning move.
Entrée
A single string o who should have one of the following values: Scissors, Hand, Stone.
But a string of some other value may also be given !
Sortie
A single string with one of the following values: Scissors, Hand, Stone, Error
Contraintes
1 < o length <= 256
Exemple
Entrée
Scissors
Sortie
Stone*/

function shifumi(string) {
  const opponents = ["Scissors", "Hand", "Stone"];

  if (string === "Scissors") {
    return "Stone";
  }
  if (string === "Hand") {
    return "Scissors";
  }
  if (string === "Stone") {
    return "Hand";
  }
  if (!opponents.includes(string)) {
    return "Error";
  }
  return;
}

console.log(shifumi("Scissors")); // Stone
console.log(shifumi("Hand")); // Scissors
console.log(shifumi("Stone")); // Hand
console.log(shifumi(",;:")); // Error
console.log(shifumi("456")); // Eroor
