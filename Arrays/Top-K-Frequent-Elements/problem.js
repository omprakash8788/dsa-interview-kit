let nums = [1, 1, 1, 2, 2, 3],
    k = 2;

let obj = {};

// Count frequency
for (let i = 0; i < nums.length; i++) {

    if (obj[nums[i]] == undefined) {
        obj[nums[i]] = 1;
    }
    else {
        obj[nums[i]]++;
    }
}

// Sort by frequency
let sort = Object.entries(obj).sort((a, b) => b[1] - a[1]);

// Take top k elements
let result = sort
                .slice(0, k)
                .map((item) => Number(item[0]));

console.log(result);