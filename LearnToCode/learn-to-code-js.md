theme: Titillium, 1
autoscale: true
slidenumbers: true
<!-- @author: Pete Silva -->

## Learn to Code JavaScript!

---

### Overview

In this course, we'll be going over the following!

- Basic syntax of JavaScript
- Variables and Functions
- Conditional statements (if, else if, else)
- Build a “Rock, Paper, Scissors” application

While not required, reviewing our HTML & CSS course can help!

---

### Computer Setup

For this workshop, you need to have the following:

- Install a text editor! We recommend Atom.io
- Have an updated web browser! We recommend Google Chrome

---

### What IS JavaScript?

Making its first appearance in 1995, JavaScript was created by an engineer at Netscape to provide a user-friendly, lightweight programming language that can be easily adapted for the rise of the Internet. Now, with HTML and CSS, it is one of the core languages of the Internet and is growing quickly to accommodate beyond the client-side.

JavaScript allows web pages to do more than just “sit there." You can animate, calculate, etc. - you can do it all! It is a great programming bridge between “design” and “development” that allows for endless creativity.

Common confusion: JavaScript is NOT Java. They are largely different programming languages and should not be confused with one another.

---

### A Quick Mini-Tutorial

In order to go over some basic JavaScript concepts, let's follow a tutorial provided by the JavaScript.com team.

It's only 8 lessons and takes less than 5 minutes.

[https://www.javascript.com/try](https://www.javascript.com/try)

---

### Dive a Little Deeper

Let's review some of the basic syntax of JavaScript.

`var` - defines a variable (an object of some value)
`;` - terminator, commonly found at the end of a code operation
`"word"` - quotes create strings, which are a form of data
`function()` - performs some action or method
`{}` - block notation, contains code that can be initialized by a function
`.` - dot notation, allows for the chaining of variables and functions (scope)

JavaScript is an Object-Oriented Language, a common paradigm of coding that occurs in many other languages and can help you learn them as well.

---

### Variables

Variables are essentially containers for storing data, values, etc. In JavaScript, you must declare them with var first, then define them with =

Syntax:

```
var price1 = 5;
var price2 = 6;
var total = price1 + price2;
```

What is the value of `total`?

---

**Variables can store a variety of data types:**

`Strings` - “Hello, my name is Lee.”
`Numbers` - 40, 0.15
`Boolean` - True or False
`Null` - literally nothing
`“”` - undefined value; blank
`Functions` - a whole block of code that does something

---

### Functions

Functions are blocks of code that perform tasks for us. In JavaScript, you follow the general syntax: 1) declare, 2) define, 3) call (invoke).

Syntax:

```
var multiply = function(a,b){
  return a * b
};
multiply(2,4);
```

~What is the value produced by this function?

---

### More function syntax:

`Parameters` - (a,b,c) - placeholders for what will get passed into the function for usage
`Arguments` - real values passed into function, they become the named parameters
`Block` - {...} - the function’s operational code
`Return` command - the output of the function

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

```var foo = 1```


== is known as the abstract equality comparison. It compares two items to see if they are of equal value, but it ignores if they are the same exact type of data.

``“1” == 1` evaluates True
`Null == undefined` evaluates True

=== is known as the strict equality comparison. It compares the value & type of the items to see if they are exactly the same. In the case of null vs undefined, null is more specifically typed than undefined, so they are not exactly the same value.

`“1” === 1` evaluates False
`Null === undefined` evaluates False

---

### Recap of Conditional Rules

- If statements perform an action if the statement is True
- Else statements perform an action if the statement is False
- Else if statements perform an action if the first is False but the second is True Is there any other way to do this?

---

### LET'S CODE

Time for us to make our Rock, Paper, Scissors application!

- Go to: [github.com/GalvanizeOpenSource/Learn-To-Code-JavaScript](https://github.com/GalvanizeOpenSource/Learn-To-Code-JavaScript)
- Download the zip file of our code
- Open the files in your text editor: *index.html, CSS/style.css*
- Open the *index.html* file in your web browser

---

### 4 Steps To Building This App

- Get the user's choice
- Get the computer's choice
- Teach the computer how to guess rock, paper, or scissors
- Compare their choices and tell the user the result

---

### Want to learn more?

*Visit one of our other Learn to Code sessions:*

[Learn to Code HTML & CSS](https://github.com/GalvanizeOpenSource/Learn-To-Code-HTML-CSS)
[Learn to Code Git and GitHub](https://github.com/GalvanizeOpenSource/Learn-To-Code-GitHub-Git)

*You can also check out our part-time courses at [galvanize.com/part-time-courses](http://www.galvanize.com/part-time-courses)*

HTML & CSS for Beginners (~ 8 weeks)
Web Dev Foundations with JavaScript (8 weeks)
Data Science Fundamentals: Intro to Python (6 weeks)

---

### Galvanize Full Stack Web Dev Immersive Program

24 Week Full-Time Program
Scholarships available for those who qualify

To learn more, email our enrollment department at enrollment@galvanize.com.
