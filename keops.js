/*Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
01 Test 1
Entrée
Sortie attendue
5 3
*
**
###
**
*
02 Test 2
Entrée
Sortie attendue
7 4
*
**
***
####
***
**
*
03 Test 3
Entrée
Sortie attendue
5 2
false
04 Test 4
Entrée
Sortie attendue
9 1
false*/

function keops(coordonnees) {
  const array = coordonnees.split(" ");
  if ((parseInt(array[0]) - 1) / 2 + 1 === parseInt(array[1])) {
    for (let i = 1; i <= (parseInt(array[0]) - 1) / 2; i++) {
      console.log("*".repeat(i));
    }
    if (array[0] !== array[1]) {
      console.log("#".repeat(parseInt(array[1])));
    } else {
      console.log("*".repeat(parseInt(array[1])));
    }
    for (let i = (parseInt(array[0]) - 1) / 2; i >= 1; i--) {
      console.log("*".repeat(i));
    }
  } else {
    console.log("false");
  }
  return;
}

keops("5 3");
keops("7 4");
keops("9 5");
keops("11 6");
keops("13 7");
keops("1 1");
keops("5 2");
keops("9 1");
