/*Welcome in this beautiful world!
You are a gaming character, and you have a lot of money! But you have also too much bronze coins: they take too much space in your pocket.
The solution ? Convert your bronze coins into gold and silver coins in a shop.

G = Gold
S = Silver
B = Bronze
1 G = 100 S
1 S = 100 B.

Example:
You give 204 B to a shop keeper.
He returns you 2 S and 4 B.
Entrée
G is the number of gold coins.
S is the number of silver coins.
B is the number of bronze coins.
Sortie
A string containing the number of G, S and B, after converting.
Example :
"1G 2S 35B"
Contraintes
    G >= 0
S >= 0
B >= 0
Exemple
Entrée
0
0
204
Sortie
0G 2S 4B

0G 785S 0B

664G 0S 0B

105G 125S 1078B

5483G 1650S 89121B*/

function convertMetalToBronze(gold, silver, bronze) {
  let G = (S = B = 0);
  if (gold >= 0 && silver >= 0 && bronze >= 0) {
    B = bronze - Math.floor(bronze / 100) * 100;
    S =
      Math.floor(silver + Math.floor(bronze / 100)) -
      Math.floor((silver + Math.floor(bronze / 100)) / 100) * 100;
    G = gold + Math.floor((silver + Math.floor(bronze / 100)) / 100);
  }
  return `${G}G ${S}S ${B}B`;
}

console.log(convertMetalToBronze(0, 0, 204)); // 0G 2S 4B
console.log(convertMetalToBronze(0, 785, 0)); // 7G 85S 0B
console.log(convertMetalToBronze(664, 0, 0)); // 664G 0S 0B
console.log(convertMetalToBronze(105, 125, 1078)); // 106G 35S 78B
console.log(convertMetalToBronze(5483, 1650, 89121)); // 5508G 41S 21B
