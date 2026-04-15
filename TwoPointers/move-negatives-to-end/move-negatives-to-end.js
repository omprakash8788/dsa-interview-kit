function moveNegatives(arr) {
    let result = [];

    // Add positives
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            result.push(arr[i]);
        }
    }

    // Add negatives
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            result.push(arr[i]);
        }
    }

    // Copy back
    for (let i = 0; i < arr.length; i++) {
        arr[i] = result[i];
    }

    return arr;
}
console.log(moveNegatives([1, -1, 3, 2, -7, -5, 11, 6]))