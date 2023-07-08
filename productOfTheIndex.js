/*Given a positive integer N, display the product of the digits whose index is divisible by 3.
Indexing starts from 0, so the leftmost digit is of index 0, the next digit is of index 1, etc.
Entrée
Line 1 : A positive integer N
Sortie
Line 1 : The product of the digits whose index is divisible by 3
Contraintes
1 ≤ N ≤ 10**20
Exemple
Entrée
1234
Sortie
4*/

function productOfTheIndex(number) {
  const array = number.toString().split("");
  let product = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    if (i % 3 === 0) {
      product *= array[i];
    }
  }
  return product;
}

console.log(productOfTheIndex(1234)); // 4
console.log(productOfTheIndex(123456789)); // 28
console.log(productOfTheIndex(564987321564974687)); // 36450
