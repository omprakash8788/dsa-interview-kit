let nums = [-4,-2,1,4,8]
var findClosestNumber = function(nums) {
    let closest = nums[0];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (Math.abs(num) < Math.abs(closest)) {
            closest = num;
        } else if (Math.abs(num) === Math.abs(closest) && num > closest) {
            closest = num;
        }
    }

    return closest;
};
console.log(findClosestNumber(nums))