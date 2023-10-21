/*Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
01 Test 1
Entrée
Sortie attendue
a----b
A----B
02 Test 2
Entrée
Sortie attendue
Hello!!
hELLO!!
03 Test 3
Entrée
Sortie attendue
AAbBcc
aaBbCC
04 Test 4
Entrée
Sortie attendue
TesT
tESt*/

function reverseUpperOrLower(string) {
  const array = string.split("").map((el) => {
    if (el === el.toUpperCase()) {
      return el.toLowerCase();
    } else {
      return el.toUpperCase();
    }
  });

  return array.join("");
}

console.log(reverseUpperOrLower("a----b")); // A----B
console.log(reverseUpperOrLower("Hello!!")); // hELLO!!
console.log(reverseUpperOrLower("AAbBcc")); // aaBbCC
console.log(reverseUpperOrLower("TesT")); // tESt
console.log(reverseUpperOrLower("abAFER---*p")); // ABafer---*P
