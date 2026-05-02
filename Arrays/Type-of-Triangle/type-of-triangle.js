let nums = [3,3,3];
function triangleType(nums) {

    let [a, b, c] = nums;

    // Check triangle validity
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "none";
    }

    // Check types
    if (a === b && b === c) {
        return "equilateral";
    } 
    else if (a === b || b === c || a === c) {
        return "isosceles";
    } 
    else {
        return "scalene";
    }
}

console.log(triangleType(nums));