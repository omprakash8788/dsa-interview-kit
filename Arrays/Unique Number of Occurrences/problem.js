let arr = [1,2,2,1,1,3];

var uniqueOccurrences = function(arr) {

    let obj = {};

    // Count frequency
    for(let i = 0; i < arr.length; i++) {

        if(obj[arr[i]] == undefined) {
            obj[arr[i]] = 1;
        }
        else {
            obj[arr[i]]++;
        }
    }

    let set = new Set();

    // Check unique frequencies
    for (let key in obj) {

        if (set.has(obj[key])) {
            return false;
        }

        set.add(obj[key]);
    }

    return true;
};

console.log(uniqueOccurrences(arr));