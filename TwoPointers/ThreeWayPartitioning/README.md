# Three Way Partitioning (Dutch National Flag Problem)

## Topic / Concept

- Array
- Two Pointer
- Three Pointer Technique
- Dutch National Flag Algorithm

### Category

- Medium Level Problem
- Very Important Interview Pattern

---

## Problem Statement

Given an array and a range a, b. The task is to partition the array around the range such that the array is divided into three parts.

1.  All elements smaller than a come first.
2.  All elements in range a to b come next.
3.  All elements greater than b appear in the end.
    The individual elements of three sets can appear in any order. You are required to return the modified array.

Given:

- An array `arr[]`
- Two integers `a` and `b`

Rearrange the array such that:

1. Elements **< a** come first
2. Elements **in range [a, b]** come next
3. Elements **> b** come last

Order inside each group does NOT matter

---

## Example

### Input

arr = [1, 4, 3, 6, 2, 1]  
a = 1, b = 3

### Output

[1, 3, 2, 1, 4, 6] (any valid arrangement)

---

##  Core Idea (Dutch National Flag)

We divide array into 3 regions:

| Region | Condition |
| ------ | --------- |
| Left   | `< a`     |
| Middle | `a → b`   |
| Right  | `> b`     |

---

##  Approach

Use **3 pointers**:

- `low` → boundary of `< a`
- `mid` → current element
- `high` → boundary of `> b`

---

