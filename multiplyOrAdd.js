/*Initially output equals 0. Iterate through each number in the input and perform the following operation:
If the number is odd: Multiply it to output
If the number is even: Add it to the output
Entrée
Line 1: An integer count which represents the amount of given numbers.
Line 2: A list of integer numbers of length count seperated by space.
Sortie
Line 1: An integer output
Contraintes
0 < count <= 100
-10000 <= number <= 10000
-2147483648 < output < 2147483648
Exemple
Entrée
5
2 4 8 10 6
Sortie
30*/

function multiplyOrAdd(array) {
    let output = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
        output += array[i];
        } else {
        output *= array[i];
        }
    }
    return output;
}

console.log(multiplyOrAdd([2, 4, 8, 10, 6])); // 30
console.log(multiplyOrAdd([1, 2, 3, 4, 5])); // 120
console.log(multiplyOrAdd([1, 3, 5, 7, 9])); // 945
console.log(multiplyOrAdd([2, 4, 6, 8, 10])); // 0
