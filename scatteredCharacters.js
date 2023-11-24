/*Extra characters are scattered in the sentences, among them: ' ? ! / , . : ) %
Your task is to count how many such characters are in a sentence.

! Space is not extra character !
Entrée
One sentence
Sortie
One number - quantity of extra characters
Contraintes
3 <= lengh of sentence <= 100
Exemple
Entrée
Where's your motivation?
Sortie
2*/

function scatteredCharacters(sentence) {
  if (sentence.match(/['?!/,.:) %]/g)) {
    return sentence.match(/['?!/,.:]/g).length;
  } else {
    return 0;
  }
}

console.log(scatteredCharacters("Where's your motivation?")); // 2
console.log(scatteredCharacters("Extra characters are scattered in the sentences, among them: ' ? ! / , . : ) %")); // 9
