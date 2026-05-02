
function countHillValley(nums) {
    let arr = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            arr.push(nums[i]);
        }
    }

    let hill = 0;
    let valley = 0;

    // Step 2: Count hills & valleys
    for (let i = 1; i < arr.length - 1; i++) {

        let prev = arr[i - 1];
        let next = arr[i + 1];

        if (arr[i] > prev && arr[i] > next) {
            hill++;
        } 
        else if (arr[i] < prev && arr[i] < next) {
            valley++;
        }
    }

    return hill + valley;
}
console.log(countHillValley([2,4,1,1,6,5]));