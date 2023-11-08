/*Given a sentence, reverse the order of the words in it. Your program should be case-sensitive. A word is considered to be any sequence of characters separated by a space. Assume the input will not have leading or trailing spaces, and words are always separated by a single space.
Entrée
A single string sentence representing the sentence.
Sortie
A single string that contains the words from the original string in reverse order.
Contraintes
All characters in the sentence will be printable ASCII characters.
1 ≤ length of sentence ≤ 100
Exemple
Entrée
Hello World
Sortie
World Hello*/

function reverseWord(sentence) {
  const array = sentence.split(" ");
  const reverse = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverse.push(array[i]);
  }

  return reverse.join(" ");
}

console.log(reverseWord("World Hello")); // Hello World
console.log(reverseWord("Hello Farouk Younsi")); // Younsi Farouk Hello
console.log(reverseWord("Je suis un developpeur !!!")); // \!!! developpeur un suis Je
console.log(reverseWord("Merci pour votre soutien indéfectible")); // indéfectible soutien votre pour Merci
