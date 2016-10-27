#Javascript Closures

---

# Try this example

```javascript

function count() {
	var count = 0;

  return function () {
    count += 1;
    console.log(count);
  }

}

var testCounter = count();

testCounter();

```

---

# How about this

```javascript

function count() {
	var count = 0;

  return function () {
    count += 1;
    console.log(count);
  }

}

var testCounter = count();

testCounter();
testCounter();
testCounter();
testCounter();


```

---

>Why is this special?

---

##A closure is an inner function that has access to the outer (enclosing) functions variables.

---

#The Scope Chain

---

##A closure has access to its own scope, the outer functions variables, and the global variables.

---

## Closures have access to the outer function's variables - even after the outer function returns.

^ Yep, so when functions in JavaScript execute they ue the same scope chain that was in effect when they were created.

---

## Closures can hide variables.

---

## Closures also allow you to organize the code in a clean and modular way.

---

#Questions?


