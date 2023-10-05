/*Find the second greatest common divisor of two positive integers n and m.
Entrée
Line 1: n
Line 2: m
Sortie
the second greatest common divisor of n and m
Contraintes
1 <= n, m <= 200
n and m have more than one common divisors.
Exemple
Entrée
3
6
Sortie
1
Sortie console*/

function commonDivisor(n, m) {
  let i = 0;
  const array = [];
  while (i <= 200) {
    if (m % i === 0 && n % i === 0) {
      array.push(i);
    }
    i++;
  }
  console.log(array);
  array.sort((a, b) => a - b);
  if (array.length === 2 || array.length === 1) {
    return array[0];
  } else {
    return array[array.length - 2];
  }
}

console.log(commonDivisor(3, 6)); // 1
console.log(commonDivisor(705, 255)); // 5
console.log(commonDivisor(90, 6)); // 3
console.log(commonDivisor(20, 80)); // 10
console.log(commonDivisor(123, 397)); // 1
