let n = 10;

function factorialLarge(n) {
    
    let result = [1];
    for (let i = 2; i <= n; i++) {
        let carry = 0;
        for (let j = result.length - 1; j >= 0; j--) {
            let mul = result[j] * i + carry;
            result[j] = mul % 10;
            carry = Math.floor(mul / 10);
        }
        while (carry > 0) {
            result.unshift(carry % 10);
            carry = Math.floor(carry / 10);
        }
    }
    return result;
}
let ans = factorialLarge(n);
console.log(ans);
