let arr = [4, 2, -3, 1, 6]

function SubarrayWithZero(arr){
   
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum === 0) {
                return true;
            }
        }
    }
    return false;
}

let ans = SubarrayWithZero(arr)
console.log(ans)