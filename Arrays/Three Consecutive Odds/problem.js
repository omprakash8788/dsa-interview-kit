let arr = [2,6,4,1]
var threeConsecutiveOdds = function(arr) {
   let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            count++;
            if (count === 3) return true;
        } else {
            count = 0;
        }
    }

    return false;
   
};

console.log(threeConsecutiveOdds(arr))