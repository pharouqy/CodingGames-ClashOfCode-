/***Introduction**:
The "Manhattan Distance" is the distance between two points in an N dimensional space. In simple terms, it is the sum of absolute differences between the measures in all dimensions of two points.

2D Example:
Point1: (x1, y1) Point2: (x2, y2) Manhattan Distance: |x1-x2| + |y1-y2|;

3D Example:
Point1: (x1, y1, z1) Point2: (x2, y2, z2) Manhattan Distance: |x1-x2| + |y1-y2| + |z1-z2|

**Challenge**:
Given two points A and B, calculate the Manhattan Distance between them.
Entrée
Line 1 : N an integer, the number of dimensions.
Line 2 : N integers, the coordinate of point A.
Line 3 : N integers, the coordinate of point B.
Sortie
An integer answer, the manhattan distance between A and B.
Contraintes
1 ≤ N ≤ 10
-1000 ≤ coordinates ≤ 1000
Exemple
Entrée
2
0 0
2 2
Sortie
4*/

function dismensionelDistance(dimension, ...args) {
  let result = 0;
  for (let i = 0; i < dimension; i++) {
    for (let j = 1; j < args.length; j++) {
      result += Math.abs(args[j][i] - args[j - 1][i]);
    }
  }
  return result;
}

console.log(dismensionelDistance(2, [0, 0], [2, 2])); // 4
console.log(dismensionelDistance(2, [5, 3], [7, 1])); // 4
console.log(dismensionelDistance(3, [1, 2, 3], [4, 5, 6], [7, 8, 9])); // 18
console.log(
  dismensionelDistance(
    4,
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  )
); // 48
