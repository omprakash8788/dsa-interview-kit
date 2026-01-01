let arr = [2, 3, -8, 7, -1, 2, 3];
let maxSoFar = arr[0];
let currSum = arr[0];
for (let i = 1; i < arr.length; i++) {
  currSum = Math.max(arr[i], currSum + arr[i]);
  maxSoFar = Math.max(maxSoFar, currSum);
}
console.log(maxSoFar);
