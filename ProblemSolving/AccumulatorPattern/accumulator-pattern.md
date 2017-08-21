# The Accumulator Pattern

---

## Objective: Write functions that use the accumulator pattern to solve problems

---

## Success Criteria

- Define a function using the correct number of parameters
- Declare and initialize an accumulator with a sensible default (and return it)
- Iterate for the correct number of times
- Alter the accumulator

---

## Rationale

The basic accumulator pattern is the basis for a huge number of algorithms.  Once you know how to solve basic problems using accumulator patterns you will have a strong fundamentals in algorithm design.

---

## How to get started

Right off the bat, it's important to know that you don't generally write code the way you write English.  When you write in English, you write top-to-bottom, left-to-right.  When you write code it's often best to write code from the outside in.

---

### Accumulator Pattern: Basic Steps

1. Define the function
1. Declare and `return` the result variable
1. Set up the iteration
1. Alter the accumulator as necessary

---

## Detailed Steps

1. Identify the inputs and write a function definition with those inputs
2. Identify the output
3. Define the `result` variable and return it
4. Determine how to iterate
5. Alter the accumulator `result` inside the iteration

---

### 1. Identify the inputs and write a function definition with those inputs
  - How many are there?
  - What are their types?

```js
function joinWords (words) {

}
```

---

### 2. Identify the output
  - What will the function return when the input is normal?
  - When will the function return when the input is empty?

---

### 3. Define the result variable and return it
  - Initialize it to whatever the output is _in the empty case_

```js
function joinWords (words) {
  var result = "";

  return result;
}
```

---

### 4. Determine how to iterate
  - How many times are you going to iterate?

```js
function joinWords (words) {
  var result = "";
  for (var i = 0; i < words.length; i++) {
  }
  return result;
}
```

---

### 5. Alter the accumulator `result`, using the information from the loop

```js
function joinWords (words) {
  var result = "";
  for (var i = 0; i < words.length; i++) {
    result += words[i];
  }
  return result;
}
```

---

## Review: Detailed Steps

1. Identify the inputs and write a function definition with those inputs
2. Identify the output
3. Define the `result` variable and return it
4. Determine how to iterate
5. Alter the accumulator `result` inside the iteration

---

# More Reading:

* [Choosing Initial Values](https://learn.galvanize.com/content/gSchool/javascript-curriculum/master/Accumulator%20Pattern/Choosing%20Initial%20Values.md)
* [Iterating](https://learn.galvanize.com/content/gSchool/javascript-curriculum/master/Accumulator%20Pattern/Iterating.md)
* [Altering the Accumulator](https://learn.galvanize.com/content/gSchool/javascript-curriculum/master/Accumulator%20Pattern/Altering%20the%20Accumulator.md)

---

# Exercises

[WD JavaScript Fundamentals: Part 2](https://github.com/gSchool/wd-javascript-fundamentals)

---

## Success Criteria

- Define a function using the correct number of parameters
- Declare and initialize an accumulator with a sensible default (and return it)
- Iterate for the correct number of times
- Alter the accumulator

---

More Accumulator Pattern Exercises:

- https://github.com/gSchool/csv-to-markdown-js
- https://github.com/gSchool/word-cloud-js
- https://github.com/gSchool/amusement-parks-objects-arrays-js
- https://github.com/gSchool/grading-js
- https://github.com/gSchool/round-robin-js
- https://github.com/gSchool/crm-data-challenge-with-json
