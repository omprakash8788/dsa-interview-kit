function minSwaps(arr, k) {
  let n = arr.length;

  // Step 1: Count elements ≤ k
  let count = 0;
  for (let num of arr) {
    if (num <= k) count++;
  }

  // Step 2: Count bad elements in first window
  let bad = 0;
  for (let i = 0; i < count; i++) {
    if (arr[i] > k) bad++;
  }

  // Step 3: Sliding window
  let minSwaps = bad;

  for (let i = 0, j = count; j < n; i++, j++) {
    if (arr[i] > k) bad--; // outgoing
    if (arr[j] > k) bad++; // incoming

    minSwaps = Math.min(minSwaps, bad);
  }

  return minSwaps;
}
console.log(minSwaps([2, 1, 5, 6, 3], 3));
