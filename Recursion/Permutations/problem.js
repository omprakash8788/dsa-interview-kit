let nums = [1,2,3];

var permute = function(nums) {

    const result = [];

    function backtrack(path) {

        // Base case
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let num of nums) {

            // Avoid duplicates in same permutation
            if (!path.includes(num)) {

                path.push(num);

                backtrack(path);

                path.pop();
            }
        }
    }

    backtrack([]);

    return result;
};

console.log(permute(nums));