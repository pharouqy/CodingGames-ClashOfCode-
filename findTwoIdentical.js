// You have to find two identical numbers in a list of 3 numbers.
// if there is 2 identical numbers print this number. If each number is unique, print "no solution".

function findTwoIdentical(arr) {
  let o = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        o.push(arr[i]);
      }
    }
  }
  if (o.length != []) {
    return o[0];
  } else {
    return "no solution";
  }
}

console.log(findTwoIdentical([1, 2, 3])); // no solution
console.log(findTwoIdentical([1, 2, 2])); // 2
