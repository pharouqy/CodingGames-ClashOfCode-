/*Give the number of letter's couples of the input sentence.

Note: We count 1 couple every two occurrences of the same letter, regardless of its case or position.
Entrée
Line 1 : a string sentence.
Sortie
Line 1 : The number of letter's couples found in the input sentence.
Contraintes
0 ≤ length of sentence ≤ 100
Exemple
Entrée
aabbbb
Sortie
3*/

function numberDoubleLetters(string) {
  const array = string.toLowerCase().replace(/\s+/g, "").split("");
  const obj = {};
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    obj[array[i]] = obj[array[i]] ? obj[array[i]] + 1 : 1;
  }
  console.log(obj);
  for (let [key, value] of Object.entries(obj)) {
    if (value === 2) {
      count++;
    } else if (value > 2) {
      if (value % 2 === 0) {
        count += 2;
      } else {
        count++;
      }
    }
  }
  return count;
}

console.log(numberDoubleLetters("aabbbb")); // 3
console.log(numberDoubleLetters("hApPy new yEar !")); // 4
console.log(numberDoubleLetters("hello world")); // 2
console.log(numberDoubleLetters("here")); // 1
