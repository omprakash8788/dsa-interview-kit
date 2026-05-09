
let nums = [1,2,3,4,5];

function maxUniqueSubarraySum(nums) {

    let mx = nums[0];

    // Find maximum element
    for (let x of nums) {
        if (x > mx) {
            mx = x;
        }
    }

    // If all numbers are <= 0
    if (mx <= 0) {
        return mx;
    }

    let seen = new Set();
    let ans = 0;

    // Add unique positive elements
    for (let x of nums) {

        if (x >= 0 && !seen.has(x)) {
            seen.add(x);
            ans += x;
        }
    }

    return ans;
}

console.log(maxUniqueSubarraySum(nums));