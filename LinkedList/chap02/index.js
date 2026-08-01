
class Node {
    constructor(value){
       this.value=value;
       this.next=null
    }
}
const n1 = new Node(10)
const n2 = new Node(20)
const n3 = new Node(30)


n1.next = n2;
n2.next=n3
console.log(n1.next.next.value)

