/*Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
01 Test 1
Entrée
Sortie attendue
0.0.0
MAJOR
1.0.0
02 Test 2
Entrée
Sortie attendue
1.0.0
MINOR
1.1.0
03 Test 3
Entrée
Sortie attendue
2.1.2
PATCH
2.1.3
04 Test 4
Entrée
Sortie attendue
999.999.999
MINOR
999.1000.0*/

function numberAdd(string, param) {
  const array = string.split(".").map((ele) => {
    return (ele = parseInt(ele));
  });
  console.log(array);
  switch (param) {
    case "MAJOR":
      array[0] += 1;
      array[1] = 0;
      array[2] = 0;
      break;

    case "MINOR":
      array[1] += 1;
      array[2] = 0;
      break;

    case "PATCH":
      array[2] += 1;
      break;

    default:
      break;
  }
  return array.join(".");
}

console.log(numberAdd("0.0.0", "MAJOR")); // 1.0.0
console.log(numberAdd("1.0.0", "MINOR")); // 1.1.0
console.log(numberAdd("2.1.2", "PATCH")); // 2.1.3
console.log(numberAdd("999.999.999", "MINOR")); // 999.1000.0
console.log(numberAdd("555.999.999", "MAJOR")); // 556.0.0