let nums1 = [1, 3], nums2 = [2];

let fa = [...nums1, ...nums2];
fa.sort((a, b) => a - b);

let n = fa.length;

if (n % 2 === 1) {
    let oddLen = fa[Math.floor(n / 2)];
    console.log(oddLen);
} else {
    let mid1 = fa[n / 2 - 1];
    let mid2 = fa[n / 2];
    
    let finalAns = (mid1 + mid2) / 2;
    console.log(finalAns);
}