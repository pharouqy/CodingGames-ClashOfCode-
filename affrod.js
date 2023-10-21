/*Ben is very broke. He cannot afford rent, so he is going to get a job this month so he won't be evicted. The job he is going to get pays P per hour, and he works H hours, and his rent costs R each month. Output YES if Ben can afford his rent with extra money, NO if he cannot afford his rent, and BARELY if he can afford his rent with no extra money
Entrée
Line 1: an integer P - the amount Ben earns each hour he works
Line 2: an integer H - the number of hours Ben works per month
Line 3: an integer R - the monthly rent Ben must pay
Sortie
Line 1: YES if Ben can afford his rent with extra money, NO if he cannot afford his rent, and BARELY if he can afford his rent with no extra money
Contraintes
0<P, R, H<1000
Exemple
Entrée
20
100
600
Sortie
YES*/

function affrod(amount, hours, rent) {
  let affrod = amount * hours - rent;
  if (affrod > 0) {
    return "YES";
  } else if (affrod < 0) {
    return "NO";
  } else {
    return "BARELY";
  }
}

console.log(affrod(20, 100, 600)); // YES
console.log(affrod(1, 100, 600)); // NO
console.log(affrod(6, 100, 600)); // BARELY
