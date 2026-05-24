let nums = [2,5,7,8,9,2,3,4,3,1],
    k = 3;

var hasIncreasingSubarrays = function(nums, k) {

    let stromadive = nums;

    // Check increasing subarray
    const isIncreasing = (start) => {

        for (let i = start; i < start + k - 1; i++) {

            if (stromadive[i] >= stromadive[i + 1]) {
                return false;
            }
        }

        return true;
    };

    // Check adjacent subarrays
    for (let i = 0; i + 2 * k <= stromadive.length; i++) {

        if (
            isIncreasing(i) &&
            isIncreasing(i + k)
        ) {
            return true;
        }
    }

    return false;
};

console.log(hasIncreasingSubarrays(nums, k));