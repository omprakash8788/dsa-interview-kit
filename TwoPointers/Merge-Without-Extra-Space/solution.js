let a = [2, 4, 7, 10];
let b = [2, 3];

let i = a.length - 1;
let j = 0;

while (i >= 0 && j < b.length) {
  if (a[i] > b[j]) {
    [a[i], b[j]] = [b[j], a[i]];
  }
  i--;
  j++;
}

a.sort((x, y) => x - y);
b.sort((x, y) => x - y);
console.log(a, b);
