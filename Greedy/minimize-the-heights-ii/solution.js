let arr = [1, 5, 8, 10];
let k = 2;

arr.sort((a, b) => a - b);

let ans = arr[arr.length - 1] - arr[0];

let smallest = arr[0] + k;
let largest = arr[arr.length - 1] - k;

for (let i = 0; i < arr.length - 1; i++) {
    let minVal = Math.min(smallest, arr[i + 1] - k);
    let maxVal = Math.max(largest, arr[i] + k);

    if (minVal < 0) continue;

    ans = Math.min(ans, maxVal - minVal);
}

console.log(ans);
