let dominoes = [[1,2],[2,1],[3,4],[5,6]];

function numEquivDominoPairs(dominoes) {
    let freq = {};
    let count = 0;
    for (let [a, b] of dominoes) {
        let key = a < b ? a + "," + b : b + "," + a;
        if (freq[key]) {
            count += freq[key];
            freq[key]++;
        } else {
            freq[key] = 1;
        }
    }
    return count;
}
console.log(numEquivDominoPairs(dominoes));