/*We define a transformation of digits as being from "0123456789" to "9876543210".
You're given N digits as input. Please transform the digits in a similar way.
For example, if you're given the digit 1, you should output the digit 8.
Entrée
Line 1: An integer N for the number of digits to input.
Next N lines: X as the digit.
Sortie
Next N lines: The transformation of X
Contraintes
0 ≤ X ≤ 9
Exemple
Entrée
1
8
Sortie
1*/

function transformation(number) {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const transform = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  for (let i = 0; i < digits.length; i++) {
    if (number === digits[i]) {
      return transform[i];
    }
  }
}

console.log(transformation(8)); // 1
console.log(transformation(5)); // 4
console.log(transformation(4)); // 5
console.log(transformation(9)); // 0
console.log(transformation(0)); // 9
