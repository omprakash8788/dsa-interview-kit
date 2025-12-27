let arr = [3, 2, 1, 56, 10000, 167];
let min = arr[0];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  } else if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max, min);
