/*Find the total sum of the sum of the first N positive numbers, the first N positive perfect squares, and the first N positive perfect cubes.
Entrée
Line 1: An integer N
Sortie
Line 1:The sum of the sum of all numbers from 1 to N, the sum of 1 to N each squared and the sum of 1 to N each cubed.
Contraintes
1 ≤ N ≤ 300 (The solution is always lower than 2^31-1)
Exemple
Entrée
3
Sortie
56*/

function sumOfPerfect(number) {
  let sumNumbers = 0;
  let sumSquares = 0;
  let sumCubes = 0;
  for (let i = 0; i <= number; i++) {
    sumNumbers += i;
    sumSquares += i ** 2;
    sumCubes += i ** 3;
  }

  return sumNumbers + sumSquares + sumCubes;
}

console.log(sumOfPerfect(3)); // 56
console.log(sumOfPerfect(2)); // 17
console.log(sumOfPerfect(5)); // 295
console.log(sumOfPerfect(7)); // 952
console.log(sumOfPerfect(13)); // 9191
