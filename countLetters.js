/*Votre programme doit afficher le nombre de lettres contenues dans un message. Une lettre est un caractère dans [a-z] ou [A-Z].

ENTRÉE :
Ligne 1 : Une chaîne de caractères message.

SORTIE :
Ligne 1 : Le nombre de lettres dans message.

EXEMPLE :
Entrée
I am
Sortie
3*/

function countLetter(str) {
  const array = str.split("");
  let count = 0;
  for (let letter in array) {
    if (/^[a-zA-Z]$/.test(array[letter])) {
      count++;
    }
  }
  return count;
}

console.log(countLetter("Je suis trés content d'étre parmis vous !!!")); // 30
console.log(countLetter("Younsi Farouk")); // 12
