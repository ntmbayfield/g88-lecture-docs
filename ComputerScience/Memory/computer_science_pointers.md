# Pointers

---

## Objectives

By the end of this lesson you will be able to:

- Describe what a pointer is
- Explain what dereferencing a pointer means
- Compare pointer behavior to Javascript array/object behavior

---

## A pointer is a programming language object, whose value refers directly to (or "points to") another value stored elsewhere in the computer memory using its address.

---

## A pointer is a reference type

---

## A pointer refers to a memory location

---

## Pointer data types are available in lower level languages like C

---

## Let's look at some C code

---

# `int a = 5;`

^ create an integer

---

# `int *b = &a;`

^ create a pointer and assign it the memory location of a. The & gets the 'address of' a.

---

# `*b = 25;`

^ change the value that lives at the memory location in the pointer to 25

---

### dereferencing is the term used for getting the __value__ at the memory location that a pointer points to

# `printf("%d", *b);`

---

[example](https://repl.it/KAxO)

```c
#include<stdio.h>

main()
{
  int a = 5;
  int *b = &a;
  *b = 25;
  printf("%d", *b);


}
```

---

## Does this behavior remind you of anything in Javascript?

^ In JS we have used reference types (arrays and objects) but you will not get an actual memory location if you print them. You will get the value.

---

## [What will get logged?](https://repl.it/KAxo)

```javascript

var a = {state: "Colorado"};
var b = a;
b.state = "CO";

console.log("a is:",a);
console.log("b is:", b);

```

^ b is not a pointer since js  does not have this type, but it does hold a reference to the location of the value of a and when we change b we are changing a
In the c language you can actually pass a pointer to where a value is stored


---

## Turn and talk to a neighbor

- Describe what a pointer is
- Explain what dereferencing a pointer means
- Compare pointer behavior to Javascript array/object behavior

^ http://whatsthepointy.blogspot.com/2013/11/javascript-does-not-have-pass-by.html
^JavaScript is always and only a "pass by value" language. When you pass a reference to a mutable object, you're passing a value — the reference to the object.
