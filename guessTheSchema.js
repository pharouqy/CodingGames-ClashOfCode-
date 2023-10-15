/*Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
01 Test 1
Entrée
Sortie attendue
27
##*******
02 Test 2
Entrée
Sortie attendue
56
#####******
03 Test 3
Entrée
Sortie attendue
80
########
04 Test 4
Entrée
Sortie attendue
03
***
05 Test 5
Entrée
Sortie attendue
00
Nothing Lol*/

function guessTheSchema(string) {
  const [a, b] = string.split("");
  let string1 = "";
  let string2 = "";
  if (a === "0" && b === "0") {
    return "Nothing Lol";
  } else {
    for (let i = 0; i < a; i++) {
      string1 += "#";
    }
    for (let i = 0; i < b; i++) {
      string2 += "*";
    }
    return string1 + string2;
  }
}

console.log(guessTheSchema("27")); // ##*******
console.log(guessTheSchema("56")); // #####******
console.log(guessTheSchema("80")); // ########
console.log(guessTheSchema("03")); // ***
console.log(guessTheSchema("16")); // #******
console.log(guessTheSchema("00")); // Nothing Lol
