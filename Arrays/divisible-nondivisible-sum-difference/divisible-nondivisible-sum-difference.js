let n = 10, m = 3;

let sumNotD = 0;
let sumD = 0;

for (let i = 1; i <= n; i++) {
    if (i % m !== 0) {
        sumNotD += i;
    } else {
        sumD += i;
    }
}

let finalSum = sumNotD - sumD;
console.log(finalSum)