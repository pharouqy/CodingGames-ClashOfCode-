/*You must make a subsequence out of the given string by taking the characters present at positions 1,3,6,10,15... and so on. (triangular numbers: A triangular number or triangle number counts objects arranged in an equilateral triangle, obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc. ).

[Note: indexes start at 1]
Entrée
Line 1: A string s.
Sortie
Line 1: The subsequence of the given string.
Contraintes
Length of string is between 1 and 30.
Exemple
Entrée
abcdefghijk
Sortie
acfj*/

function subsequence(string) {
  const array = string.trim().split("");
  let result = "";
  for (let i = 1; i < array.length; i++) {
    if ((i * (i + 1)) / 2 - 1 < array.length) {
      result += array[(i * (i + 1)) / 2 - 1];
    }
  }
  return result;
}

console.log(subsequence("abcdefghijk")); // acfj
console.log(subsequence("ddfhjqhfjkqdfhqkdfhdklf")); // dfqkqk
console.log(subsequence("abcdeqdfdffhdqfhdfkjdhfskdfhfdsfghijk")); // acqffdhj
console.log(subsequence("abcdefsdfdfjsflkjdflkdsjfdlkjfghijk")); // acfdlkk
