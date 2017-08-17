# "Advanced" Sorting

### n²?? We can do better than that!!

---

# Objectives

* Implement a quicksort algorithm
* Analyze the Big O of quicksort

---

### Bubble, Selection, and Insertion sort

These sorting methods are fairly straight forward, but are O(n²)

This is fine for smaller arrays, but for larger arrays, we can (and must) do better.

---

# Divide and Conquer

- The next element can be one of several choices
- We only need to select one of the choices

^ This cuts down on the number of elements we need to look at
More information on identifying the O of logn of an algorithm - http://stackoverflow.com/questions/2307283/what-does-olog-n-mean-exactly

---

# Quick Sort
#### Perform better _on average_ as the size of the array grows

---


## Quick Sort

#### Quick sort works by choosing a pivot, and sorting the rest of the array around the pivot.

---

## Quick Sort Steps:

1. Take an element in the array and refer to it as the "pivot." For simplicity, we'll take the first element in the array to be the pivot. (As you'll see, this is a bad choice if the array is already sorted. It makes the algorithm a little easier to reason about though, so we'll take the tradeoff.)
1. Compare each of the other elements to the pivot. If it's less than the pivot value, move it to the left of the pivot. If it's greater, move it to the right. Don't worry about where on the left or right you're putting these values; the only thing that matters is comparisons to the pivot.
1. Once you're done, the pivot will be in the right place, and you can then recursively repeat this process with the left and right halves of the array.

---

# Quick Sort Video

---

![](https://www.youtube.com/watch?v=MZaf_9IZCrc)

---

# Quick Sort: Steps to Code



---

### Quick Sort in place

We can implement quick sort in place with a helper function `partition`.

---

### Partition

```js
function partition(arr, left, right) {
  // 1. Set the pivot value to be the value at the left index, and set a variable called partitionIndex equal to left.
  var pivotValue = arr[left];
  var partitionIndex = left;

    // The partitionIndex will help us keep track of where to perform our swaps so that we wind up with values correctly placed on either side of the pivot.
  // 2. For every index greater than left and less than right + 1, compare the array value to the pivot value.
  for (var i = left + 1; i < right + 1; i++) {
    // 3. If the array value at the given index is less than the pivot value,
    //increment the partition index and swap the array value with the value at the partition index.
    if(arr[i] < pivotValue){
      partitionIndex++;
      swap(arr,i,partitionIndex);
    }
  }
  // 4. At the end, swap the pivot value with the value at the partition index
    //(this ensures that the pivot ends up in between values less than it and values greater than it).

  // 5. Return the partition index.

}
```

---

### Quick Sort with Partition

```js
//add default values for left and right
function quickSort(arr,left=0, right=arr.length - 1) {
  // 1. If left is less than right...

  // 2. declare a variable called partitionIndex which is equal
  //to the result of a call to partition,
  // passing in arr, left, and right.

  //3. After the call to partition, perform a quicksort to the
  //two subarrays to the left and right of the partitionIndex.

  // 4.. Return arr.

}
```

---

### Quick Sort complexity

n iterations to choose a pivot.

Best case log(n) iterations to partition around each chosen pivot.
Worst case n iterations to partition around each chosen pivot.

O(n) * O(log n) = O(n log(n))

O(n) * O(n) = O(n²)

---

# Review

* Implement a quicksort algorithm in Javascript
* Analyze the Big O of quicksort
