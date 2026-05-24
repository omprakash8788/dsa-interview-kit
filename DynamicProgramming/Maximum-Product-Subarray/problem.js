let nums = [2, 3, -2, 4];

var maxProduct = function (nums) {

    let maxProd = nums[0];
    let minProd = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {

        const current = nums[i];

        // store old max
        const tempMax = maxProd;

        // update max and min
        maxProd = Math.max(
            current,
            current * maxProd,
            current * minProd
        );

        minProd = Math.min(
            current,
            current * tempMax,
            current * minProd
        );

        result = Math.max(result, maxProd);
    }

    return result;
};

console.log(maxProduct(nums));