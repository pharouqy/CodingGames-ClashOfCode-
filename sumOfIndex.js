/*You get a character c and a string s.
Your task is to print the sum of all indexes of c in s. The index of the first character is 0!
Example:
c = o
s = hello world
"o" is the fifth and the eighth character: Index 4 + Index 7 = 11
Entrée
Line 1: A character c
Line 2: A string s
Sortie
Line 1: The sum of all indexes of c in s. Pay attention on UPPER- and lowercase.
Contraintes
Length of c = 1
1 ≤ length of s ≤ 200
Exemple
Entrée
e
hello
Sortie
1*/

function sumOfIndex(letter, sentence) {
  let sum = 0;
  sentence.split("").forEach((element, index) => {
    if (element === letter) {
      sum += index;
    }
  });
  return sum;
}

console.log(sumOfIndex("e", "hello")); // 1
console.log(sumOfIndex("o", "farouk younsi")); // 11
console.log(sumOfIndex("e", "la liberté des uns s'arrete là ou commence celle des autres !!!")); // 345
console.log(sumOfIndex("e", "fmhqfjqdhfueahfqlfkqhfqhheheehejhejheouheeheu")); // 314
