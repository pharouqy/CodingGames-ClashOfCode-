/*Short statement : From the two sides adjacent to a right angle in a right triangle, determine the size of the third side.
Remember: a² + b² = c².

Long statement : Perched on his tower, our friend Pythagoras looked down and asked: "What is the distance "c" between that sheep in the distance and me?
In order to determine this distance, Pythagoras knew in advance the distance "a" between the sheep and the tower, and the height "b" of the tower.
Assuming that the tower was perpendicular to the ground, he came to the conclusion that a² + b² = c².
Help our friend determine the distance from the sheep.
Entrée
First line : a float a for the distance between the bottom of the tower and the sheep
Second line : a float b for the height of the tower
Sortie
First line : the distance between the top of the tower and the sheep rounded to two decimal places
Contraintes
1 ≤ a, b≤ 15000
Exemple
Entrée
1.00
1.00
Sortie
1.41*/

function Pythagoras(a, b) {
  const distance = Math.pow(a, 2) + Math.pow(b, 2);
  return Math.sqrt(distance);
}

console.log(Pythagoras(1, 1)); // 1.41
console.log(Pythagoras(2, 5)); // 5.38
console.log(Pythagoras(7, 5)); // 5.60
console.log(Pythagoras(9, 4)); // 9.84
