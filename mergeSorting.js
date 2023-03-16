function mergeSorting(array) {
  if (array.length > 1) {
    const middle_index = Math.floor(array.length / 2);
    const left_side = array.slice(0, middle_index);
    const right_side = array.slice(middle_index);
    mergeSorting(left_side);
    mergeSorting(right_side);
    let left_index = 0;
    let right_index = 0;
    let global_index = 0;

    while (left_index < left_side.length && right_index < right_side.length) {
      if (left_side[left_index] < right_side[right_index]) {
        array[global_index] = left_side[left_index];
        left_index++;
      } else {
        array[global_index] = right_side[right_index];
        right_index++;
      }
      global_index++;
    }

    while (left_index < left_side.length) {
      array[global_index] = left_side[left_index];
      left_index++;
      global_index++;
    }

    while (right_index < right_side.length) {
      array[global_index] = right_side[right_index];
      right_index++;
      global_index++;
    }
  }
  return array;
}

console.log(mergeSorting([1, 5, 3, 2, 9, 4, 8])); // [1, 2, 3, 4, 5, 8, 9];
