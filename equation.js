/*You need to multiply the first digit of the number by the sum of the remaining digits
Entrée
Line 1: An integer N.
Sortie
Line 1 : An integer N.
Contraintes
10 ≤ N ≤ 999999
Exemple
Entrée
12345
Sortie
14*/

function equation(number) {
  const numbers = number.toString().split("");
  const firstNumber = parseInt(numbers[0]);
  let sum = 0;
  numbers.shift();
  for (let elem of numbers) {
    sum += parseInt(elem);
  }
  return firstNumber * sum;
}

console.log(equation(12345)); // 14
console.log(equation(98657451)); // 324
console.log(equation(45769242)); // 140
console.log(equation(45987321)); // 140