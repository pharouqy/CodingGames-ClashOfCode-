/*Your entire fortune is in your investment-account ("your account").

Every year on your birthday:
(a) You get the annualRateOfReturn% of your balance added to your account.
(b) Then your "Genie in a Bottle"** puts $annualGenieMoney into your account.

Today is your birthday; you are turning yourAge.
You have $moneyNow in your account now, after (a) and (b) described above.
How old will you be when you become a millionaire?
** or if you prefer: Your benefactor, your family, your Trust-Fund, your annual work bonus, your tax refund; or you sell your crop, break open the piggy bank, or dig up the coffee can, etc
Entrée
Line 1: A decimal moneyNow, representing the money you have now
Line 2: A decimal annualRateOfReturn such as 6.5, meaning 6.5%
Line 3: A decimal annualGenieMoney
Line 4: An integer yourAge
Sortie
Line 1: An integer, your age when you have at least $1 million in your account
Contraintes
0 ≤ moneyNow < 1,000,000
0 ≤ annualRateOfReturn ≤ 20.0
0 ≤ annualGenieMoney ≤ 20,000
0 ≤ yourAge ≤ 65
Exemple
Entrée
19900
16.6
0
30
Sortie
56*/

function millionaire(moneyNow, annualRateOfReturn, annualGenieMoney, yourAge) {
  while (moneyNow < 1000000) {
    moneyNow += (annualRateOfReturn / 100) * moneyNow + annualGenieMoney;
    yourAge++;
  }
  return yourAge;
}

console.log(millionaire(19900, 16.6, 0, 30)) // 56
console.log(millionaire(12300, 18.3, 100, 38)) // 64