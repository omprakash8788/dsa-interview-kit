let  nums = [4,2,4]
var findSubarrays = function(nums) {
   const seen = new Set();

    for (let i = 0; i < nums.length - 1; i++) {
        const sum = nums[i] + nums[i + 1];

        if (seen.has(sum)) {
            return true;
        }
        seen.add(sum);
    }

    return false;
};
console.log(findSubarrays(nums))