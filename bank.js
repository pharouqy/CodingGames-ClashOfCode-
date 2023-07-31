/*Jeff needs your help calculating his final balance after a series of deposits (D) and withdrawals (W) done to his bank account! He already has V in his bank account.
Entrée
Line 1: Two Integers V denoting his initial balance, and N denoting the amount of transactions he will make.
Next N lines: One String Transaction denoting if he's depositing (D) or withdrawing (W), along with an integer Amount denoting the amount he is handling in the transaction.
Sortie
Output the final balance in Jeff's bank account.
Contraintes
0=<V,N,Amount=<5000
Transaction = "W"||"D"
Exemple
Entrée
40 3
W 120
D 120
D 30
Sortie
70*/

function bank(balance, transaction) {
  for (let i = 0; i < transaction.length; i++) {
    const [name, amount] = transaction[i].split(" ");
    switch (name) {
      case "W":
        balance -= Number(amount);
        break;
      case "D":
        balance += Number(amount);
        break;
      default:
        break;
    }
  }
  return balance;
}

console.log(bank(40, ["W 120", "D 120", "D 30"])); // 70
console.log(bank(9000, ["W 1000", "D 500", "D 250", "W 500"])); // 8250
