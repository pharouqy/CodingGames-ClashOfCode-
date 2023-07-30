/*The arithmetic mean (or mean or average) is the most commonly used and readily understood measure of central tendency. In statistics, the term average refers to any of the measures of central tendency. The arithmetic mean is defined as being equal to the sum of the numerical values of each and every observation divided by the total number of observations.

For this mission, you are given a non-empty list of natural numbers. You must compute their arithmetic mean.
Entrée
Line 1: The number of values in the list, N
Line 2: N space separated integers (each called X)
Sortie
Line 1: The arithmetic mean of the list as a float or an integer
Contraintes
2 ≤ N ≤ 100
-1000 < X < 1000
Exemple
Entrée
5
1 2 3 4 5
Sortie
3*/

function arithmeticMean(string) {
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
        sum += Number(string[i]);
    }
    return sum / string.length;
}

console.log(arithmeticMean("12345")) // 3
console.log(arithmeticMean("456975234")) // 5
console.log(arithmeticMean("485672569542")) // 5.25
console.log(arithmeticMean("456986735491")) // 5.583