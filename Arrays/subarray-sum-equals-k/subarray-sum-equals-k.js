let nums = [1, 1, 1],
  k = 2;

let countSubArr = 0;
for (let i = 0; i < nums.length; i++) {
  let sum = 0;
  for (let j = i; j < nums.length; j++) {
    sum = sum + nums[j];
    if (sum == k) {
      countSubArr++;
    }
  }
}
console.log(countSubArr);
