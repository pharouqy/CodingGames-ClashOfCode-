/*Today is beautiful weather. Peter is walking to his favorite Tower in CodinCountry. He still has to walk x meters to reach the bottom of the tower, when his friend L, who is standing on top of the tower, spots him. Excited, to see his long lost friend, he tries to draw his attention and starts waving. The tower is unfortunately way too high, h meters above the ground to be exact. Output the distance d in meters (round down), from L's waving from the tower to Peter's eyes. L's waving is on the same level as Peter's eyes, when they are both standing on the ground.
Entrée
Line 1: Two integers x and h
Sortie
Line 1: One integer d (round down), describing the distance.
Contraintes
0 < x, h < 1000000
Exemple
Entrée
3 4
Sortie
5*/

function tower(x, h) {
  return Math.floor(Math.sqrt(x ** 2 + h ** 2));
}

console.log(tower(3, 4)); // 5
console.log(tower(10, 13)); // 16
console.log(tower(6, 9)); // 10
