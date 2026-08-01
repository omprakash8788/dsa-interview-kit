### Lesson 1: What is a Node?

A linked list is made of nodes

A node contains only 2 things:

```
+-------------------+
| value | next      |
+-------------------+
```

Example:

```
+-------------------+
| 10    | null      |
+-------------------+

```

It means

value = 10
next = null (there is no next node yet)

In JavaScript, we represent it like this:

```
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

```

## Now create one node:

```
let node = new Node(10);

console.log(node);

```

Expected output

```
 Node {
  value: 10,
  next: null
}

```

## Your First DSA Question

Question 1

Create a Node class and then create a node with the value 50

```
class Node {
    constructor(value){
       this.value=value;
       this.next=null
    }
}
const a = new Node(50)
console.log(a)


```

Expected output

```
Node {
  value: 50,
  next: null
}
```

When you write:

```
const node = new Node(50);
```

What happens?

Step 1
JavaScript creates an object.

```
 {
  value: 50,
  next: null
}
```

Step 2
The variable node stores a `reference` to that object

```
node
 │
 ▼
+--------------------+
| value : 50         |
| next  : null       |
+--------------------+

```

This is important because later `next` will point to another Node, not a number

Question 2 (Very Easy)

Create two nodes:

- First node = 10
- Second node = 20

Like this

```
 10      20
 ↓       ↓
null    null

```

Print both nodes.

Expected output

```
Node { value: 10, next: null }

Node { value: 20, next: null }

```

⚠️ Do not connect them yet

Just create two separate nodes and print them

```

class Node {
    constructor(value){
       this.value=value;
       this.next=null
    }
}
const a = new Node(10)
const b = new Node(20)

console.log(a)
console.log(b)



```

## Now let's build your intuition

Right now, you have two separate houses

```
n1
 │
 ▼
+---------------+
| value : 10    |
| next  : null  |
+---------------+

n2
 │
 ▼
+---------------+
| value : 20    |
| next  : null  |
+---------------+

```

Notice something important:

- n1 does not know about n2.
- n2 does not know about n1.

So this is NOT a linked list yet.

## Question 3 (The First Real Linked List)

Now connect them

There is only one line you need to write:

```

class Node {
    constructor(value){
       this.value=value;
       this.next=null
    }
}
const n1 = new Node(10)
const n2 = new Node(20)

n1.next = n2;
console.log(n1)



```

Now the picture becomes:

```
n1
 │
 ▼
+---------------+      +---------------+
| value : 10    | ---> | value : 20    |
| next  :  ●----|      | next : null   |
+---------------+      +---------------+
```

Now n1 knows where the next node is.

This is the beginning of a linked list

## your task

Write code to:

Create n1 (10)
Create n2 (20)
Connect them

```

class Node {
    constructor(value){
       this.value=value;
       this.next=null
    }
}
const n1 = new Node(10)
const n2 = new Node(20)

n1.next = n2;
console.log(n1)



```

Memory becomes

```
n1
 │
 ▼
+-----------+      +-----------+
| value:10  | ---> | value:20  |
| next: ●---|      | next:null |
+-----------+      +-----------+
```

Notice carefully:

n1.next does not store the value 20.

It stores a reference to the n2 object.

### Question

Create three nodes

```
10 → 20 → 30 → null
```

Requirements:

Create n1, n2, n3.
Connect them:

- n1.next = n2
- n2.next = n3
  Without using n3 directly, print:

```
30
```

```

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


```

### Let's think like a computer

Memory looks like this

```
n1
 │
 ▼
+-----------+      +-----------+      +-----------+
| value:10  | ---> | value:20  | ---> | value:30  |
| next: ●---|      | next: ●---|      | next:null |
+-----------+      +-----------+      +-----------+
```

## Question (The First Traversal)

Using your existing linked list

```
10 → 20 → 30 → null
```

Write code to:

- Create a variable
  let current = n1;

Print

```
10
20
30
```
Do not use a loop yet

```
 class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const n1 = new Node(10);
const n2 = new Node(20);
const n3 = new Node(30);

n1.next = n2;
n2.next = n3;

let current = n1;

console.log(current.value); // 10

current = current.next;
console.log(current.value); // 20

current = current.next;
console.log(current.value); // 30
```


## Before I teach the while loop, answer this
### Suppose we write
```
let current = n1;

while (current !== null) {
    console.log(current.value);
    current = current.next;
}

```
