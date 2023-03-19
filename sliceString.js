/*Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
01 Test 1
Entrée
Sortie attendue
APP
TITLE
APPLE
02 Test 2
Entrée
Sortie attendue
DUR
CORTLEX
DURTLEX
03 Test 3
Entrée
Sortie attendue
TEST
CASE
TEST
04 Test 4
Entrée
Sortie attendue
GOO
FOOD
GOOD*/

function sliceString(first, second) {
  const sufix = second.slice(first.length);
  return first.concat(sufix);
}

console.log(sliceString("APP", "TITLE")); // APPLE
console.log(sliceString("DUR", "CORTLEX")); // DURTLEX
console.log(sliceString("TEST", "CASE")); // TEST
console.log(sliceString("GOO", "FOOD")); // GOOD
console.log(sliceString("FAR", "HIBOUK")); // FAROUK
