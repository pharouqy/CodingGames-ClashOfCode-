// Output the product of the R:th row of Pascal's triangle.
// In Pascal's triangle, each node has exactly two children. Each node not at the
//  left or right edge has exactly two parents. All nodes at the left and right edge
//  of the triangle have the value 1. All other nodes' values equal the sum of both
//  of the node's parents' values.
// These are the first four rows (0 to 3) of Pascal's triangle:
// 1
// 1 1
// 1 2 1
// 1 3 3 1
// See Wikipedia on Pascal's triangle for more information, should you require it.

function pascal(r) { // r is the row
  const arr = []; // array to store all the rows
  for (let i = 0; i < r + 1; i++) { // loop through the row
    const row = [1]; // array to store the values of the row
    for (let j = 1; j < i; j++) { // loop through the row
      row.push(arr[i - 1][j - 1] + arr[i - 1][j]); // add the values of the previous row
    }
    if (i > 0) { // if not the first row
      row.push(1); // add the value of the first row
    }
    arr.push(row); // add the row to the array
  }
  return arr[r].reduce((a, b) => a * b); // return the product of the row
}

console.log(pascal(0)); // 1
console.log(pascal(2)); // 2
console.log(pascal(5)); // 2500
console.log(pascal(9)); // 11759522374656