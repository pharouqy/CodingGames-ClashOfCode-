/*You must output the count (case-insensitive) of all English vowels (A, E, I, O, U) in a string.
Entrée
Line 1: A string s for you to operate on.
Sortie
Line 1: A count of each vowel in alphabetical order separated by a space.
Contraintes
length of s ≤ 64
Exemple
Entrée
ABCDEFGHIJKLMNOPQRSTUVWXYZ
Sortie
1 1 1 1 1*/

function countVowels(string) {
  const array = string.split("");
  const result = [0, 0, 0, 0, 0];
  for (let i = 0; i < array.length; i++) {
    if (array[i].toLocaleLowerCase() === "a") {
      result[0]++;
    } else if (array[i].toLocaleLowerCase() === "e") {
      result[1]++;
    } else if (array[i].toLocaleLowerCase() === "i") {
      result[2]++;
    } else if (array[i].toLocaleLowerCase() === "o") {
      result[3]++;
    } else if (array[i].toLocaleLowerCase() === "u") {
      result[4]++;
    }
  }

  return result.join(" ");
}

console.log(countVowels("AZERTYUIOPMLKJHGFDSQWXCVBN")); // 1 1 1 1 1
console.log(countVowels("alfporMRLOZIRHEYDdkfdfl")); // 1 1 1 2 0
console.log(
  countVowels(
    "fAROUK EST bIEN pARTIS POUR rEUSSIR SA CARRIERE DE DEVLOPEPUr wEb"
  )
); // 4 9 4 3 4
console.log(countVowels("aaaaaEEEEiiiiiOOOOOuuuuuu")); // 5 4 5 5 6
