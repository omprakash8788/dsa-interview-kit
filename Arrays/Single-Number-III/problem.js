let nums = [1,2,1,3,2,5];

let obj = {};

// Count frequency
for(let i = 0; i < nums.length; i++) {

    if(obj[nums[i]] == undefined) {
        obj[nums[i]] = 1;
    }
    else {
        obj[nums[i]]++;
    }
}

let temp = [];

// Find elements appearing once
for(let key in obj) {

    if(obj[key] == 1) {
        temp.push(Number(key));
    }
}

console.log(temp);