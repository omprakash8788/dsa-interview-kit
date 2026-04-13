function isSubset(a, b) {
  let freq = {};
  for (let num of a) {
    freq[num] = (freq[num] || 0) + 1;
  }
  for (let num of b) {
    if (!freq[num]) {
      return false;
    }
    freq[num]--;
  }
  return true;
}
console.log(isSubset([11, 7, 1, 13, 21, 3, 7, 3], [11, 3, 7, 1, 7]));
