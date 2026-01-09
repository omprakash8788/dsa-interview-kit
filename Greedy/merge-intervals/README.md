# Merge Intervals

---

## Problem Statement

You are given an array of intervals where each interval is represented as: `intervals[i] = [start, end]`

Your task is to **merge all overlapping intervals** and return an array of **non-overlapping intervals** that together cover all the intervals in the input.

Two intervals are considered overlapping if they share at least one common point.

---

## Examples

### Example 1

**Input**
`intervals = [[1,3], [2,6], [8,10], [15,18]]`

**Output**
`[[1,6], [8,10], [15,18]]`


**Explanation**
- `[1,3]` and `[2,6]` overlap → merged into `[1,6]`
- `[8,10]` and `[15,18]` do not overlap

---

### Example 2

**Input**
`intervals = [[1,4], [4,5]]`


**Output**
`[[1,5]]`


**Explanation**
- Boundary touching (`4 == 4`) is considered overlapping

---

## Concept Building (Brainstorming)

### What is an Interval?

An interval `[a, b]` represents a continuous range on the number line.

Example:
`[1,3] → covers 1, 2, 3`


---

### When Do Intervals Overlap?

For two intervals:

`[a, b] and [c, d]`

They **overlap if**: `c ≤ b`


They **do NOT overlap if**: `c > b`


This single condition drives the entire solution.

---

## Initial Observations

- Intervals are **not sorted**
- Overlaps are difficult to detect in random order
- Sorting by start time simplifies comparisons
- Only the **last merged interval** needs to be checked

---

## Core Idea (Greedy Strategy)

1. Sort intervals by starting time
2. Traverse one interval at a time
3. Merge overlapping intervals greedily
4. Store non-overlapping intervals as they are

This works because:
- Once sorted, overlaps appear consecutively
- Greedy merging guarantees optimal coverage

---

## Visual Reasoning (OneNote)

### Intuition

- Merge ranges when they collide
- Extend the end boundary when overlapping

---

### Dry Run

![Dry Run](./notes/image.png)

Example: `[[1,3], [2,6]] → [1,6]`


---

## Algorithm
- If intervals is empty → return empty array
- Sort intervals by start time
- Initialize merged array with first interval
- For each interval:
- Compare with last merged interval
- If overlapping:
- Merge by updating end = max(end values)
- Else:
- Add interval to merged list


### Implementation

See: `solution.js`








