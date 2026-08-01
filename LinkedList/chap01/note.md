## First JS Class

```
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
```

`Create one`
```
let node = new Node(10);
console.log(node);
```

`Output`


Node {
 value:10,
 next:null
}

---

## Creating two Nodes
```
let first = new Node(10);
let second = new Node(20);
```

***Memory***
first

10
↓

null


second

20
↓

null

<span style="color: red;">They don't know each other.</span>

`Connect Them`

```
first.next = second;
```

***Now***

```
10 ------>20
```

console.log(first);

```
{
 value:10,
 next:{
      value:20,
      next:null
 }
}



```

<span style="color: red;">Important Interview Concept</span>

Without head...

Can we reach any node? 
```
No.
```
Everything starts from

```
 head
```

## Traversing the Linked List
Suppose

```
10→20→30→40
```

Start from head.
```
let current = first;
```
```
current

↓

10→20→30→40
```
Print
```
console.log(current.value);
```

Move
```
current = current.next;
```

Now
```
20→30→40
```

### Complete Traversal
```
 let current = first;

while (current !== null) {
    console.log(current.value);
    current = current.next;
}
```

## Homework (Don't Skip)

## Without looking at my code, implement:




