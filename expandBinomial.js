/*Timmy is not doing so well in math class and is having trouble multiplying binomials. Given the expression, expand the binomial(un-simplified)

Example:
Input:
(x+1)(x-1)

Output:
x*x + x*-1 + 1*x + 1*-1

Explanation: The first thing is x*x because its multiplying the first terms of the binomial.
The second thing is x*-1 because its multiplying the outer terms of the binomial.
The third thing is 1*x because its multiplying the inner terms of the binomial together.
The last thing is 1*-1 because its multiplying the last terms of the binomial together.
The order goes, first, outer, inner, last. It will always be multiplying from left to right.
Entrée
A binomial(eg."(x+2)(6-x)")
Sortie
Multiplied binomial. The order displayed should follow F.O.I.L.(first, outer, inner, last), multiplying from left to right. UNSIMPLIFIED
Contraintes
10 <= input length <= 96
Exemple
Entrée
(x+1)(x-1)
Sortie
x*x + x*-1 + 1*x + 1*-1*/

function expandBinomial(input) {
  let binomial = input.substring(1, input.length - 1).split(")(");
  let firstBinomial = binomial[0].split("+");
  let secondBinomial = binomial[1].split("-");
  let a = firstBinomial[0];
  let b = firstBinomial[1];
  let c = secondBinomial[0];
  let d = secondBinomial[1];
  let result =
    a +
    "*" +
    c +
    " + " +
    a +
    "*" +
    d +
    " + " +
    b +
    "*" +
    c +
    " + " +
    b +
    "*" +
    d;
  return result;
}

console.log(expandBinomial("(x+1)(x-1)")); // x*x + x*-1 + 1*x + 1*-1
