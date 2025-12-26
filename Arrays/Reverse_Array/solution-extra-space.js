let arr =[1, 4, 3, 2, 6, 5]
function reverseArray(arr) {
    let n = arr.length;
    let temp = [];

    for (let i = 0; i < n; i++) {
        temp[i] = arr[n - i - 1];
    }
    for (let i = 0; i < n; i++) {
        arr[i] = temp[i];
    }

    return arr;
}
console.log(reverseArray(arr))





