/*You are given the number n. You must calculate the sum of each 2 in power, beginning with 0, and ending n-1.
Example:
Input : 4
Calculation: 2^0+2^1+2^2+2^3=1+2+4+8=15
It's easier when you know a trick! Good luck!
Entrée
You are given integer n
Sortie
Sum of 2 in powers from 0 to n-1
Contraintes
1<=n<=39
Exemple
Entrée
4
Sortie
15*/

function powerOf2InRange(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    sum += 2 ** i;
  }
  return sum;
}

console.log(powerOf2InRange(4)); // 15
console.log(powerOf2InRange(9)); // 511
console.log(powerOf2InRange(2.3)); // 7
console.log(powerOf2InRange(526.35)); // 4.39347050248359e+158
console.log(powerOf2InRange(0.002)); // 1
