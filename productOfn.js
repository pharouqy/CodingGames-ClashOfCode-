/*Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
01 Test 1
Entrée
Sortie attendue
1
1
02 Test 2
Entrée
Sortie attendue
10
12345678910123456789101234567891012345678910123456789101234567891012345678910123456789101234567891012345678910
03 Test 3
Entrée
Sortie attendue
12
123456789101112123456789101112123456789101112123456789101112123456789101112123456789101112123456789101112123456789101112123456789101112123456789101112123456789101112123456789101112
04 Test 4
Entrée
Sortie attendue
6
123456123456123456123456123456123456*/

function productOfn(n) {
  const array = [];
  for (let i = n; i > 0; i--) {
    array.push(i);
  }
  return array.reverse("").join("").repeat(n);
}

console.log(productOfn(1)); // 1
console.log(productOfn(10)); // 12345678910123456789101234567891012345678910123456789101234567891012345678910123456789101234567891012345678910