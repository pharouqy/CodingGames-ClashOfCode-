/*Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
01 Test 1
Entrée
Sortie attendue
5
4 3 2 1 0
02 Test 2
Entrée
Sortie attendue
-5
-5 -4 -3 -2 -1 0
03 Test 3
Entrée
Sortie attendue
0
Already Zero
04 Test 4
Entrée
Sortie attendue
-10
-10 -9 -8 -7 -6 -5 -4 -3 -2 -1 0*/

function degenerative(number) {
  if (number == 0) return "Already Zero";
  else {
    result = number > 0 ? [] : [number];
    while (Math.abs(number) > 0) {
      if (number > 0) number--;
      else number++;
      result.push(number);
    }

    return result.join(" ");
  }
}

console.log(degenerative(5)); // 4 3 2 1 0
console.log(degenerative(-5)); // -5 -4 -3 -2 -1 0
console.log(degenerative(0)); // Already Zero
console.log(degenerative(-10)); // -10 -9 -8 -7 -6 -5 -4 -3 -2 -1 0
console.log(degenerative(30)); // 29 28 27 26 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0
