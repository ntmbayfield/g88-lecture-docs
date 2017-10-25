![right](img/clean.gif)

# [fit]Clean

# [fit]Code

---

#Objectives

By the end of this lesson you will be able to:

- Explain why you should strive for clean code
- Identify why a snippet of code is not clean
- Choose two things you will focus on this week

---

#X

```javascript
var x,y,z;

x = 5;

if (x === 5) {
  	console.log(y);
} else { return false; }
function Person (firstname, lastname, age, weight, isAlive, hairColor, height, city, state, country) {
    //Create a Person object
}
```

---



![](http://cl.ly/image/2v3K3f3d0J1X/britney.gif)

---

> **“Programming is the art of telling another human what one wants the computer to do.”**
>
> — Donald Knuth

---

![](img/wtf.gif)

---

# **Clean Code Helps You and Teammates:**

- Read code
- Change code
- Keep the code working
- Reduce the cost of maintenance
- Fix bugs
- Reduce the time to modify code
- Enjoy programming more
- Make life easier

---

#X

```javascript
function Person (firstname, lastname, age, weight, isAlive, hairColor, height, city, state, country) {
    //Create a Person object
}
```

---

![left](img/confused1.gif)

# Many Parameters

---

#√

```javascript
// Can anyone remember the parameters and order of the many version?
function Person (spec) {
    //Create a Person object
    this.firstname = spec.firstname;
    this.isAlive = spec.isAlive;
}
```

------

#X

```javascript
function checkSystem (isReady, message) {var output; if (isReady) {
		output = 'all systems go! ' + message;
} else {
output = 'I can\'t let you do that.'}return output;}
```

---

![left](img/crying.gif)

# Inconsistent Indentation

------

#√

```javascript
function checkSystem (isReady, message) {
	var output;
	if (isReady) {
		output = 'all systems go! ' + message;
	} else {
		output = 'I can\'t let you do that.';
	}
	return output;
}
```



------

#X
```javascript
function calculatePrice (retailPrice) {
    return retailPrice + retailPrice * 0.08 + retailPrice * 0.02;
}
```

------

![right](img/angry.gif)

# Magic Numbers

---

#√

```javascript
function calculatePrice (retailPrice) {
    var salesTax = 0.08;
    var viceTax = 0.02;
    return retailPrice + retailPrice * salesTax + retailPrice * viceTax;
}
```

---

#X

```javascript
function sendMessage() {
    var message = $("#messageBox").val();
    var user = $("#user").val();
    var time = new Date();
    emitMessage({ message: message, user: user });
}
// Did the developer intentionally not use “time”,
// or did he accidentally leave it out and it is a bug?
```

---

![left](img/facepalm.gif)

# Unused Variables

---

#√
```javascript
function sendMessage() {
    var message = $("#messageBox").val();
    var user = $("#user").val();
    emitMessage({ message: message, user: user });
}
```

---

#X

```javascript
function sendMessage() {
    var message = $("#messageBox").val();
    if (message.length <= 3) {
        throw new Error('message not long enough');
    }
    var user = $("#user").val();
    var message = { message: message, user: user };
    var server = getServer();
    server.connect();
    var result = server.send(message);
    if (!result.success) {
        throw new Error(result.message);
    }
}
```

---

![left](img/what the hell.gif)

# Long Functions

---

#√
```javascript
function sendMessage() {
    //handle errors in functions and handle complexity
    var message = getMessageObject();
    server.sendMessage(message);
}
```

---

#X

```javascript
function checkoutBook() {
    var maxBooks = 3;
    var book = getBook(), user = getUser(), booksOut = user.getBooksOut(), name = user.name;
    if (booksOut.length >= maxBooks) {
        throw new Error('Too many books checked out', user);
    }
    user.checkout(book);
    console.log('Thanks for using the library ' + name);
}
```

---

![right](img/doctorwho.gif)

# Long Lines

---

#√

```javascript
function checkoutBook() {
    var maxBooks = 3;
    var book = getBook();
    var user = getUser();
    var booksOut = user.getBooksOut();
    if (booksOut.length >= maxBooks) {
        throw new Error('Too many books checked out', user);
    }
    user.checkout(book);
    console.log('Thanks for using the library ' + user.name);
}
```

---

#X

```javascript
function p(b, e) {
    if (e === undefined) {
        e = 0;
    }
    var r = 1;
    for (var c = 0; c < e; c++) {
        r *= b;
    }
    return r;
}
```

---

![left](img/colbert.gif)

# [fit] Confusing

# Names

---

#√

```javascript
function power(base, exponent) {
    if (exponent === undefined) {
        exponent = 0;
    }
    var result = 1;
    for (var count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
```

---

#X

```javascript
$('div').click(function () {})
$('div').css('background-color', 'red')
$('div').hide()
```

---

![right](img/angry2.gif)

# Bad jQuery Selectors

---

#√

```javascript
var $divs = $('div')
$divs.click(function () {})
$divs.css('background-color', 'red')
$divs.hide()
```

---

#[fit]Not Just
#[fit]Javascript

---

#X

```css
div table tr td ul li #con, div div div div span #con {color:red;background-color:blue;margin:0 0 0 10px;
padding: 0 10px 10px 100px;}
```

---

![left](img/cube.gif)

# Bad CSS

----

#√

```css
#con {
  color: red;
  background-color: blue;
  margin: 0 0 0 10px;
  padding: 0 10px 10px 100px;
}
```

---

#X

```html
<body><div><div><span>
puppies</span>
</div>
              </div><div>
                    kittens
</div></body>
```

---

![right](img/doubleFacepalm.gif)

# Bad HTML

---

#√

```html
<body>
  <div>
    <div>
      <span>puppies</span>
    </div>
  </div>
  <div>kittens</div>
</body>
```
---

#[fit]What will you
#[fit]focus on this week?

---

# Better Readability

- ~~Inconsistent Indentation~~ Use proper indentation and spacing
- ~~Long Lines~~ Use line breaks to make code more readable
- ~~Confusing Names~~ Make names more descriptive

---

# Simple Clean Ups

- ~~Many Parameters~~ Use fewer parameters
- ~~Magic Numbers~~ Create descriptive variables for numbers
- ~~Unused Variables~~ Remove unused variables

---

# Refactor & Make More Efficient

- ~~Long Functions~~ Make functions shorter (do one thing well)
- ~~Bad jQuery Selectors~~ Name selectors and choose smart selectors
