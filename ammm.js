/*A normal sentence is clear, but Am A Ammmmmmmmmm stuttering Ammmmmmmm sentence Amm is Ammmm like Ammmm that !

To form a stuttering sentence, each word is preceded by A plus a number of m's equal to the length of the word plus a space character. Digits and punctuation marks have no effect. This means that, for every word, the length does not take into account the non-alphabetic characters (0 to 9, ? \ / - + * ; [ ] ).

If a "word" consists of non-alphabetic characters only (e.g. "3579"), the "word" is output without any modification.
Entrée
Line 1: A normal sentence
Sortie
Line 1: A stuttering sentence
Contraintes
Exemple
Entrée
Hello
Sortie
Ammmmm Hello*/

function ammm(string) {
  const array = string.split(" ");
  result = "";
  for (let i = 0; i < array.length; i++) {
    array[i].replace(/[0-9?\/+\-*;[\]]/g, "");
    if (i > 0) {
      result += " A" + "m".repeat(array[i].length) + " " + array[i];
    } else {
      result += "A" + "m".repeat(array[i].length) + " " + array[i];
    }
  }
  return result;
}

console.log(ammm("Hello?")); // Ammmmm Hello
console.log(ammm("Hello World ?")); // Ammmmm Hello Ammmmm World Am ?
console.log(ammm("Farouk is a web developper !!!")); // Ammmmmm Farouk Amm is Am a Ammm web Ammmmmmmmmm developper Ammm !!!
console.log(ammm("1 + 1 = 2")); // Am 1 Am + Am 1 Am = Am 2