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
- constructor/class invocation
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
'use strict'
function hello(name) {
  console.log(this) //undefined
  return 'Hello ' + name + '!'
}

hello()
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
      console.log(this)//{ name: 'Felix', furColor: 'black', talk: [Function: talk] }
    }
}

cat.talk()
```
---


# Constructor/Class Invocation

![](img/construction.jpg)

- `this` is the **newly created object** in a constructor invocation

---


# Constructor/Class Invocation

```js
class MainDocument {

  constructor(name,type){
    this.name = name
    this.type = type
  }
  getName(){
    return this.name
  }
}

let myDoc = new MainDocument("jsNotes", ".js")
console.log(myDoc.getName())
```


---

# Indirect Invocation

![](img/indirect.jpg)

- **Indirect invocation** is performed when a function is called using `myFun.call()` or `myFun.apply()`

- `this` is the **first argument** of `.call()` or `.apply()` in an indirect invocation

---

# Indirect Invocation

```js
'use strict'

function myAwesomeFunction (greet) {
    console.log(`${greet} ${this.name}`)
}

var cat = {
    name: "Felix",
    furColor: "black"
}
var dog = {
    name: "Snoopy",
    furColor: "black and white"
}

myAwesomeFunction.call(cat, "meow") //invoke the fn with cat set as this
```

^^ we will be exploring call/apply/bind in more detail in the future

---

# A problem with `this` before arrow functions

```js
class MainDocument {
  constructor(name,type){
    this.name = name
    this.type = type
  }

  greet(greeting) {
    return function() {
      console.log(`${greeting}, the doc is named ${this.name}.${this.type}`)
    }
  }

}

let doc = new MainDocument('notes', 'pdf')
let helloGreeting = doc.greet("hello")
helloGreeting()
```

---

# Arrow Functions

![](img/method.jpg)

- `this` is the **enclosing context** where the arrow function is defined
- Where it's __defined__, not where it's used.

---

# Arrow Functions Solution

```js
class MainDocument {
  constructor(name,type){
    this.name = name
    this.type = type
  }

  greet(greeting) {
    return (()=> {
      console.log(`${greeting}, the doc is named ${this.name}.${this.type}`)
    }
  }
}

let doc = new MainDocument('notes', 'pdf')
let helloGreeting = doc.greet("hello")
helloGreeting()

```

---

# Objectives - Questions?
By the end of this lesson you should be able to:

- define execution context
- list 4 function invocation types
- begin to identify what `this` is in different contexts
