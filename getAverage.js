/*Given an input string s, return the character given by the average of the ASCII values of all characters in the string.

s can contain any ASCII characters, upper case letters, lower case letters, spaces or symbols.

If the average value is a float, round down (floor).
Entrée
Line 1: integer len_s - length of s
Line 2: string s - the string to find the average ASCII value of.
Sortie
the character associated with the average ASCII value of the string s
Contraintes
1 <= len_s <= 50
Exemple
Entrée
5
hello
Sortie
j*/

function getAverage(string) {
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    sum += string[i].charCodeAt(0);
  }
  const avrg = Math.floor(sum / string.length);
  const result = String.fromCharCode(avrg);
  return result;
}

console.log(getAverage("hello")); // j
