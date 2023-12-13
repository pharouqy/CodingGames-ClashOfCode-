/*Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
01 Test 1
Entrée
Sortie attendue
.2A1N5Y64! §C*H*zAtrR
ANYCHAR
02 Test 2
Entrée
Sortie attendue
ahHdnDbiU
HDU
03 Test 3
Entrée
Sortie attendue
Ab
A
04 Test 4
Entrée
Sortie attendue
Hello World
HW
05 Test 5
Entrée
Sortie attendue
Homer J. Simpson
HJS
06 Test 6
Entrée
Sortie attendue
#1Cb2dA3h6P?9qS8
CAPS
*/

function extractUpperCase(string) {
  return string.match(/[A-Z]/g).join("");
}

console.log(extractUpperCase(".2A1N5Y64! §C*H*zAtrR")); // ANYCHAR
console.log(extractUpperCase("ahHdnDbiU")); // HDU
console.log(extractUpperCase("Ab")); // A
console.log(extractUpperCase("Hello World")); // HW
console.log(extractUpperCase("#1Cb2dA3h6P?9qS8")); // CAPS