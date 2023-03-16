function bubbleSorting(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - (i - 1); j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSorting([1, 5, 3, 2, 9, 4, 8])); // [1, 2, 3, 4, 5, 8, 9];
