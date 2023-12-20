/*Le programme :
À partir de 2 angles d'un triangle, calculer le dernier angle.

ENTRÉE :
Une seule ligne contenant les 2 angles a et b séparés par un espace.

SORTIE :
Une seule ligne contenant le dernier angle c.

CONTRAINTES :
1≤a<180
1≤b<180

EXEMPLE :
Entrée
1 1
Sortie
178*/

function lastAngle(a, b) {
  return 180 - (a + b);
}

console.log(lastAngle(1, 1)); // 178
console.log(lastAngle(45, 45)); // 90
