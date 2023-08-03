/*Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
01 Test 1
Entrée
Sortie attendue
4
0
1
2
3
true
false
true
false
02 Test 2
Entrée
Sortie attendue
1
44
true
03 Test 3
Entrée
Sortie attendue
1
179
false
04 Test 4
Entrée
Sortie attendue
3
3254
24
654
true
true
true
05 Test 5
Entrée
Sortie attendue
3
0
9001
42
true
false
true
06 Test 6
Entrée
Sortie attendue
4
2
4
6
8
true
true
true
true
07 Test 7
Entrée
Sortie attendue
3
10
7
11
true
false
false
08 Test 8
Entrée
Sortie attendue
3
15
11
9
false
false
false
09 Test 9
Entrée
Sortie attendue
3
22
11
212
true
false
true
10 Test 10
Entrée
Sortie attendue
3
30
42
8
true
true
true*/

function sequanceTrulyOrFalse(array) {
  const result = {};
  array.forEach((element) => {
    element % 2 === 0
      ? (result[element] = "true")
      : (result[element] = "false");
  });
  return result;
}

console.log(sequanceTrulyOrFalse([0, 1, 2, 3])); // { '0': 'true', '1': 'false', '2': 'true', '3': 'false' }
console.log(sequanceTrulyOrFalse([2, 4, 6, 8])); // { '2': 'true', '4': 'true', '6': 'true', '8': 'true' }
console.log(sequanceTrulyOrFalse([10, 7, 11])); // { '7': 'false', '10': 'true', '11': 'false' }
console.log(sequanceTrulyOrFalse([15, 11, 9])); // { '9': 'false', '11': 'false', '15': 'false' }
console.log(sequanceTrulyOrFalse([22, 11, 212])); // { '11': 'false', '22': 'true', '212': 'true' }
console.log(sequanceTrulyOrFalse([30, 42, 8])); // { '8': 'true', '30': 'true', '42': 'true' }
