function arraysOfArrays(a) {
  let entier = {};
  a.filter((elt, cle) => {
    let s = a[cle].reduce((prevalue, curvalue) => prevalue + curvalue, 0);
    //(entier[s / a[cle].length] ??= []).push(cle); // if (entier[s / a[cle].length] == undefined) entier[s / a[cle].length] = []; entier[s / a[cle].length].push(cle);
    entier[s / a[cle].length] ? entier[s / a[cle].length].push(cle) : (entier[s / a[cle].length] = [cle]); 
  }); 
  return Object.values(entier);
}

let a = [
  [3, 3, 4, 2],
  [4, 4],
  [4, 0, 3, 3],
  [2, 3],
  [3, 3, 3],
];

console.log(arraysOfArrays(a)); // [[0, 4], [1], [2, 3]]
