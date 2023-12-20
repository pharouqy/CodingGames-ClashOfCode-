/*You have to find out if the numbers GLaDOS gives you, mean that there is a cake or not.
You are given three numbers, n, t and c, n being the amount of cakes.
While t stands for how delicious the cake is, c stands for the amount of candles on it.

There is no cake with more that 14 candles on it. (It's just not possible in this universe)
And there is no cake being more delicious than grandma's cake (t=101)
And if a cake has negative/zero taste (t) OR candles (c), it simply is not a cake.
Entrée
First line: You are given an integer n.
Next n lines: You are given two space-separated integers t and c.
Sortie
n lines: With the appropriate text That's a cake! or GLaDOS you filthy liar!, second meaning that there is no cake.
Contraintes
0 < n ≤ 100
-1000≤ t ≤ 1000
-1000 ≤ c ≤ 1000
Exemple
Entrée
1
5 2
Sortie
That's a cake!*/

function checkCake(n, cakes) {
  const result = [];
  for (let i = 0; i < n; i++) {
    const [t, c] = cakes[i];
    if (c > 14 || t > 101 || t <= 0 || c <= 0) {
      result.push("GLaDOS you filthy liar!");
    } else {
      result.push("That's a cake!");
    }
  }
  return result;
}

console.log(checkCake(1, [[5, 2]])); // That's a cake!
console.log(checkCake(1, [[-5, 2]])); // GLaDOS you filthy liar!
console.log(
  checkCake(2, [
    [5, 0],
    [2, 6],
  ])
); // 'GLaDOS you filthy liar!', "That's a cake!"
console.log(checkCake(1, [[5, -2]])); // GLaDOS you filthy liar!
