/*Count the occurrences of each character and output the product of said occurrences.
ex(sample1): AABBCC
A is 2, B is 2, C is 2, so answer is 8(=2*2*2).
Entrée
S is given in one line.
S consists of alphanumeric characters.
Sortie
Output a single number of the product of them.
Contraintes
1 <= |S| <= 50
Exemple
Entrée
AABBCC
Sortie
8*/

function countOccurence(string) {
  let letters = {};
  let result = 1;
  for (let i = 0; i < string.length; i++) {
    letters[string[i]] = letters[string[i]] ? letters[string[i]] + 1 : 1;
  }
  for (let letter of Object.values(letters)) {
    result *= parseInt(letter);
  }
  return result;
}

console.log(countOccurence("AABBCC")); // 8
console.log(countOccurence("AIOUEIHHHDIUUEJDHJSK")); // 288
console.log(countOccurence("AAZUUIIKKKDOOOOSPPPMMMEOOELL")); // 5184
console.log(countOccurence("OOOOIELLLIIKKEHHEHHEGGGGDBBBWWVVXPPPPSSPSPMZDL?")); // 2654208
console.log(countOccurence("FFFFAAAROOOOOUUUUKKK")); // 720
