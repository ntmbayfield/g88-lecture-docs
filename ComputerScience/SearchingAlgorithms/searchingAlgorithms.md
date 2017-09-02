# Searching Algorithms

---

# Objectives

Describe the 3 common search algorithms as well as identify their time-complexity

- Linear Search on an Unordered Array
- Linear Search on an Ordered Array
- Binary Search

---

# Linear Search on an Unordered Array ...

---

# Check every element until we find it.

---

# This is a type of brute force search.

---

```javascript
function arraySearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; //Found
    }
  }
  return -1; //Not Found
}
```

---

# What is the big O?

---

# O(n)

---

# Linear Search on an Ordered Array ...

---

## Check every element in sequence until we find it or a greater element.

---

```javascript
function arraySearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; //Found
    }

    if (arr[i] < target) {
      return -1; //Because it is ordered, if target is greater, we are done.
    }
  }
  return -1; //Not Found
}
```

---

## Worst case scenario involves iterating through the entire array.

---

# What is the big O?

---

# O(n)

---

# Binary Search

---

## Requires the array to be sorted

---

## Don't start in the beginning, start in the middle.

---

## [0,1,2,3,4,5,6,7,8,9]

## How would we search for target value 6?
---

# Instructions

- Compare the target value to the value in the middle of the array.
- If the target value is equal … return it.
- If the target value is less, then repeat on the lower half on the array.
- If the target value is more, then repeat on the higher half of the array.

---

```javascript
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2)
    if arr[mid] === target; {
      return mid; //Found
    } else if (arr[mid] < target) {
      low = mid+1;
    } else {
      high = mid - 1;
    }
  }

  return -1; //Not Found
}
```

---

# Each iteration eliminates half of the array.

---

# Complexity ...

---

# O(log n)

---

# Questions?
