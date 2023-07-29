/*Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
01 Test 1
Entrée
Sortie attendue
1
1
02 Test 2
Entrée
Sortie attendue
2
2
22
03 Test 3
Entrée
Sortie attendue
5
5
55
555
5555
55555
04 Test 4
Entrée
Sortie attendue
6
6
66
666
6666
66666
666666
05 Test 5
Entrée
Sortie attendue
9
9
99
999
9999
99999
999999
9999999
99999999
999999999*/

function triangleOfNumber(number) {
  const string = number.toString();
  for (let i = 1; i <= number; i++) {
    console.log(string.repeat(i - 1));
  }
  return string.repeat(number);
}

console.log(triangleOfNumber(5));
console.log(triangleOfNumber(6));
console.log(triangleOfNumber(9));
console.log(triangleOfNumber(12));
console.log(triangleOfNumber(13));
