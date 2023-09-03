/*You must print true (or false) if you have enough paint to cover the whole inner surface of the house.
The paint stock is Q in liters.
There are N rooms in the house.
We'll' assume that 1L of paint will cover 5m².
In each room, walls, floor and ceiling must be painted (with one layer).
Don't mind about doors and windows, paint them all!
Entrée
Line1 : The paint stock in liters Q
Line2 : The number of rooms to be painted N
N next lines : X, Y, Z are the room dimensions in meters
Sortie
true if you have enough paint to cover the whole inner surface, false if not.
Contraintes
N >= 0
X, Y, Z <= 9
Exemple
Entrée
10
2
3 4 3
2 4 2
Sortie
false*/

function enoughPaintStock(paint, rooms, dimensions) {
  let totalPainting = 0;
  for (let i = 0; i < rooms; i++) {
    let room =
      2 *
      (dimensions[i][0] * dimensions[i][1] +
        dimensions[i][0] * dimensions[i][2] +
        dimensions[i][1] * dimensions[i][2]);
    totalPainting += room / 5;
  }
  return totalPainting < paint ? "true" : "false";
}

console.log(
  enoughPaintStock(10, 2, [
    [3, 4, 3],
    [2, 4, 2],
  ])
); // flase

console.log(
  enoughPaintStock(100, 2, [
    [3, 4, 3],
    [2, 4, 2],
  ])
); // true
