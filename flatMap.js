const arr = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];

const result = arr.flatMap((x) => x.flatMap((y) => y.flatMap((z) => z)));

console.log(result); // [2, 4, 6, 8, 10, 12, 14, 16]
