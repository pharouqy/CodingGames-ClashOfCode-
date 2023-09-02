/*In number theory, two integers a and b are coprime if the only positive integer that is a divisor of both of them is 1. This is equivalent to their greatest common divisor (GCD) being 1.
Given a natural number n. Find two natural numbers a and b (a < b) that are coprime such that a * b = n and |a - b| is the smallest.
Entrée
An integer n
Sortie
Two integers a and b separated by space satisfy the problem requirement.
Contraintes
2 <= n <= 1000000
Exemple
Entrée
24
Sortie
3 8*/

function findCoprimePair(number) {
  for (let a = 2; a < number; a++) {
    if (number % a === 0) {
      const b = number / a;
      if (areCoprime(a, b)) {
        return [a, b];
      }
    }
  }
}

function areCoprime(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a === 1;
}

console.log(findCoprimePair(24)); // [8, 3]
console.log(findCoprimePair(240)); // [ 3, 80 ]
console.log(findCoprimePair(1546)); // [ 2, 773 ]
console.log(findCoprimePair(39)); // [ 3, 13 ]
console.log(findCoprimePair(1984)); // [ 31, 64 ]
