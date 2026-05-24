let nums = [0,1,2,4,5,7];

var summaryRanges = function(nums) {

    let result = [];

    if (nums.length === 0) {
        return result;
    }

    let start = nums[0];

    for (let i = 0; i < nums.length; i++) {

        // End of range
        if (
            i === nums.length - 1 ||
            nums[i] + 1 !== nums[i + 1]
        ) {

            // Single number
            if (start === nums[i]) {
                result.push(`${start}`);
            }

            // Range
            else {
                result.push(`${start}->${nums[i]}`);
            }

            // Start next range
            start = nums[i + 1];
        }
    }

    return result;
};

console.log(summaryRanges(nums));