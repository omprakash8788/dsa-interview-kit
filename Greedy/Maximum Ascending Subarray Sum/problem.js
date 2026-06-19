let nums = [10,20,30,5,10,50];

var maxAscendingSum = function(nums) {

    let cur = nums[0];
    let max = nums[0];

    for(let i = 1; i < nums.length; i++) {

        if(nums[i] > nums[i - 1]) {
            cur += nums[i];
        } else {
            cur = nums[i];
        }

        max = Math.max(max, cur);
    }

    return max;
};

console.log(maxAscendingSum(nums));