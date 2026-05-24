let nums = [4, 2, 3],
  k = 1;

var largestSumAfterKNegations = function (nums, k) {
  // Sort array
  nums.sort((a, b) => a - b);

  // Flip negatives
  for (let i = 0; i < nums.length && k > 0; i++) {
    if (nums[i] < 0) {
      nums[i] = -nums[i];

      k--;
    }
  }

  // If k is odd
  let minNum = Math.min(...nums);

  if (k % 2 === 1) {
    nums[nums.indexOf(minNum)] = -minNum;
  }

  // Sum array
  return nums.reduce((sum, val) => sum + val, 0);
};

console.log(largestSumAfterKNegations(nums, k));
