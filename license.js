/*For a research you need to discover how many unique licence plates can be made. Each country has its own way of building a licence plate, with 2 letters indicating where letters and numbers can be placed.
L - Letter (A-Z, uppercase only)
D - Digit (0-9)
Entrée
Line 1: An string s for the sequence of letters/digits
Sortie
Number of possibilities for the license plate
Contraintes
Exemple
Entrée
LLDLD
Sortie
1757600*/

function license(string) {
  let product = 1;
  const array = string.split("");
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "L") {
      product *= 26;
    } else {
      product *= 10;
    }
  }
  return product;
}

console.log(license("LLDLD")); // 1757600
console.log(license("LLDLDDDLLLDD")); // 308915776000000
console.log(license("LLDLDDLDLDLDLDLDLD")); // 5.429503678976e+21
console.log(license("LLDLDLDLDLLDLD")); // 208827064576000000
