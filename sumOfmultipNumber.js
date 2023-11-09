/*Write a program that prints the sum of all the positive multiples of 3 or 5 or 7 below N.
For example, if N=15 we get 3, 5, 6, 7, 9, 10, 12, 14 and the sum of these multiples is 66.
Entrée
A positive number N
Sortie
The sum of all the positive multiples of 3 or 5 or 7 below N
Contraintes
0 ≤ N < 1000
Exemple
Entrée
15
Sortie
66*/

function sumOfmultipNumber(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumOfmultipNumber(15)); // 66
console.log(sumOfmultipNumber(100)); // 2738
console.log(sumOfmultipNumber(1000)); // 271066
console.log(sumOfmultipNumber(10000)); // 27142139
