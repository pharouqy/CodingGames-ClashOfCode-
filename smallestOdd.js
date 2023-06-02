/*print the smallest odd number
Entrée
Line : list of numbers
Sortie
Line : the smallest odd number
Contraintes
Exemple
Entrée
2 1 3 8 5
Sortie
1*/

function smallestOdd(array) {
  const sorting = array
    .map((x) => {
      return parseInt(x);
    })
    .sort((a, b) => {
      return a - b;
    });

  for (let i = 0; i < sorting.length; i++) {
    if (sorting[i] % 2 !== 0) {
      return sorting[i];
    }
  }
}

console.log(smallestOdd([1, 5, 6, 8, -9, 6, 0, -99, -8, -7])); // -99
