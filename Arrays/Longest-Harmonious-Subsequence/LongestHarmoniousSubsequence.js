let nums = [1,3,2,2,5,2,3,7];

var findLHS = function(nums) {

    let obj = {};
    let maxLen = 0;

    // Step 1: Build frequency map
    for (let i = 0; i < nums.length; i++) {

        if (obj[nums[i]] === undefined) {
            obj[nums[i]] = 1;
        } else {
            obj[nums[i]]++;
        }
    }

    // Step 2: Check num and num+1 pairs
    for (let [numStr, count] of Object.entries(obj)) {

        let num = Number(numStr);

        if (obj[num + 1] !== undefined) {

            maxLen = Math.max(
                maxLen,
                count + obj[num + 1]
            );
        }
    }

    return maxLen;
};

console.log(findLHS(nums));
