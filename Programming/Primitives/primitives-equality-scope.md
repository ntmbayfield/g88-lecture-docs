# JavaScript Concepts

---

## Standards:
* Describe how key parts of JavaScript work

---

## Objectives - Review:

### Describe how key parts of JavaScript work

* List types and describe which ones are primitive and which are reference types
* Describe the difference between primitive and reference types
* Describe the difference between == and ===
* Describe the various kinds of scope in JavaScript

---

## Write down your answers to these questions:
(Try to answer from memory first, but it's OK to look them up.)

* What are the types in JS? Which ones are primitive? Which ones are reference?
* What is the difference between primitive and reference types?
* What is the difference between `==` and `===`?
  * What is type coercion?
* What are the different kinds of scope in JS? What are the differences between them?

----

### What are the types in JS? Which ones are primitive? Which ones are reference?

### Primitive Types:
* Boolean
* Null
* Undefined
* Number
* String
* Symbol (in ES2015)

### Reference Types:
* Object (function, Array, etc.)

[MDN: JavaScript Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

----

### What is the difference between primitive and reference types?

* Objects are aggregations of properties. A property can reference an object or a primitive.
* Primitives are values, they have no properties
* All primitives are immutable (cannot be changed).
* Primitives are passed by value, Objects are passed by reference.

[MDN: Glossary - Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)

[Wikipedia: Primitive data type](https://en.wikipedia.org/wiki/Primitive_data_type)

[The Secret Life of JavaScript Primitives](https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/)

----

### What is the difference between `==` and `===`?

* `==` is Loose Equality
  * compares two values for equality, _after_ converting both values to a common type
  * Uses the [Abstract Equality Comparison Algorithm](http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3)
* `===` is the identity or Strict Equality
  * compares two values for equality. Neither value is converted before being compared
  * Uses the [Strict Equality Comparison Algorithm](http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.6)

[MDN: Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

[MDN: Equality Comparisons and Sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

[JavaScript Equality Table](http://dorey.github.io/JavaScript-Equality-Table/)

----

## What is type coercion?
[See the ES5: The Abstract Equality Comparison Algorithm](http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3)

----

## What are the different kinds of scope in JS? What are the differences between them?

* global - variables are available _anywhere_ in the program
* function (or local) - variables are only available _inside_ the function they are declared in.

[MDN: Variable Scope](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Variable_scope)

---

## Objectives - New Stuff:

### Describe how key parts of JavaScript work

* Define and describe IIFEs and why they are used
* Describe how hoisting works
* Define higher order functions
* Describe closures
* Use call, apply, bind to set the value of `this`
* Describe asychronous execution with the event loop using the words stack, heap, queue and tick
