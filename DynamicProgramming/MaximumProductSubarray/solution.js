let arr = [-2, 6, -3, -10, 0, 2];
let maxSoFar = arr[0];
let minSoFar = arr[0];
let result = arr[0];

for (let i = 1; i < arr.length; i++) {
  let current = arr[i];
  if (current < 0) {
    [maxSoFar, minSoFar] = [minSoFar, maxSoFar];
  }
  maxSoFar = Math.max(current, maxSoFar * current);
  minSoFar = Math.min(current, minSoFar * current);
  result = Math.max(result, maxSoFar);
}
console.log(result);
