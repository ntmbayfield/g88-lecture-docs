# Sorting Algorithms

---

## Objectives

Understand the steps to implement ...

1. Bubble sort algorithm
1. Selection sort algorithm
1. Insertion sort algorithm

---

## Bogosort
1. Randomly shuffle the list.
1. Check if it is sorted.
* If the list is not sorted, repeat steps 1 and 2.
* If the list is sorted return the sorted list.

---

## Bubble Sort
```
1. For each element in the list, look at the element to the right.
2. If the value on the left is greater than the value on the right, swap the two values.
Keep swapping until you're at the end of the array. Then move onto the next element in the array and repeat.
```

---

### Bubble Sort
![inline](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/175/bubblesort.gif)

---

## Selection Sort

```
1. Pick the left-most item in the "unsorted section". Call this the "current minimum".
2. Compare this current minimum to each item in the unsorted section.
  * If any item in the unsorted section is smaller than the  current minimum, set that item as the current minimum.
  * At the end of the "unsorted section" the "current minimum" must be the minimum value in the unsorted section.
3. Swap the "absolute minimum" to the left-most index in the "unsorted section".
4. This item is now the "right most" member of the "sorted section".
```

---

### Selection Sort
![inline](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/174/selectionsort.gif)

---

## Insertion Sort

```
1. Select the left-most item in the "unsorted section", call this the "current item".
2. Select the right-most index of the "sorted section" and call this element "current sorted item".
  * Compare the "current item" to the "current sorted item"
  * If "current item" is less than the value of "current sorted item", swap the two.
  * Now update "current sorted item" to be the item to the left of "current item's" new position.
  * Repeat this process until "current item" is greater than or equal to the "current sorted item".
    Now "current item" is part of the "sorted section".
3. Repeat until the "unsorted section" is empty.
```

---

### Insertion Sort
![inline](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/173/insertionsort.gif)

---

## CFU

https://www.youtube.com/watch?v=kPRA0W1kECg
