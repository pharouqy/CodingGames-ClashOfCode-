// Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
// 01 Test 1
// Entrée
// Sortie attendue
// 9
// 1 2 3 4 5 6 7 8 9
// 987654321
// 02 Test 2
// Entrée
// Sortie attendue
// 6
// 3 8 2 9 7 5
// 987532
// 03 Test 3
// Entrée
// Sortie attendue
// 6
// 7 9 7 5 7 2
// 977752
// 04 Test 4
// Entrée
// Sortie attendue
// 8
// 4 8 7 7 9 0 0 2
// 98774200
// 05 Test 5
// Entrée
// Sortie attendue
// 4
// 0 0 0 0
// 0

function elaborate(arr) {
  let reversed = arr.sort().reverse().join("");
  if (reversed.split("").every((e) => parseInt(e) === 0)) {
    return 0;
  } else {
    return reversed;
  }
}

console.log(elaborate([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 987654321
console.log(elaborate([3, 8, 2, 9, 7, 5])); // 987532
console.log(elaborate([7, 9, 7, 5, 7, 2])); // 977752
console.log(elaborate([4, 8, 7, 7, 9, 0, 0, 2])); // 98774200
console.log(elaborate([0, 0, 0, 0])); // 0
console.log(elaborate([1, 5, 5, 6, 4, 8, 8, 7, 0])); // 887655410
