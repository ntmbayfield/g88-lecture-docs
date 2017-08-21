## Java for JavaScript Developers

![java](https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fsharealogo.com%2Fwp-content%2Fuploads%2FJava_ai.png&f=1)

---

# Standards

* Classical object-oriented programming
* Writing object-oriented programs in Java

---

# Success Criteria

* Convert basic JavaScript programs to Java programs
* Compile and run basic Java programs

---

## Java

* Java is a general-purpose computer programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible.

* "write once, run anywhere" (WORA), meaning that compiled Java code (bytecode) can run on all platforms that support Java without the need for recompilation.

* The language derives much of its syntax from C and C++, but it has fewer low-level facilities than either of them.

---

## History

![james](http://www.javatpoint.com/images/j1.jpg)

* Java was originally developed by James Gosling at Sun Microsystems (which has since been acquired by Oracle Corporation) and released in 1995 as a core component of Sun Microsystems' Java platform.

[http://oracle.com.edgesuite.net/timeline/java/](http://oracle.com.edgesuite.net/timeline/java/)

Notable years: 1991, 1995, 2006, 2009

---

## Java is compiled
- Java is compiled to bytecode - a type of machine readable code.
- The Java Virtual Machine (JVM) executes the bytecode.
- JavaScript is interpreted - the JS engine reads and executes the code line by line as it is written.

---

## Use classes and `main`
- Java code must be contained within a `class`.
- A class may contain methods.
- The `main` method is a special method that is executed when you run the class file with the `java` command.

---

## Must declare the type of _everything_
- methods must have a return type.
- if a method does not return anything, it must have a return type of `void`.
- variables must have a type.
- parameters must have a type.
- variables must have a type.
- variables declared inside of methods are known as local variables.

---

## Classes instead of Plain Objects
- Classes are blueprints for objects.
- Classes can be used as types.
- Constructors are named the same as the class.
- Constructor definitions do not have a return type.
- Objects are instantiated / created by invoking the constructor.

---

## Static vs Instance
- Static fields are attached to the class.
- Static fields can be used with out instantiating the class (without constructing an object.)
- Static fields are shared across all object instances constructed from the class.
- Static variables are known as Class variables.
- Instance fields are attached to the object instances constructed from the class.
- Instance fields are unique to each instance of the object.

---

## `this` in Java
- `this` is predictable and consistent in Java.
- `this` always refers to the object instance.

---

## Methods are _not_ first class
- Methods are not references.
- Variables cannot have a method as a value.
- Methods cannot be passed into other methods.

---

## Java arrays
- Java arrays do not have helper methods.
- Java arrays have a specified length.
- Java arrays may only contain a single type.
- Java array literal syntax uses curly braces.

---

## Java Strings
- Strings are reference types.
- String literals with the same content share a reference.
- String objects with the same content do not share a reference.
- Strings are immutable, so when we modify them we are actually just creating a new String.
- On reference types, `==` compares references.
- String method `equals` and `equalsIgnoreCase` compare values.
- When testing for equality, never use `==` and instead use `equals`.

---

# Review

---

## What does void indicate?

---

## What is a type?

---

## Convert this JavaScript to Java

```js
var names = ["Alice", "Bob", "Cory"]
var result = ""
for (var i = 0; i < names.length; i++) {
  result += names[i]
}
console.log(result);
```

---

# Success Criteria

* Convert basic JavaScript programs to Java programs
* Compile and run basic Java programs

---

## Exercise

* Fork/Clone
* Read through Unit-1 and do _all_ of the **You do** exercises
* Unit-1 Exercise 01 and 02
* Pull request!
