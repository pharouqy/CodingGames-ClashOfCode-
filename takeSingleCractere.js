/*Write a script that takes a string and returns string without any characters with the same value next to each other, while preserving the original order of characters.
Entrée
Line 1: A string x
Sortie
A string of characters from the input sequence, with no consecutive characters having the same value.
Contraintes
Exemple
Entrée
AAAABBBCCDAABBB
Sortie
ABCDAB*/

function takeSingleCractere(string) {
  const arr = string.split("");
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      result += arr[i];
    }
  }
  return result;
}

console.log(takeSingleCractere("AAAABBBCCDAABBB")); // ABCDAB
