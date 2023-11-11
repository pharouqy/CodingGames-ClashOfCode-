/*Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
01 Test 1
Entrée
Sortie attendue
2
4
2
02 Test 2
Entrée
Sortie attendue
25
390625
4
03 Test 3
Entrée
Sortie attendue
43
43
1
04 Test 4
Entrée
Sortie attendue
99
1
0*/

function numberDivision(N, Y) {
  let compteur = 0;
  while (Y % N === 0) {
    compteur += 1;
    Y /= N;
  }
  return compteur;
}

console.log(numberDivision(2, 4)); // 2
console.log(numberDivision(25, 390625)); // 4
console.log(numberDivision(43, 43)); // 1
console.log(numberDivision(99, 1)); // 0