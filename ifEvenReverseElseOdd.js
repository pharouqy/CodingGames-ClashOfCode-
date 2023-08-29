/*Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
01 Test 1
Entrée
Sortie attendue
1
Short text
txet trohS
02 Test 2
Entrée
Sortie attendue
0
Another text
Another text
03 Test 3
Entrée
Sortie attendue
100
Believe in yourself!
Believe in yourself!
04 Test 4
Entrée
Sortie attendue
101
The future belongs to those who believe in the beauty of their dreams.
.smaerd rieht fo ytuaeb eht ni eveileb*/

function ifEvenReverseElseOdd(number, sentence) {
  let reversed = "";
  if (number % 2 !== 0) {
    for (let i = sentence.length - 1; i >= 0; i--) {
      reversed += sentence[i];
    }
    return reversed;
  } else {
    return sentence;
  }
}

console.log(ifEvenReverseElseOdd(1, "Short text")); // txet trohS
console.log(ifEvenReverseElseOdd(0, "Another text")); // Another text
console.log(ifEvenReverseElseOdd(100, "Believe in yourself!")); // Believe in yourself!
console.log(ifEvenReverseElseOdd(101, "The future belongs to those who believe in the beauty of their dreams.")); // .smaerd rieht fo ytuaeb eht ni eveileb ohw esoht ot sgnoleb erutuf ehT