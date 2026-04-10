let arr1 = [1, 5, 10, 20, 40, 80],
  arr2 = [6, 7, 20, 80, 100],
  arr3 = [3, 4, 15, 20, 30, 70, 80, 120];

function commonElements(arr1, arr2, arr3) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  let set3 = new Set(arr3);

  let result = [];

  for (let num of set1) {
    if (set2.has(num) && set3.has(num)) {
      result.push(num);
    }
  }

  return result.length > 0 ? result : [-1];
}

console.log(commonElements(arr1, arr2, arr3));
