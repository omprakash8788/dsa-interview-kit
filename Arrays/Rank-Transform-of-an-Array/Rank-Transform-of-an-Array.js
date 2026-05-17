let arr = [37,12,28,9,100,56,80,5,12];

// Step 1: Get unique sorted values
let sorted = [...new Set(arr)].sort((a,b) => a-b);

let rankMap = {};

// Step 2: Assign ranks
sorted.forEach((val, idx) => {
    rankMap[val] = idx + 1;
});

// Step 3: Transform original array
let result = arr.map(val => rankMap[val]);

console.log(result);
