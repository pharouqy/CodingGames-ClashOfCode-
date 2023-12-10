/*You're running a carpentry workshop and are now introducing a dynamic pricing strategy for custom orders of tables. The more tables a customer orders, the greater the discount they receive. Given that the price per table is $500, here's the pricing strategy:

- For 1 to 5 tables: No discount.
- For 6 to 10 tables: 5% discount applies to all tables in this range.
- For 11 to 20 tables: 10% discount applies to all tables in this range.
- For 21 tables or more: 15% discount applies to all tables in this range.
Write a function that calculates the average price of a table for a given order based on the dynamic pricing strategy. The return value should be rounded down, return No tables were sold if n <=0.

Discounts are cumulative within the same order, for example if you ordered 11 tables, you will pay 5*500 + 5*(500 - 500*5/100) + 1*(500-500*10/100)= 5325$
Entrée
Line 1 : An integer n referring as the number of tables being bought in the order.
Sortie
Line 1 : An integer referring as the average price of a table in the order or No tables were sold
Contraintes
Exemple
Entrée
2
Sortie
500
Entrée
17
Sortie
472
*/

function discount(amount) {
  let totalCost = 0;
  let totalTables = amount;

  if (amount <= 0) {
    return "No tables were sold";
  }

  for (const [d, x] of [
    [0, 5],
    [5, 5],
    [10, 10],
    [15, 100000],
  ]) {
    if (totalTables === 0) break;

    const min_x = Math.min(x, totalTables);
    totalCost += min_x * (500 - Math.floor((500 * d) / 100));
    totalTables -= min_x;
  }

  return Math.floor(totalCost / amount);
}

console.log(discount(2)); // 500
console.log(discount(17)); // 472
console.log(discount(0)); // No tables were sold
