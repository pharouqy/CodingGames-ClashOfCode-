// Given n an integer, print 2 to the power of the absolute difference between the count
//  of 0 and 1 in the binary representation of n.
// Example
// n = 27: the binary representation is 11011. the count of 0 is 1 and the count of
// 1 is 4, so the output is 2^|1-4| = 8.
// 2 to the power of the absolute difference between the count of 0 and 1 in the binary representation of n.
// n >= 0

function powerBin(n) {
  let binary = n.toString(2);
  let count0 = 0;
  let count1 = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "0") {
      count0++;
    } else {
      count1++;
    }
  }
  return Math.pow(2, Math.abs(count0 - count1));
}

console.log(powerBin(27)); // 8
console.log(powerBin(0)); // 2
console.log(powerBin(1)); // 2
console.log(powerBin(2)); // 1
console.log(powerBin(3)); // 4
console.log(powerBin(4)); // 2
