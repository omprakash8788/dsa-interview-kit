let x = 2.10000
let n = 3
var myPow = function(x, n) {

    // Base case
    if(n === 0) {
        return 1;
    }

    // Handle negative powers
    if(n < 0) {
        x = 1 / x;
        n = -n;
    }

    // Recursive call
    let half = myPow(x, Math.floor(n / 2));

    // Even power
    if(n % 2 === 0) {
        return half * half;
    }

    // Odd power
    return half * half * x;
};
console.log(myPow(x, n))