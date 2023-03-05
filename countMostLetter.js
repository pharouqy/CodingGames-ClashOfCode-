// Dans une chaîne de caractères ne contenant que des lettres minuscules et des espaces, combien
//  y a-t-il d’occurrences de la lettre la plus fréquente ?
// ENTRÉE :
// Une chaîne de caractères words.
// SORTIE :
// Un entier pour le nombre d'occurrences de la lettre la plus utilisée dans words.
// EXEMPLE :
// Entrée
// always choose a lazy person to do a difficult job
// Sortie
// 6
// 'o' est la lettre la plus utilisée.

function countMostLetter(sentence) {
  sentence = sentence.replace(/ /g, "");
  let set = {};
  let max = 0;
  for (let i = 0; i < sentence.length; i++) {
    set[sentence[i]] = set[sentence[i]] ? set[sentence[i]] + 1 : 1;
  }
  for ([key, value] of Object.entries(set)) {
    console.log([key, value]);
    if (max < value) {
      max = value;
    }
  }
  return max;
}

console.log(
  countMostLetter("always choose a lazy person to do a difficult job")
); // 6
console.log(countMostLetter("woods")); // 2
console.log(countMostLetter("wooly woods")); // 4
console.log(countMostLetter("aaaatttiix")); // 4
console.log(countMostLetter("a")); // 1
console.log(countMostLetter("abbb")); // 3
console.log(countMostLetter("abab")); // 2
