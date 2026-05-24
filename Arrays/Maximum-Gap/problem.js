let nums = [3,6,9,1];

var maximumGap = function(nums) {

    nums.sort((a,b)=>(a-b));

    if(nums.length < 2){
        return 0;
    }

    let diff = 0;

    for (let i = 0; i < nums.length - 1; i++) {

        diff = Math.max(
            diff,
            nums[i + 1] - nums[i]
        );
    }

    return diff;
};

console.log(maximumGap(nums));