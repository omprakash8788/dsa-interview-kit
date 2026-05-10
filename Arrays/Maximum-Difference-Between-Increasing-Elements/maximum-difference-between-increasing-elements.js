
let nums = [7,1,5,4];
function maximumDifference(nums) {

    let minVal = nums[0];
    let maxDiff = -1;

    for (let j = 1; j < nums.length; j++) {

        // Valid increasing pair
        if (nums[j] > minVal) {
            maxDiff = Math.max(maxDiff, nums[j] - minVal);
        }

        // Update minimum value
        minVal = Math.min(minVal, nums[j]);
    }

    return maxDiff;
}

console.log(maximumDifference(nums));