/*Given a number N sum up all even numbers from 2 to N.
Entrée
Line 1: The number N
Sortie
Line 1: An integer K, the sum of all even numbers in the range 2 to N (Inclusive).
Contraintes
2 <= N <=10000
2 <= K <= 25005000
Exemple
Entrée
10
Sortie
30*/

function sumOfEven(number) {
  let sum = 0;
  for (let i = 2; i <= number; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumOfEven(10)); // 30
console.log(sumOfEven(20)); // 110
console.log(sumOfEven(75)); // 1406
console.log(sumOfEven(110)); // 3080
