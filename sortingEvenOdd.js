function sortingEvenOdd(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] % 2 !== 0 && array[j + 1] % 2 === 0) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(sortingEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [2, 4, 6, 8, 1, 3, 5, 7, 9]
console.log(sortingEvenOdd([45, 25, 36, 95, 75, 64, 39, 81, 3, 5, 64])); // [36, 64, 64, 45, 25, 95, 75, 39, 81, 3, 5]
