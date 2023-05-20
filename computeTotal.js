/*You are given three numbers a, b and c.
Starting from 0, compute the total:
- If the number is even, add it to the total.
- If the number is odd, subtract it from the total.
Entrée
Line 1: An integer a.
Line 2: An integer b.
Line 3: An integer c.
Sortie
The total following the given rule.
Contraintes
0 ≤ a ≤ 1000
0 ≤ b ≤ 1000
0 ≤ c ≤ 1000
Exemple
Entrée
3
2
4
Sortie
3*/

function computeTotal(a, b, c) {
  let total = 0;

  if (a % 2 === 0) {
    total += a;
  } else {
    total -= a;
  }

  if (b % 2 === 0) {
    total += b;
  } else {
    total -= b;
  }

  if (c % 2 === 0) {
    total += c;
  } else {
    total -= c;
  }

  return total;
}

console.log(computeTotal(3, 2, 4)); // 3
console.log(computeTotal(5, 8, 4)); // 7
console.log(computeTotal(3, 9, 6)); // -6
console.log(computeTotal(5, 5, 7)); // -17
console.log(computeTotal(9, 2, 1)); // -8
