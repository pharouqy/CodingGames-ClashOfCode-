/*One line, a float num, followed by a space, followed by the text orderOfMagnitude
Sortie
One line, num times orderOfMagnitude
Contraintes
0.000 ≤ num ≤ 100.000
orderOfMagnitude can only be one of the following: "hundred", "thousand", "million"
The result will always be an integer
Exemple
Entrée
3.2 thousand
Sortie
3200*/

function convert(str) {
  const [number, string] = str.split(" ");
  if (string === "thousand") {
    return number * 1000;
  } else if (string === "hundred") {
    return number * 100;
  } else {
    return number * 1000000;
  }
}

console.log(convert("3.2 thousand"));
console.log(convert("3.322 hunderd"));
console.log(convert("825.2 million"));
console.log(convert("2000.2 hundred"));
