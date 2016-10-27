#IIFEs
### Immediately Invoked Function Expressions

---

> If you look at enough JavaScript code, you will eventually come across ...

```javascript
(function () {
    // code
})();

```

---

##This is an example of a immediately invoked function expression ("iffy").

---

##This will create and immediately invoke the function expression.

---

>Why?

---

###The primary reason is variable protection and data privacy.  Since variables are scoped to the function, they will not be available outside it.

---

###IIFEs allow you to control the scope of all your declarations.  

---

###This helps you not pollute the global environment.

---

###An IIFE is often used to create scope to encapsulate modules.  Many libraries use it which is why you see this pattern everywhere in JavaScript.

---

###Questions?