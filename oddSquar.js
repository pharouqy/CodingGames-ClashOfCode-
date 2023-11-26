/*You may have to find out all the odd numbers Ns and calculate the squares of Ns.
Print out all the squares with no repeat in reversed order.
Entrée
Line 1: An integer count for the number of integers to handle.
Line 2: count integers separated by spaces.
Sortie
Line 1: A decreasing sequence of numbers separated by spaces with no repeat.
Contraintes
0 < count < 128 (at least one odd)
-1000000 ≤ Ns ≤ 1000000
Exemple
Entrée
10
1 1 2 2 3 3 4 4 5 5
Sortie
25 9 1*/

function oddSquar(array) {
  let odd = [];
  let oddSquar = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      odd.push(array[i]);
    }
  }
  for (let i = 0; i < odd.length; i++) {
    oddSquar.push(odd[i] * odd[i]);
  }
  return oddSquar
    .sort((a, b) => b - a)
    .filter((number, index) => {
      return oddSquar.indexOf(number) === index;
    })
    .join(" ");
}

console.log(oddSquar([1, 1, 2, 2, 3, 3, 4, 4, 5, 5])); // 25 9 1
console.log(oddSquar([1, 1, 2, 4, 4, 4, 9, 3, 3, 4, 4, 5, 5, 6])); // 81 25 9 1
