/*Consider an int n.
Compute three sums:
- the sum of all the integers between 1 and n
- the sum of the squares of all the integers between 1 and n
- the sum of the cubes of all the integers between 1 and n

Be careful, you answers must be given modulo 10^9 !
Entrée
Line 1 : One integer n
Sortie
Line 1 : the sum of all the integers between 1 and n (modulo 10^9)
Line 2 : the sum of the squares of all the integers between 1 and n (modulo 10^9)
Line 3 : the sum of the cubes of all the integers between 1 and n (modulo 10^9)
Contraintes
1 <= n <= 10000
Exemple
Entrée
4
Sortie
10
30
100*/

function sumOfIntegers(number) {
  let sumI = (sumS = sumC = 0);
  for (let i = 0; i <= number; i++) {
    sumI += i % 10 ** 9;
    sumS += i ** 2 % 10 ** 9;
    sumC += i ** 3 % 10 ** 9;
  }
  return [sumI, sumS, sumC];
}

console.log(sumOfIntegers(4)); // [ 10, 30, 100 ]
console.log(sumOfIntegers(578)); // [ 167331, 64533989, 27999663561 ]
