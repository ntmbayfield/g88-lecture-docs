![](img/0_Cheerios.jpg)

# Big-O
# Notation

---

![](img/0_Pattern.jpg)

#Objectives

## Describe what Big-O means?
## Give different examples of algorthms and their Big-O.

---

![](img/1_Shuttle.jpg)

#How fast is the algorithm?

^Big-O notation is how developers discuss the complexity of an algorithm as a way to understand how fast a program will run given it's input.

---

![](img/2_Tortoise.jpg)

# Big-O is the worst case.

^Big-O notation deals with the worst case scenario for the algorithm.

---

![](img/5_Pattern.jpg)

$$O(1)$$ or *Constant Time*

Example: Accessing an element by the index.

^The algorithm might have to look at every element in the array to find the value.

---

![](img/6_Pattern.jpg)

Still $$O(1)$$

```javascript

function print50nums() {
  for (var i = 0; i < 50; i++) {
    console.log(i);
  }
}

```

^The runtime of the above example is not bound by a variable sized input. Instead it is bound by the constant 50. The runtime of the program is O(50), but since constants do not matter in big-O notation, we simplify it to O(1).

---

![](img/3_pattern.jpg)

$$O(n)$$ or *Linear Time*

Example: Finding an item in an unsorted array.

^The algorithm might have to look at every element in the array to find the value.

---

![](img/7_Log.jpg)

$$O(\log n)$$ / *Logarithmic time*

Example: Binary Search

---

![](img/4_Pattern.jpg)

$$O(n^2)$$ / *Quadratic time*

Example: Many kinds of sorts.

---

![](img/0_Pattern.jpg)

# Bubble Sort Folk Dance Video

---

![](https://www.youtube.com/watch?v=lyZQPjUT5B4)

---

![](img/4_Pattern.jpg)

$$O(nlg(n))$$ / *What about nlg(n)?*

Example: Mergesort & Quicksort.

---

![](img/0_Pattern.jpg)

# Mergesort Video

---

![](https://www.youtube.com/watch?v=XaqR3G_NVoo)

---

![fit](img/8_graph.png)

---

![](img/0_Pattern.jpg)

#Objectives

## Describe what Big-O means?
## Give different examples of algorthms and their Big-O.
