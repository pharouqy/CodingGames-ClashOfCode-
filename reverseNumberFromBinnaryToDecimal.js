/*You are given a positive integer in decimal representation. You need to convert this integer to its binary representation, reverse the binary digits, and then convert back to decimal representation.

The binary representation of 13 is 1101. Reversing the binary digits gives 1011, which is 11 in decimal representation. Therefore, the output is 11.
Entrée
A positive integer N in decimal representation.
Sortie
A positive integer representing the result of the binary reversal operation.
Contraintes
1 ≤ N ≤ 10^9
Exemple
Entrée
13
Sortie
11*/

function reverseNumberFromBinnaryToDecimal(number) {
    return parseInt(number.toString(2).split("").reverse().join(""), 2);
}

console.log(reverseNumberFromBinnaryToDecimal(13)); // 11
console.log(reverseNumberFromBinnaryToDecimal(100)); // 19
console.log(reverseNumberFromBinnaryToDecimal(1000)); // 95
console.log(reverseNumberFromBinnaryToDecimal(10000)); // 569
console.log(reverseNumberFromBinnaryToDecimal(100000)); // 2755
