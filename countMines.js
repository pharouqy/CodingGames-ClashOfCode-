/*You are given a grid representing a minefield. Your task is to count all the mines in the grid and output the total number. The grid is represented as a 2D array, where M represents a mine and . represents an empty space.
Entrée
Line 1: Two space-separated integers N and M representing the dimensions of the grid.
Next N lines: A string of length M representing a row of the grid, where M is a mine and . is an empty space.
Sortie
Line 1: An integer K representing the total number of mines.
Contraintes
1 < N,M < 100
The grid will contain only the characters M and .
Exemple
Entrée
3 3
.M.
...
M.M
Sortie
3*/

function countMines(grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "M") {
        count++;
      }
    }
  }
  return count;
}

console.log(countMines([["M", "M", "M"]])); // 3
console.log(
  countMines([
    ["M", , ".", "M", ".", ".", "M"],
    ["M", , "M", ".", ".", ".", "."],
    ["M", , "M", ".", "M", ".", "M"],
  ])
); // 9
