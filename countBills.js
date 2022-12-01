/*You are given the set of whole euro bills and coins:
€500, €200, €100, €50, €20, €10, €5, €2, €1
and an integer sum.
Your task is to find out how to pay the sum with the least number of coins/bills. For each bill/coin in the euro set, print the number of times you need this bill/coin on its own line.
Entrée
Line 1: an integer sum.
Sortie
Line 1: the number of €500 bills needed.
Line 2: the number of €200 bills needed.
Line 3: the number of €100 bills needed.
Line 4: the number of €50 bills needed.
Line 5: the number of €20 bills needed.
Line 6: the number of €10 bills needed.
Line 7: the number of €5 bills needed.
Line 8: the number of €2 coins needed.
Line 9: the number of €1 coins needed.
Contraintes
0 ≤ sum ≤ 2^31-1.
Exemple
Entrée
123
Sortie
0
0
1
0
1
0
0
1
1*/

function countBills(amount) {
  let numbers = {
    500: 0,
    200: 0,
    100: 0,
    50: 0,
    20: 0,
    10: 0,
    5: 0,
    2: 0,
    1: 0,
  };
  while (amount >= 1) {
    if (amount >= 500) {
      numbers["500"]++;
      amount -= 500;
    } else if (amount >= 200) {
      numbers["200"]++;
      amount -= 200;
    } else if (amount >= 100) {
      numbers["100"]++;
      amount -= 100;
    } else if (amount >= 50) {
      numbers["50"]++;
      amount -= 50;
    } else if (amount >= 20) {
      numbers["20"]++;
      amount -= 20;
    } else if (amount >= 10) {
      numbers["10"]++;
      amount -= 10;
    } else if (amount >= 5) {
      numbers["5"]++;
      amount -= 5;
    } else if (amount >= 2) {
      numbers["2"]++;
      amount -= 2;
    } else if (amount >= 1) {
      numbers["1"]++;
      amount -= 1;
    }
  }
  for (const [key, value] of Object.entries(numbers)) {
    console.log(`${value}`);
  }
  return numbers;
}

console.log(countBills(123)); // {'1': 1,'2': 1,'5': 0, '10': 0,'20': 1,'50': 0, '100': 1,'200': 0,'500': 0};
