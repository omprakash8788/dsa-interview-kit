let arr = [1, 2, 2, 6, 6, 6, 6, 7, 10];

var findSpecialInteger = function (arr) {

    const n = arr.length;

    const threshold = Math.floor(n / 4);

    for (let i = 0; i < n - threshold; i++) {

        if (arr[i] === arr[i + threshold]) {

            return arr[i];
        }
    }
};

console.log(findSpecialInteger(arr));