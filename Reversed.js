// Given a number N, print N minus N where all digits have been reversed.
// 2 -> (reversed) 2 -> 2-2 = 0
// 57-> (reversed) 75 -> 57-75 = -18

function reversed(number) {
  let reverse = number.toString().split("").reverse().join("");
  return number - reverse;
}

console.log(reversed(7)); // 0
console.log(reversed(13)); // -18
console.log(reversed(1751)); // 180
console.log(reversed(9030)); // 8721