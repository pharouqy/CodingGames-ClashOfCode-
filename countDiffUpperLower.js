// While Ignoring any special chars and spaces, output the absolute difference between
// uppercase and lowercase character count.
// A string s of one line with almost any kind of printable ASCII characters.
// s does not contain any whitespace characters except for spaces. It may contain uppercase and lowercase
// letters as well as digits and special chars.
// s is not longer than 1000 chars.

function countDiffUpperLower(s) {
  const r = s.replace(/ /g, "");
  let countUpper = (countLower = 0);
  for (let i = 0; i < r.length; i++) {
    if (r[i] === r[i].toUpperCase() && /[A-Z]/g.test(r[i])) {
      countUpper++;
    } else if (r[i] === r[i].toLowerCase() && /[a-z]/g.test(r[i])) {
      countLower++;
    }
  }
  return Math.abs(countUpper - countLower);
}

console.log(countDiffUpperLower("Hello there")); // 8
console.log(countDiffUpperLower("Hello There!")); // 6
console.log(
  countDiffUpperLower(
    "Hello, I am a test case with more letters in any KIND. However, punctuation is not optional. It's necessary!"
  )
); // 68
console.log(countDiffUpperLower("AAAaaa:::")); // 0