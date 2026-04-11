let arr = [2, 6, 1, 9, 4, 5, 3];
arr.sort((a, b) => a - b);

let max = 0;
let count = 1;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] === arr[i - 1] + 1) {
    count++;
  } else if (arr[i] !== arr[i - 1]) {
    count = 1;
  }
  max = Math.max(max, count);
}
console.log(max);
