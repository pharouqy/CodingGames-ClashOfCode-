/*Given a string, output the sum of each ASCII character value multiplied by its index in the string
Entrée
Line 1: A string S
Sortie
Line 1: The sum of each ASCII character value multiplied by its index.

Example: ABC => 65*0 + 66*1 + 67*2 => 200
Contraintes
The string contains no space.
Exemple
Entrée
ABC
Sortie
200*/

function ASCIISum(string) {
  const array = string.split("");
  return array
    .map((lettre, index) => {
      return lettre.charCodeAt(0) * index;
    })
    .reduce((current, previous) => {
      return current + previous;
    }, 0);
}

console.log(ASCIISum("ABC")); // 200
console.log(ASCIISum("aaaa")); // 582
console.log(ASCIISum("aboABC")); // 1114
console.log(ASCIISum("123")); // 152
console.log(ASCIISum("FaRoUk")); // 1469
