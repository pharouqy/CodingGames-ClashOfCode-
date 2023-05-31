/*you need to make a program that takes an int n and gives the fewest number of coins
possible to make that number
you have, pennies = 1, nickels = 5, dimes = 10, quarters = 25
Entrée
An int n for coins
Sortie
Fewest number of coins
Contraintes
0 < n
Exemple
Entrée
75
Sortie
3*/

function fewestCoins(number) {
  const coins = [25, 10, 5, 1];
  let count = 0;

  for (let i = 0; i < coins.length; i++) {
    count += Math.floor(number / coins[i]);
    number %= coins[i];
  }
  return count;
}

console.log(fewestCoins(75)); // 3
console.log(fewestCoins(875)); // 35
console.log(fewestCoins(965)); // 40
console.log(fewestCoins(7546868)); // 301879
