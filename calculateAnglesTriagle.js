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

function calculateAnglesTriagle(a, b) {
  return 180 - (a + b);
}

console.log(calculateAnglesTriagle(75, 80)); // 25
console.log(calculateAnglesTriagle(60, 60)); // 60
console.log(calculateAnglesTriagle(100, 20)); // 60
console.log(calculateAnglesTriagle(12, 50)); // 118
