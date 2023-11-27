/*Output the (signed) size of the range [ N, 1000-N ]
Entrée
The integer N
Sortie
one integer
Contraintes
0 ≤ N ≤ 1000
Exemple
Entrée
15
Sortie
970*/

function signed(size) {
    return 1000 - 2 * size;
}

console.log(signed(15)); // 970
console.log(signed(0)); // 1000
console.log(signed(680)); // -360
