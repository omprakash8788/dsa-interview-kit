class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const a = new Node(10);
const b = new Node(20);
const c = new Node(30);
const d = new Node(40);
const e = new Node(50);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

let currrent = a;
// console.log(currrent)
let l = 0;
let sum =0;
while (currrent !== null) {
  console.log(currrent.value);
  sum += currrent.value
  currrent = currrent.next;
  l++;
}
console.log(l)
console.log(sum)
