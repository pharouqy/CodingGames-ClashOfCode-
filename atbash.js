/*Le programme :
Votre programme doit décrypter un code Atbash qui est une méthode simple de cryptage.

Cela consiste à inverser l'alphabet en remplaçant la lettre a (première lettre) par z (le dernière lettre), b par y et ainsi de suite...

ENTRÉE :
Ligne 1: un mot encrypté.

SORTIE :
Ligne 1: le mot décrypté.

CONTRAINTES :
Le mot ne contient que des lettres minuscules (a-z)

EXEMPLE :
Entrée
zyxabc
Sortie
abczyx*/

function atbash(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const atbashs = [...alphabet].reverse();
  const result = [];
  for (let j = 0; j < string.length; j++) {
    for (let i = 0; i < alphabet.length; i++) {
      if (string[j] === alphabet[i]) {
        result.push(atbashs[i]);
      }
    }
  }
  return result.join("");
}

console.log(atbash("zyxabc")); // abczyx
console.log(atbash("shqshqskjhqskdh")); // hsjhsjhpqsjhpws
console.log(atbash("qsiduzobchdjqf")); // jhrwfalyxswqju
console.log(atbash("qspdoiqsclkcn")); // jhkwlrjhxopxm
console.log(atbash("po  uebcqjkqf")); // klfvyxjqpju
