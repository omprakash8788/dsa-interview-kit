
let nums = [1,1,1,1,1],
    target = 3;

var findTargetSumWays = function(nums, target) {

    const memo = new Map();

    function dfs(index, currentSum) {

        if (index === nums.length) {
            return currentSum === target ? 1 : 0;
        }

        const key = `${index},${currentSum}`;

        if (memo.has(key)) {
            return memo.get(key);
        }

        const add =
            dfs(index + 1,
                currentSum + nums[index]);

        const subtract =
            dfs(index + 1,
                currentSum - nums[index]);

        memo.set(key, add + subtract);

        return memo.get(key);
    }

    return dfs(0, 0);
};

console.log(
    findTargetSumWays(nums, target)
);