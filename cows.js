// Given a cows number your job is to decide if next n numbers are Valid or Invalid. The number is
// Invalid if there is the same digit in cows number and the given number on the same position (with the same index).
// cows variable name comes from Bulls and Cows game where you can decrease the set of possible
// solutions when you know the number have all cows.

// Entrée
// Line 1: An integer n for the number of the numbers to be checked.
// Line 2: The string with number cows with all cows.
// Next n lines: Strings of digits to be compared with the cows.

// n lines: Valid or Invalid statement
// The input is valid if cows and the input does not have the same digit in the same place eg.:
// 123 and 312 are Valid
// 123 and 321 are Invalid

function cows(n, arr) {
  for (let i = 0; i < arr.length; i++) {
    let isValid = true;
    for (let j = 0; j < n.toString().length; j++) {
      if (n.toString()[j] === arr[i].toString()[j]) {
        isValid = false;
      }
    }
    console.log(isValid ? "Valid" : "Invalid");
  }
}

cows(123, [231, 231, 321, 123, 231]);
cows(3467985, [5879643, 3467985, 7865439, 8743956, 3456789]);
