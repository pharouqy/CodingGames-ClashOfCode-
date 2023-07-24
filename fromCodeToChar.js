/*Votre programme doit convertir des entiers en leur caractère ASCII.

ENTRÉE :
Ligne 1 : Un entier charCount pour le nombre d'entiers à convertir.
Ligne 2 : charCount entiers charCode, séparés par des espaces.

SORTIE :
Une ligne unique contenant la conversion en caractères ASCII des entiers.

CONTRAINTES :
0 < charCount < 1000
32 ≤ charCode ≤ 126

EXEMPLE :
Entrée
11
72 101 108 108 111 32 87 111 114 108 100
Sortie
Hello World
*/

function fromCodeToChar(string) {
  const code = string.split(" ");
  const result = [];
  for (let i = 0; i < code.length; i++) {
    result.push(String.fromCharCode(code[i]));
  }
  return result.join("");
}

console.log(fromCodeToChar("72 101 108 108 111 32 87 111 114 108 100")); // Hello World
console.log(fromCodeToChar("89 111 117 110 115 105 32 70 97 114 111 117 107")); // Younsi Farouk
console.log(fromCodeToChar("74 101 32 99 111 100 101 32 100 111 110 99 32 106 101 32 115 117 105 115 32 33 33 33")); // Je code donc je suis !!!