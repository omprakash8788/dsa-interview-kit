let nums = [1,2,5,2,3];
let target = 2;

var targetIndices = function(nums, target) {

    let temp = [];

    // Step 1: Sort array
    nums.sort((a,b)=>(a-b));

    // Step 2: Find target indices
    for(let i = 0; i < nums.length; i++) {

        if(nums[i] == target) {
            temp.push(i);
        }
    }

    return temp;
};

console.log(targetIndices(nums, target));
