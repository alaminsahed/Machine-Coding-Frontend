const nested = [1, 2, [3, 4, [[5, 7], 6]]];

const flat = nested.flat();
console.log(flat); // [1, 2, 3, 4, [5, 6]]

const flat2 = nested.flat(2);
console.log(flat2); // [1, 2, 3, 4, 5, 6]

const flat3 = nested.flat(Infinity);
console.log(flat3); // [1, 2, 3, 4, 5, 6]