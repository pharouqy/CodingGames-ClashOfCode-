/*Bob has in his SockBox Multiple pairs of socks with n different colors .
the pairs are separated and distributed randomly on the box .
Bob can't see the colors of the socks because the room is dark and he's is in a hurry .
for a match of football he only need 2 socks with the same color .
given the number n of the different sock colors he have ....output the least amount of socks he should take out from the box so he could have at least 2 socks of the same color .
Entrée
n the total number of different colors of his all sock pairs in the box .
Sortie
the least number of socks he should extract so he could garantee that he have at least 2 socks of the same color .
Contraintes
Exemple
Entrée
2
Sortie
3*/

function SockBox(number) {
  return number + 1;
}

console.log(SockBox(2)); // 3
console.log(SockBox(5)); // 6
console.log(SockBox(55)); // 56
console.log(SockBox(151)); // 152
