let nums = [4,3,2,7,8,2,3,1];

let obj = {};
let temp = [];

// Count frequency
for(let i = 0; i < nums.length; i++) {

    if(obj[nums[i]] == undefined) {
        obj[nums[i]] = 1;
    }
    else {
        obj[nums[i]]++;
    }
}

// Find duplicates
for(let key in obj) {

    if(obj[key] > 1) {
        temp.push(Number(key));
    }
}

console.log(temp);