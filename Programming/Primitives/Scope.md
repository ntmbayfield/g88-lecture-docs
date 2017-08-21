# JavaScript: Scope

---

## Objectives

- Explain the 2 types of scope in JavaScript in all browsers
- (ES2015 introduces a _3rd_ type of scope which we will not talk about today)

---

## Scope

A **scope** is a list of variables and functions available for use on the current line of code (execution).

There are 2 types of scope in JavaScript in all browsers:

1. Global scope
2. Function scope

---

# Global Scope

* Any variable or function defined in the global scope is available for use anywhere in the program.
* In the browser, the `window` global object refers to the global scope.

The `window` object is a collection of variables and functions related to the current `window` of your browser. In a modern browser, every tab has its own global scope and, as a result, its own `window` object.

---

## _Any_ variable defined outside of a function is in the global scope!

```javascript
var name = 'Mary';
console.log(window.name);
```

---

# Function Scope

When a function is invoked, an isolated function scope is created just for that invocation.

```javascript
var a = 'outer';

function myFunction() {
  var b = 'inner';

  console.log(a); // outer
  console.log(b); // inner
}

myFunction();

console.log(a); // outer
console.log(b); // Uncaught ReferenceError: b is not defined
```

---

## Shadowing

* When a function defines a variable or a parameter with the same name as a variable in the scope outside of the function.
  * The function's variable *shadows* the outer scope variable.

```javascript
var a = 'outer';

function myFunction(a) {
  console.log(a); // inner
}

function myFunctionAgain() {
  var a = 'inner again!'
  console.log(a); // inner again!
}

myFunction('inner');
myFunctionAgain();

console.log(a); // outer
```

---

# Scope:
# An analogy

---

### Challenge

What will happen when this code is run?

```javascript
var a = 'outer';

function myFunction() {
  a = 'inner';
  console.log(a); // ???
}

myFunction();

console.log(a); // ???
```

---

# Review

----

# What is the concept of scope? What does it affect?

----

# How do you create a new scope in JavaScript?

---

## Objectives

- Explain the 2 types of scope in all browsers

---

## Resources

* [Everything You Wanted to Know About JavaScript scope](http://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/)
* [StackOverflow Question on Scope](http://stackoverflow.com/questions/500431/what-is-the-scope-of-variables-in-javascript)
