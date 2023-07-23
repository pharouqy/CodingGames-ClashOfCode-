/*Three numbers a, b, and c are shown on the first line, separated by a space.
The second line shows a single number d.
Between a, b and c, you can place either +, - , * or / to create a formula.
If you put + or - or * or / between a, b and c, the total number of expressions you can create is 16.
Count how many of those expressions result in the answer d.

If there is one, output the formula.
If there was not, output -1.
If there is more than one, output the number of expressions.

Example 1:
3 2 1
5

In the case of the question
3*2-1 and 3+2*1, the two equations are 5. So the answer is 2, which is the number of equations that are correct.

Example 2:
1 1 1
3

In the case of the problem
only 1+1+1 is 3, so the answer is 1+1+1.

Example 3:
10 5 1
1000

The answer is not 1000 no matter how you formulate the equation. Therefore, the answer is -1.
Entrée
Line 1: Three space separated integers a and b and c
Line 2: An integer d
Sortie
If you can produce only one equation whose correct answer is d, output that equation.
If you can create more than one equation whose correct answer is d, output the number of equations whose correct answer is d.
If none of the formulas has the correct answer d, output -1.
Contraintes
0 <= a <= 10
0 <= b <= 10
0 <= c <= 10
-100 < d <= 1000
The result of division allows for a decimal point, but the decimal point in the final calculation result is truncated.
Exemple
Entrée
1 2 3
6
Sortie
2*/

function expressionCalculate(a, b, c, d) {
  const operators = ["+", "-", "*", "/"];
  let expression = null;
  let count = 0;
  for (let operator1 of operators) {
    for (let operator2 of operators) {
      try {
        let result = eval(`${a} ${operator1} ${b} ${operator2} ${c}`);
        if (result === d) {
          expression = `${a} ${operator1} ${b} ${operator2} ${c}`;
          count++;
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  if (count === 0) {
    return -1;
  } else if (count === 1) {
    return expression;
  } else {
    return count;
  }
}

console.log(expressionCalculate(3, 2, 1, 5)); // 3
console.log(expressionCalculate(7, 5, 3, 12)); // -1
console.log(expressionCalculate(3, 2, 1, 6)); // 3
console.log(expressionCalculate(1, 1, 1, 3)); // 1 + 1 + 1
console.log(expressionCalculate(10, 20, 11, 50)); // -1
console.log(expressionCalculate(2, 9, 1, 10)); // 2 + 9 - 1
console.log(expressionCalculate(10, 5, 1, 1000)); // -1
