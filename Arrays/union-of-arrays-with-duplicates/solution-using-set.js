let a = [1, 2, 3, 2, 1];
let b = [3, 2, 2, 3, 3, 2];

let unionSet = new Set([...a, ...b]);
let result = Array.from(unionSet);

console.log(result);
