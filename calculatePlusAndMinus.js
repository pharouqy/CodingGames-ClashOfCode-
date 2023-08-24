/*Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
01 Test 1
Entrée
Sortie attendue
+-+--+-+++--+
1
02 Test 2
Entrée
Sortie attendue
+++++++---
4
03 Test 3
Entrée
Sortie attendue
-+-+-+-+-+-+
0
04 Test 4
Entrée
Sortie attendue
------------++----+
-13*/

function calculatePlusAndMinus(string) {
  const array = string.split("");
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "+") {
      count++;
    } else {
      count--;
    }
  }
  return count;
}

console.log(calculatePlusAndMinus("+--+--++-+-+-+-+-+-+----+++-+--")); // -3
console.log(calculatePlusAndMinus("+-+--+-+++--+")); // 1
console.log(calculatePlusAndMinus("+++++++---")); // 4
console.log(calculatePlusAndMinus("-+-+-+-+-+-+")); // 0
console.log(calculatePlusAndMinus("------------++----+")); // -13
