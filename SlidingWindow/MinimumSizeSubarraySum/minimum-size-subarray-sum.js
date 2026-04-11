let target = 7,
  nums = [2, 3, 1, 2, 4, 3];

let left = 0;
let sum = 0;
let minLen = Infinity;

for (let right = 0; right < nums.length; right++) {
  sum += nums[right];
  // Shrink window as long as sum is ≥ target
  while (sum >= target) {
    minLen = Math.min(minLen, right - left + 1);
    sum -= nums[left];
    left++;
  }
}
console.log(minLen === Infinity ? 0 : minLen);
