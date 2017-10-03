# Higher Order Functions - Reduce

---

# Objectives
- Review Map and Filter Method
- Explain what the Reduce method does
- List the inputs to the function you pass to reduce
- Solve Problems Using Reduce

---

# Map

---

# Map Review
- An array method
- Takes a function as an input
- Applies that function to every item in the array
- Returns a NEW array that contains transformed data

---

# Filter

---

# Filter Review
- An array method
- Takes a function as an input (the function should return a boolean)
- Tests each item in the array using the function
- Returns a NEW array that contains all items that pass the test

---

# Reduce
Reduce is an incredibly powerful method that allows us to combine all of the result in an array into a single result.

- An array method
- Takes a function and an optional initial value as inputs
- Executes the function for each item in the array
- Returns the value that results from the reduction

---

# What is passed to your function?

---

# Values of the Array
- `previous value`
- `current value`
- `current index`
- `array`

---

# Example
`var array = ['a','b','c','d'];`
`array.reduce(function(prev,curr,index,array));`

### When we start the reduce:
`previousValue is 'a'`
`currentValue is 'b'`
`currentIndex is 1`
`array is ['a','b','c','d']`

---

# But what happens when you give an initial value?

---

# Example
`var array = ['a','b','c','d'];`
`array.reduce(function(prev,curr,index,array), 'z');`

### When we start the reduce:
`previousValue is 'z'`
`currentValue is 'a'`
`currentIndex is 0`
`array is ['a','b','c','d']`

---
# Let's Try It

^https://github.com/gSchool/loop-refactor
