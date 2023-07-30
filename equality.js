/*You are given an equality of the form a operator b = c. Solve the problem by replacing the '?' by the correct operator out of +, -, *, or /.
Entrée
Line 1 : A string representing an equality where an operator symbol has been replaced with ?
Sortie
Line 1: Missing operator
Contraintes
a, b and c are all positive integers (represented as string)
Exemple
Entrée
2 ? 9 = 11
Sortie
+*/

function equality(string) {
  const arthmetique = ["+", "-", "*", "/"];
  const expression = string.split(" ");
  for (let i = 0; i < arthmetique.length; i++) {
    if (
      eval(`${expression[0]} ${arthmetique[i]} ${expression[2]}`) ===
      parseInt(expression[4])
    ) {
      return arthmetique[i];
    }
  }
}

console.log(equality("2 ? 9 = 11")); // +
console.log(equality("7 ? 2 = 14")); // *
console.log(equality("9 ? 3 = 3")); // /
console.log(equality("8 ? 1 = 7")); // -
