/*Given n strings. Count the number of strings which have a prefix x
Entrée
Line 1: A string x which is the prefix
Line 2: n Number of strings
Next n Lines: y
Sortie
Line 1: The number of strings in y which have a prefix as x
Contraintes
1 <= length of x <= 10
1 <= n <= 10
1 <= length of y <= 20
Exemple
Entrée
th
1
there
Sortie
1*/

function prefix(sentences, word) {
  const array= sentences.split(" ");
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].substring(0, word.length).includes(word)) {
      count++;
    }
  }
  return count;
}

console.log(prefix("there", "th")) // 1
console.log(prefix("there this that", "th")) // 3
console.log(prefix("farouk farid farah", "far")) // 3