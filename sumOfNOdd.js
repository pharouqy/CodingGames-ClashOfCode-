/*Given an integer N, you have to output the sum of the squares of the Nth first odd numbers

For example, if N is 5, the sum of the squares of the Nth first odd numbers is 1**2 + 3**2 + 5**2 + 7**2 + 9**2 = 165 so you have to output 165
Entrée
Line 1 : An integer N
Sortie
Line 1 : An integer x with x equal to the sum of the squares of the Nth first odd numbers
Contraintes
0 ≤ N ≤ 100
Exemple
Entrée
5
Sortie
165*/

function sumOfNOdd(numbers) {
  const odds = [];
  let i = 1;
  while (odds.length < numbers) {
    if (i % 2 !== 0) {
      odds.push(i ** 2);
    }
    i++;
  }
  const result = odds.reduce((accu, curr) => {
    return accu + curr;
  }, 0);
  return result;
}

console.log(sumOfNOdd(5)); // 165
console.log(sumOfNOdd(10)); // 1330
console.log(sumOfNOdd(25)); // 20825
console.log(sumOfNOdd(75)); // 562475
console.log(sumOfNOdd(105)); // 1543465
