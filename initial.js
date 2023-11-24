/*Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
01 Test 1
Entrée
Sortie attendue
Marcus Aurelius
M.A.
02 Test 2
Entrée
Sortie attendue
Tupac Amaru Shakur
T.A.S.
03 Test 3
Entrée
Sortie attendue
rick sanchez
R.S.
04 Test 4
Entrée
Sortie attendue
Professor Richard Dawkins
Prof.R.D.
05 Test 5
Entrée
Sortie attendue
Dr. Carl Sagan
Dr.C.S.*/

function initial(string) {
  let result = "";
  const array = string.split(" ");
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "Professor") {
      result += "Prof.";
    } else if (array[i] === "Dr.") {
      result += "Dr.";
    } else {
      result += array[i].substring(0, 1).concat(".").toUpperCase();
    }
  }
  return result;
}

console.log(initial("Marcus Aurelius")); // M.A.
console.log(initial("Tupac Amaru Shakur")); // T.A.S.
console.log(initial("rick sanchez")); // R.S.
console.log(initial("Professor Richard Dawkins")); // Prof.R.D.
console.log(initial("Dr. Carl Sagan")); // Dr.C.S
