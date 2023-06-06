/*Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
01 Test 1
Entrée
Sortie attendue
iopuD ijLyROjhgWzieO LLuiugkj apeEhH
HELLOWORLD
02 Test 2
Entrée
Sortie attendue
zieerfJIOzP JLzerM
MLJPOIJ
03 Test 3
Entrée
Sortie attendue
ze rzetyzrWONhrtrzsKTNOryyrtyrhfDzr rezrI
IDONTKNOW
04 Test 4
Entrée
Sortie attendue
zjoroksfls kzrizj
...*/

function pickUpLetters(string) {
  const array = string.split("");
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (/[A-Z]/g.test(array[i])) {
      result.push(array[i]);
    }
  }
  return result.length ? result.reverse().join("") : "...";
}

console.log(pickUpLetters("iopuD ijLyROjhgWzieO LLuiugkj apeEhH")); // HELLOWORLD
console.log(pickUpLetters("zieerfJIOzP JLzerM")); // MLJPOIJ
console.log(pickUpLetters("ze rzetyzrWONhrtrzsKTNOryyrtyrhfDzr rezrI")); // IDONTKNOW
console.log(pickUpLetters("zjoroksfls kzrizj")); // ...
