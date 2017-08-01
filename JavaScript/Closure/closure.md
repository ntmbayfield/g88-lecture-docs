#Javascript Closures

![](img/chainlink.jpg)

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

![](img/onering.jpg)

---

##A closure is an inner function that has access to the outer (enclosing) function's variables.

---

# The Scope Chain

![](img/chain.jpg)

---

##A closure has access to its own scope, the outer function's variables, and the global variables.

---

## Closures have access to the outer function's variables - even after the outer function returns.

^ Yep, so when functions in JavaScript execute they use the same scope chain that was in effect when they were created.

---

## Closures can hide variables.

![](img/hiding.jpg)

---

## Closures also allow you to organize the code in a clean and modular way.

![](img/storage.jpg)

---

# Questions?


