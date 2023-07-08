/*Sam is playing with a pack of cards with digits on each of them. He picked some of them and placed them on the floor, forming a non-negative integer n.

Also, Sam picked one more card x. He can insert this card anywhere in the number n (Including beginning and end of n). His goal is to find the largest non-negative integer he can form with after this operation.

As a friend of Sam, you decided to take on this task and help him.

Example Explanation:
Given n = 73737 and x = 7. It can be shown that 773737 is the most optimal solution.
Entrée
Line 1: s, denoting the length of n.
Line 2: x, denoting the digit Sam picked.
Line 3: n, denoting the non-negative integer.
Sortie
Output the maximum non-negative integer that can be obtained.
Contraintes
1 <= s <= 1000
x ∈ { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 }
It is guaranteed that the number n does not contain leading zeros.
Exemple
Entrée
5
7
73737
Sortie
773737*/

function cards(x, n) {
  const array = n.toString();
  let index = 0;
  if (x < parseInt(array[0])) {
    index = 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (x <= parseInt(array[i])) {
        index = i + 1;
        break;
      }
    }
  }
  let result = array.slice(0, index) + x.toString() + array.slice(index);

  return parseInt(result);
}

console.log(cards(7, 73737)); // 773737
console.log(cards(9, 4587691)); // 45876991
