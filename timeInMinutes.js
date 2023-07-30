/*Votre programme doit afficher le nombre de minutes de la durée exprimée au format hh:mm.

ENTRÉE :
Ligne 1 : duration une chaîne de caractères au format hh:mm.

SORTIE :
Ligne 1 : le nombre de minutes.

EXEMPLE :
Entrée
13:05
Sortie
785*/

function timeInMinutes(time) {
  let minutes = time.split(":");
  return Number(minutes[0]) * 60 + Number(minutes[1]);
}

console.log(timeInMinutes("13:05")); // 785
console.log(timeInMinutes("23:35")); // 1415
