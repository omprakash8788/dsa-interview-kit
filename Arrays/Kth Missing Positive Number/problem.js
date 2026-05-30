let arr = [2,3,4,7,11]
let k = 5;

var findKthPositive = function(arr, k) {

    let n = arr.length + k;

    let set = new Set(arr);

    let missing = [];

    for(let i = 1; i <= n; i++) {

        if(!set.has(i)) {
            missing.push(i);
        }
    }

    return missing[k - 1];
};

console.log(findKthPositive(arr, k));