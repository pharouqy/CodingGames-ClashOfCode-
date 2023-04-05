/*A median is a numerical value separating the upper half of a sorted list of numbers from the lower half.

In a list where there are an odd number of entities, the median is the number found in the middle of the array. If the list contains an even number of entities, then there is no single middle value, instead the median becomes the average of the two numbers found in the middle.

For this mission, you are given a non-empty list of natural numbers. You must separate the upper half of the numbers from the lower half and find the median.
Entrée
Line 1: The number of values in the list, N
Line 2: N space separated integers (each called X)
Sortie
Line 1 : The median of the list as a float or an integer
Contraintes
2 ≤ N ≤ 100
-1000 < X < 1000
Exemple
Entrée
5
1 2 3 4 5
Sortie
3

[ '2', '4', '1', '3', '5' ]
3
['1','10','2','9','3','8','4','7','5','6']
5.5
[ '-320', '500', '400', '1', '3', '-2' ]
2*/

function median(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      let temp = array[j];
      if (parseInt(temp) > parseInt(array[j + 1])) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  console.log(array);
  if (array.length % 2 !== 0) {
    return array[Math.floor(array.length / 2)];
  } else {
    let temp = array[Math.floor((array.length - 1) / 2)];
    let temp2 = array[Math.floor((array.length - 1) / 2) + 1];
    return (parseInt(temp) + parseInt(temp2)) / 2;
  }
}

console.log(median(["7", "2", "3", "4", "5"])); // 4
console.log(median(["2", "4", "1", "3", "5"])); // 3
console.log(median(["1", "10", "2", "9", "3", "8", "4", "7", "5", "6"])); // 5.5
console.log(median(["-320", "500", "400", "1", "3", "-2"])); // 2
