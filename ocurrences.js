/*Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
01 Test 1
Entrée
Sortie attendue
1
0
1
0
02 Test 2
Entrée
Sortie attendue
6
6
9
9
03 Test 3
Entrée
Sortie attendue
278
890
890
278
04 Test 4
Entrée
Sortie attendue
5
9
5
9*/

function ocurrences(array) {
  const ocurrences = {};

  array.forEach((element) => {
    ocurrences[element] = ocurrences[element] ? ocurrences[element] + 1 : 1;
  });

  for (let number in ocurrences) {
    if (ocurrences[number] === 1) {
      return number;
    }
  }
}

console.log(ocurrences([1, 0, 1])); // 0
console.log(ocurrences([6, 6, 9])); // 9
console.log(ocurrences([278, 890, 890])); // 278
console.log(ocurrences([5, 9, 5])); // 9
