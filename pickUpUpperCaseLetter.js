/*You need to create a program that retrieves all the uppercase letters from a specific text input. However, if there are no uppercase letters found, the program should print the constant value None. Players must reverse engineer the code to find the original uppercase letters or determine that there are none.
Entrée
string
Sortie
string
Contraintes
Exemple
Entrée
abcdABCD
Sortie
ABCD*/

function pickUpUpperCaseLetter(sentence) {
  if (sentence.match(/[A-Z]/g)) {
    return sentence.match(/[A-Z]/g).join("");
  } else {
    return "None";
  }
}

console.log(pickUpUpperCaseLetter("abcdABCD")); // ABCD
console.log(pickUpUpperCaseLetter("abcd")); // None
console.log(
  pickUpUpperCaseLetter("ABCDklejklejfdDDFmpepkeporje87r8erMELROTPZO")
); // ABCDDDFMELROTPZO
