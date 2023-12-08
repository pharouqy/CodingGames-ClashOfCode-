/*Your aim is to take the product of N integers, and output if it can divide by a divisor d perfectly. If it can divide perfectly, output Perfect, otherwise output Imperfect

Perfect division means that there is no remainder when divided by the divisor. Some examples:
21/7 = 3 remainder 0 (perfect)
100/10 = 10 remainder 0 (perfect)
105/10 = 10 remainder 5 (not perfect)

Note: The product will be very large, you have to optimize your code well
Entrée
Line 1: An integer N for the number of integers x to multiply
Line 2: An integer d for the divisor
Next N lines: Integer x
Sortie
Line 1 : Perfect or Imperfect
Contraintes
1 ≤ N ≤ 100
1 ≤ d ≤ 100
0 <= x <= 9999999999
Exemple
Entrée
2
3
123
7
Sortie
Perfect*/

function divisorPerfectly(array, divisor) {
  let x = 1;
  for (let i = 0; i < array.length; i++) {
    x *= array[i];
  }
  if (x % divisor === 0) {
    return "Perfect";
  } else {
    return "Imperfect";
  }
}

console.log(divisorPerfectly([123, 7], 3)); // Perfect
console.log(divisorPerfectly([123, 7], 4)); // Imperfect
console.log(divisorPerfectly([123, 7, 14, 95, 7654], 5)); // Perfect
