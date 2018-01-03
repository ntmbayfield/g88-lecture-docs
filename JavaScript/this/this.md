### [fit]What's `this`?

![left](img/jack.gif)

---

# Objectives
By the end of this lesson you should be able to:

- define execution context
- list 4 function invocation types
- begin to identify what `this` is in different contexts

---

>  A function's `this` keyword refers to different things depending on the function's execution context.

---

# Execution Context

## The setting a function performs in.
### In other words, where was the function called?

---

# `this` stated another way...

- `this` does NOT refer to the function itself
- `this` is the calling context of the function- the object the function exists inside of.
- `this` allows you to pass around context either explicitly or implicitly

---

# 4 function invocation types:

- function invocation
- method invocation
- constructor invocation
- indirect invocation

^ Let's explore the invocation types

---

# Function Invocation

![](img/function.jpg)


- `this` is the **global object** in a function invocation.

- `this` is **undefined** in a function invocation in strict mode.

---
# Function Invocation

```js
'use strict';
function hello(name) {
  console.log(this); //undefined
  return 'Hello ' + name + '!';
}
```

---

# Method Invocation

![](img/lightBulb.jpg)

- A **method** is a function stored in a property of an object.

- `this` is the **object that owns the method** in a method invocation.

---

# Method Invocation

```js
var cat = {
    name: "Felix",
    furColor: "black",
    talk: function() {
      console.log(this);//{ name: 'Felix', furColor: 'black', talk: [Function: talk] }
    }
}
```
---


# Constructor Invocation

![](img/construction.jpg)

- `this` is the **newly created object** in a constructor invocation

---


# Constructor Invocation

```js
function Document(name,type){
  this.name = name;
  this.type = type;
  this.getName = function (){
      console.log(this);//Document { name: 'jsNotes', type: '.js', getName: [Function] }
      return this.name;
    }
}

let myDoc = new Document("jsNotes", ".js")
```


---

# Indirect Invocation

![](img/indirect.jpg)

- **Indirect invocation** is performed when a function is called using `myFun.call()` or `myFun.apply()`

- `this` is the **first argument** of `.call()` or `.apply()` in an indirect invocation

---

# Indirect Invocation

```js
'use strict';

function defaultContext () {
    console.log(this);
}

var cat = {
    name: "Felix",
    furColor: "black"
};

defaultContext(); //undefined
defaultContext.call(cat); // { name: 'Felix', furColor: 'black' }
```

^^ we will be exploring call/apply/bind in more detail in the near future

---

# A problem with `this` before arrow functions

```js
function document(name,type){
  this.name = name;
  this.type = type;

  setTimeout( function() {
      console.log(this); // Timeout object
      console.log(this.name); //undefined
    },3000);
}
```

---

# The solution: A little of `this` and `that`

```js
function document(name,type){
  this.name = name;
  this.type = type;
  let that = this;

  setTimeout( function() {
      console.log(that); // Global object
      console.log(that.name); //myDoc
    },3000);
}

document('myDoc', 'js');
```

^ before arrow functions we might write the code like so. Notice `that` vs `this`

---

# Another solution: `bind`
### `bind` returns a function that has `this` set explicitly to the argument that you passed it

```js
function document(name,type){
  this.name = name;
  this.type = type;

  setTimeout( function() {
      console.log(this); // Timeout object
      console.log(this.name); //undefined
    }.bind(this),3000);
}
```

---

# Arrow Functions

![](img/method.jpg)

- `this` is the **enclosing context** where the arrow function is defined
- Where it's __defined__, not where it's used.

---

# Arrow Functions Solution

```js
function document(name,type){
  this.name = name;
  this.type = type;

  setTimeout( () => {
      console.log(this); // Global object
      console.log(this.name); //myDoc
    },3000);
}

document('myDoc', 'js');

```

---

# Objectives - Questions?
By the end of this lesson you should be able to:

- define execution context
- list 4 function invocation types
- begin to identify what `this` is in different contexts
