/*Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
01 Test 1
Entrée
Sortie attendue
3
4
21
02 Test 2
Entrée
Sortie attendue
2
8
20
03 Test 3
Entrée
Sortie attendue
0
8
0
04 Test 4
Entrée
Sortie attendue
27
6
891*/

function enigma(a, b) {
  return (a + b) * a;
}

console.log(enigma(3, 4)); // 21
console.log(enigma(2, 8)); // 20
console.log(enigma(0, 8)); // 0
console.log(enigma(27, 6)); // 891
