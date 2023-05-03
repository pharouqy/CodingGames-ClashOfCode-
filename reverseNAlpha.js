/*Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
01 Test 1
Entrée
Sortie attendue
5
EEEEE
02 Test 2
Entrée
Sortie attendue
17
QQQQQQQQQQQQQQQQQ
03 Test 3
Entrée
Sortie attendue
1
A
04 Test 4
Entrée
Sortie attendue
3
CCC
05 Test 5
Entrée
Sortie attendue
25
YYYYYYYYYYYYYYYYYYYYYYYYY*/

function repeatNAlpha(number) {
  const alphabeutique = "abcdefghijklmnopqrstuvwxyz";
  const array = alphabeutique.split("");
  let result;
  for (let i = 0; i < array.length; i++) {
    result = array[number - 1].toUpperCase().repeat(number);
    break;
  }
  return result;
}

console.log(repeatNAlpha(5)); // EEEEE
console.log(repeatNAlpha(17)); // QQQQQQQQQQQQQQQQQ
console.log(repeatNAlpha(1)); // A
console.log(repeatNAlpha(3)); // CCC
console.log(repeatNAlpha(25)); // YYYYYYYYYYYYYYYYYYYYYYYYY
console.log(repeatNAlpha(15)); // OOOOOOOOOOOOOOO
console.log(repeatNAlpha(20)); // TTTTTTTTTTTTTTTTTTTT
