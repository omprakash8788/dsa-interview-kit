let nums = [0,1,7,4,4,5], lower = 3, upper = 6;
let count = 0;
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    let sum = nums[i] + nums[j];
    if (sum >= lower && sum <= upper) {
      count++;
    }
  }
}
console.log(count);