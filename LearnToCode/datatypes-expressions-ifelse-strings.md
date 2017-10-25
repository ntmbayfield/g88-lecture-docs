theme: Titillium, 1
autoscale: true
slidenumbers: true
<!-- @author: Pete Silva -->

# Torreys Classroom
# Monday Review

---

### Quick Warmup

In order to go over some basic JavaScript concepts, let's follow a tutorial provided by the JavaScript.com team.

It's only 8 lessons and takes less than 5 minutes.

[https://www.javascript.com/try](https://www.javascript.com/try)

---

### Syntax

Let's review some of the basic syntax of JavaScript.

`var` - defines a variable (an object of some value)
`;` - terminator, commonly found at the end of a code operation
`"word"` - quotes create strings, which are a form of data
`function()` - performs some action or method
`{}` - block notation, contains code that can be initialized by a function
`.` - dot notation, allows for the chaining of variables and functions (scope)

JavaScript is an Object-Oriented Language, a common paradigm of coding that occurs in many other languages and can help you learn them as well.

---

#Identifiers

###Used in
- Variable Names.
- Function Names.
- Parameter Names.

###Rules
- Must Start with a letter, _ or $.
- The rest may be letters, numbers, _ or $.

---

#Keywords

- Reserved
- if / function / var / while / this (and more)

```javascript
var pi = 3.14
```

---

### Variables

Variables are essentially containers for storing data, values, etc. In JavaScript, you must __declare__ them with var first, then __define__ them with =

Syntax:

```
var price1 = 5;
var price2 = 6;
var total = price1 + price2;
```

What is the value of `total`?

---

### Variables can store a variety of data types:

`Strings` - “Hello, my name is Lee.”
`Numbers` - 40, 0.15
`Boolean` - True or False
`Null` - literally nothing
`“”` - undefined value; blank
`Functions` - a whole block of code that performs a task

---

# Strings

Any old piece of text. Think "a string of characters".

Any text wrapped in single or double quotes (or backticks) becomes a value known as a string.

```javascript
var x = "Any old string!";
var y = "555-ASTRING";
var z = 555;
```

---

# Expressions

---

### Expressions / Statements

- Expression
 - Something that results in a value.
 - someVar
 - 1 + 1
- Statement
 - A block of code that does something
 - If (x === y) …
 - x = 7;


---

### Operators

- They act like functions
- Different Syntax

```javascript
var five = 2 + 2
```

2+2 in this example is an expression

---

### Conditional Statements

Remember Choose Your Own Adventure books?

Conditional statements work a lot like them and follow the basic format: if, else, else if...

---

### If Statements

if - if what’s in the () is True, then a block of code will run. If it’s False, the code will not run.

```
if (hour < 18) {
  greeting = "Good day";
}
```

---

### Else Statements

else - what if you wanted the code to do something else besides nothing if it’s False?

```
if (hour < 18) {
	greeting = "Good day";
} else {
  greeting = “Go away.”;
}
```

---

### Else if Statements

else if - What if another scenario comes up?

Add an else if in between the if and else statements.

```
if (hour < 18) { greeting = "Good day"; }
else if (hour < 9) { greeting = “OK day”; }
else { greeting = “Go away.”; }
```

This code is actually broken. Can you figure out why?

---

### Equality

What's the difference between =,==, and ===?

---

= is known as the assignment operator It sets variables equal to a specific value.

`var foo = 1`

---

== is known as the loose equality comparison. It compares two items to see if they are of equal value, but it ignores if they are the same exact type of data.

`“1” == 1` evaluates True
`Null == undefined` evaluates True

---

=== is known as the strict equality comparison. It compares the value & type of the items to see if they are exactly the same. In the case of null vs undefined, null is more specifically typed than undefined, so they are not exactly the same value.

`“1” === 1` evaluates False
`Null === undefined` evaluates False

---

### Recap of Conditional Rules

- If statements perform an action if the statement is True
- Else statements perform an action if the statement is False
- Else if statements perform an action if the first is False but the second is True Is there any other way to do this?

---

If they seem solid on all these topics, then lets apply to some exercises together:

sumDouble: http://codingbat.com/prob/p154485
stringTimes: http://codingbat.com/prob/p142270
stringX: http://codingbat.com/prob/p171260

---

fin.
