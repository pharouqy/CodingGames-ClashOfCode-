/*You must count all the letter in the sentence that are even in ASCII and output it. Other characters that are not alphabetical are to be ignored
Entrée
Line 1: A string with a sentence from where the even ASCII letter will be count.
Sortie
Line 1 : The count of even ASCII letter the sentence has.
Contraintes
sentence length range between 1 and 100.
Exemple
Entrée
aC
Sortie
0*/

function countAtASCII(string) {
  const array = string.replace(" ", "").split("");

  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].charCodeAt() % 2 == 0 && array != " ") {
      count++;
    }
  }
  return count;
}

console.log(countAtASCII("farouk est un developpeur web")); // 14
console.log(countAtASCII("le code c'est fun !!!")); // 8
