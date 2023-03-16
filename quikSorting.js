function quikSorting(array) {
  if (array.length === 0) {
    return [];
  } else {
    let pivot = array[array.length - 1];
    let array_for_smaller = [];
    let array_for_bigger = [];
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < pivot) {
        array_for_smaller.push(array[i]);
      } else {
        array_for_bigger.push(array[i]);
      }
    }
    return quikSorting(array_for_smaller).concat(
      pivot,
      quikSorting(array_for_bigger)
    );
  }
}

console.log(quikSorting([1, 5, 3, 2, 9, 4, 8])); // [1, 2, 3, 4, 5, 8, 9];
