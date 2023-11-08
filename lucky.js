/*A lucky number is a 10-based number, which has at least a 6 or an 8 in its digits. However, if it has 6 and 8 at the same time, then the number is NOT lucky. For example, 16 , 38, 666 are lucky numbers, while 234 , 687 are not.

Output Lucky if number is a lucky number or else output Not Lucky
Entrée
A number
Sortie
Lucky or Not Lucky
Contraintes
0 < number < 1 000 000
Exemple
Entrée
16
Sortie
Lucky*/

function lucky(number) {
  if (number.toString().includes("6") && number.toString().includes("8")) {
    return "Not Lucky";
  } else if (
    number.toString().includes("6") ||
    number.toString().includes("8")
  ) {
    return "Lucky";
  } else {
    return "Not Lucky";
  }
}

console.log(lucky(16)); // Lucky
console.log(lucky(687)); // Not Lucky
console.log(lucky(666)); // Lucky
console.log(lucky(123)); // Not Lucky
console.log(lucky(38)); // Lucky
