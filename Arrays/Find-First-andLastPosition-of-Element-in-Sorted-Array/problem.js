let nums = [5,7,7,8,8,10];
let target = 8;

let res = [-1,-1];

// Find first occurrence
for (let i = 0; i < nums.length; i++) {

    if (nums[i] === target) {
        res[0] = i;
        break;
    }
}

// Find last occurrence
for (let j = nums.length - 1; j >= 0; j--) {

    if (nums[j] === target) {
        res[1] = j;
        break;
    }
}

console.log(res);