/*Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
01 Test 1
Entrée
Sortie attendue
1234567890
(123) 456-7890
02 Test 2
Entrée
Sortie attendue
1111111111
(111) 111-1111
03 Test 3
Entrée
Sortie attendue
1211111111
(121) 111-1111
04 Test 4
Entrée
Sortie attendue
9999999999
(999) 999-9999*/

function phoneNumber(string) {
  const indicatif = "(" + string.slice(0, 3) + ")";
  const numberPhone = string.slice(3, 6) + "-" + string.slice(6);
  return indicatif + " " + numberPhone;
}

console.log(phoneNumber("1234567890")); // (123) 456-7890
console.log(phoneNumber("1111111111")); // (111) 111-1111
console.log(phoneNumber("1211111111")); // (121) 111-1111
console.log(phoneNumber("9999999999")); // (999) 999-9999
console.log(phoneNumber("0791645773")); // (079) 164-5773
