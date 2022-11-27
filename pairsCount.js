//Print the number of pairs of [a, b] where a - b <= d, d is the given number;

function pairsCount(arr, d) {
  let pairs = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  for (let z = 0; z < pairs.length; z++) {
    if (pairs[z][0] - pairs[z][1] <= d) {
        count++;
    }
  }
  return count;
}

console.log(pairsCount([2, 8, 9, 4, 10, 56, 24, 5], 2)); //33
console.log(pairsCount([5342, 9578, 4545, 4456, 4510, 5645, 2544, 5455], 21)); //28