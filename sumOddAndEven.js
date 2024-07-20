/*Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
01 Test 1
Entrée
Sortie attendue
0,1
1 0
02 Test 2
Entrée
Sortie attendue
4,5,6,7,0
12 10
03 Test 3
Entrée
Sortie attendue
7,8,6,3,1,2,1
12 16
04 Test 4
Entrée
Sortie attendue
7,7,6,2,0
14 8
05 Test 5
Entrée
Sortie attendue
1,3,5,7
16 0
06 Test 6
Entrée
Sortie attendue
2,4,0,6,6,4,8,2,6,6,0,6
0 50*/

function sumOddAndEven(array) {
    let sumOdd = 0;
    let sumEven = 0;
    
    array.forEach(number => {
      if (number % 2 === 0) {
        sumEven += number;
      } else {
        sumOdd += number;
      }
    });
  
    return [sumOdd, sumEven];
  }

  console.log(sumOddAndEven([0, 1])); // [1, 0]
  console.log(sumOddAndEven([4, 5, 6, 7, 0])); // [12, 10]
  console.log(sumOddAndEven([7, 8, 6, 3, 1, 2, 1])); // [12, 16]
  console.log(sumOddAndEven([7, 7, 6, 2, 0])); // [14, 8]
  console.log(sumOddAndEven([1, 3, 5, 7])); // [16, 0]
  console.log(sumOddAndEven([2, 4, 0, 6, 6, 4, 8, 2, 6, 6, 0, 6])); // [0, 50]
