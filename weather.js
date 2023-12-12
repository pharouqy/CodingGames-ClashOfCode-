/*To find the rainfall for a week
On Rainy days R, 4mm of rain falls
No rain falls on Sunny days S
Entrée
Line 1 a string containing 7 characters representing Weather forecast
Sortie
Write total rainfall
Integer
Contraintes
String contains 7 Capital letters R or S
Exemple
Entrée
RRRRRRR
Sortie
28*/

function weather(params) {
  let sum = 0;
  params.split("").forEach((element) => {
    element === "R" ? (sum += 4) : (sum += 0);
  });
  return sum;
}

console.log(weather("RRRRRRR")); // 28

