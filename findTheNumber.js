/*Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
01 Test 1
Entrée
Sortie attendue
1 + 1
1 2 3 4 5 6 7 8 9 10
3
02 Test 2
Entrée
Sortie attendue
1 + 2 + 3
0 2 9 2 5 1 5 2 2 5
5
03 Test 3
Entrée
Sortie attendue
91 - 90
0 0 0 0 0 0 0 0 0 0
0
04 Test 4
Entrée
Sortie attendue
10 - 1 - 5
5 7 2 4 9 1 5 2 6 2
9
*/

function findTheNumber(string, array) {
  const index = eval(string);
  return array[index];
}

console.log(findTheNumber("1 + 1", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 3
console.log(findTheNumber("1 + 2 + 3", [0, 2, 9, 2, 5, 1, 5, 2, 2, 5])); // 5
console.log(findTheNumber("91 - 90", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])); // 0
console.log(findTheNumber("10 - 1 - 5", [5, 7, 2, 4, 9, 1, 5, 2, 6, 2])); // 9
console.log(findTheNumber("5 - 5 + 8", [1, 7, 9, 4, 6, 8, 3, 1, 6, 7])); // 6
