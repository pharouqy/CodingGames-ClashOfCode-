/*Sum the digits of n in base b until 1 digit is left.
The result must be converted to decimal.

Example:
n = 223 b = 16
223 in base 16 is 0xDF
0xD + 0xF = 0x1C is 2 digits so we continue summing digits!
0x1 + 0xC = 0xD is 1 is digit so we stop!
0xD converted back to base 10 is 13
Entrée
Line 1: An integer n in decimal format
Line 2: An integer b
Sortie
Line 1: Sum of the digits in decimal format
Contraintes
2 <= b < 256
Exemple
Entrée
223
16
Sortie
13*/

function sumDigitsInBase(number, base) {
  let numInBase = number.toString(base);
  let sum = 0;
  for (let i = 0; i < numInBase.length - 1; i++) {
    sum += parseInt(numInBase[i], base);
  }
  return parseInt(sum, 10);
}

console.log(sumDigitsInBase(223, 16)); // 13
console.log(sumDigitsInBase(2853, 15)); // 22
console.log(sumDigitsInBase(4769, 5)); // 9
