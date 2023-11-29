/*You need to print the sum of factorial of a number and the sum of all natural numbers ranging from 1 to the number (both inclusive).
For example if input is equal to 4, then output should be (4*3*2*1)+4+3+2+1
Entrée
Line 1: A Positive integer n
Sortie
Sum of factorial as well as all integers below the number including number
Contraintes
1 ≤ n ≤ 25
Exemple
Entrée
4
Sortie
34*/

function factorialAndSum(number) {
  let sum = 0;
  let multi = 1;
  for (let i = 1; i <= number; i++) {
    sum += i;
    multi *= i;
  }
  return sum + multi;
}

console.log(factorialAndSum(4)) // 34
console.log(factorialAndSum(5)) // 155
console.log(factorialAndSum(6)) // 721
console.log(factorialAndSum(7)) // 3313
console.log(factorialAndSum(8)) // 15127