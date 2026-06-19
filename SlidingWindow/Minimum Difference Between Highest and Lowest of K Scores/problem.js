let nums = [9,4,1,7], k = 2
var minimumDifference = function(nums, k) {
     if (k === 1) return 0;

    nums.sort((a, b) => a - b);

    let sc = Infinity;

    for (let i = 0; i <= nums.length - k; i++) {
        sc = Math.min(sc, nums[i + k - 1] - nums[i]);
    }

    return sc;
};
console.log(minimumDifference(nums, k))