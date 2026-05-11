
let nums = [1,3,4,8,7,9,3,5,1];
let k = 2;

var divideArray = function(nums, k) {

    // Step 1: Sort array
    nums.sort((a, b) => a - b);

    let res = [];

    // Step 2: Create groups of 3
    for (let i = 0; i < nums.length; i += 3) {

        let group = [nums[i], nums[i + 1], nums[i + 2]];

        // Step 3: Check condition
        if (group[2] - group[0] > k) {
            return [];
        }

        // Step 4: Add valid group
        res.push(group);
    }

    return res;
};

console.log(divideArray(nums, k));