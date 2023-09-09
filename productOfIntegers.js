/*Given two integers a and b, answer the sign of the product of a, a+1, ..., b.
Entrée
Two integers a and b separated by space.
Sortie
If the product is positive, output 1. If it is zero, output 0. If it is negative, output -1.
Contraintes
-10^10 ≤ a ≤ b ≤ 10^10
Exemple
Entrée
3 5
Sortie
1*/

function productOfIntegers(a, b) {
  let product = 1;
  for (let i = a; i <= b; i++) {
    product *= i;
  }
  if (product > 0) {
    return 1;
  } else if (product < 0) {
    return -1;
  } else {
    return 0;
  }
}

console.log(productOfIntegers(3, 5)); // 1
console.log(productOfIntegers(0, 25)); // 0
console.log(productOfIntegers(-79, 2)); // 0
console.log(productOfIntegers(30, 56)); // 1
console.log(productOfIntegers(-36, -24)); // -1
