/*Almost all of the words contain vowels. The letters which are considered to be vowels (in English) are a,e,i,o,u.
Display the total number of vowels present at odd indexes in the given string.
Entrée
A string
Sortie
The count of total number of vowels present in the given string at odd indexes.
Contraintes
Exemple
Entrée
hello world !!
Sortie
2*/

function count_string_at_odd(string) {
  const array = string.split("");
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < 5; j++) {
      if (array[i].toLowerCase() === vowels[j] && i % 2 !== 0) {
        count++;
      }
    }
  }
  return count;
}

console.log(count_string_at_odd("hello world !!")); // 2
console.log(count_string_at_odd("hello")); // 1
console.log(count_string_at_odd("Only its stones will remain in the river.")); // 6