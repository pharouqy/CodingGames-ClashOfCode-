function insertionSorting(array) {
  for (let i = 1; i < array.length; i++) {
    // Pour chaque élément du tableau, à partir du 2ème élément
    let current = array[i]; // On stocke l'élément courant dans une variable
    let left_index = i - 1; // On stocke l'indice de l'élément précédent dans une variable
    while (left_index >= 0 && array[left_index] > current) {
      // Tant que l'indice précédent est positif et que l'élément précédent est plus grand que l'élément courant
      array[left_index + 1] = array[left_index]; // On déplace l'élément précédent d'une case vers la droite
      left_index--; // On décrémente l'indice précédent pour continuer la comparaison avec les éléments précédents
    }
    array[left_index + 1] = current; // On insère l'élément courant à sa place dans le tableau trié
  }
  return array; // On retourne le tableau trié
}

console.log(insertionSorting([1, 5, 3, 2, 9, 4, 8])); // [1, 2, 3, 4, 5, 8, 9];