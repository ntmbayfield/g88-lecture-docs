#[fit]Scope

![](img/scope.jpg)

---

#Objectives

1. Explain the three types of scope.
  - Global
  - Function
  - Block

---

![](img/code.jpg)

> Scope is what variables and functions are available for use on the current line of execution.

---

#Global Scope
^ Available anywhere in the program.

^ In the browser the window object refers to global scope.

```javascript

var scope = 'global';

function testScope() {
	console.log(scope);
}

testScope();

```

---

#Function Scope

^ When a function is invoked a scope is created for that invocation.

```javascript

var scope = 'global';

function testScope() {
	var innerScope = 'function';
	console.log(scope);
	console.log(innerScope);
}

testScope();

```

---

![](img/question.jpg)

> What happens if a variable is declared without var?

```javascript

function testScope() {
  scope = 'function';
}

testScope();
console.log(scope);

```
---

#Shadowing

^ It's possible to have two variables named the same thing, but on different scopes which is called shadowing.

^ In JavaScript, the most local version of a variable is accessed by the interpreter first.

```javascript

var scope = 'global';

function testScope() {
	var scope = 'function';
	console.log(scope);
}

testScope();

```

---

![fit](img/shrug.png)


> How do you access the 'global' scope variable?

---
# Block Scope (ES6)

![](img/block.jpg)

---

#let

---

```javascript

function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

varTest();

```

---

```javascript
function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}

letTest();

```

---

#const

---

```javascript

const job = 'bartender';

job = 'Beverage Dissemination Officer';

console.log('My job title is: ' + job);

```

---

>Explain what is happening here?

---

#Questions?
