#[fit]Hoisting

---

> JavaScript has a feature that allows a variable or function to be declared after its used.

---

```javascript

function test() {

	console.log(x);
	
	x = 1;
	var x;
	
	console.log(x);

}

test();

```

---

> The interpreter will first add variables to the scope before executing the code.

---

> The variable will start out as undefined.

---

> Don't do this for readability ... it will make other developers very sad.

---

> One recommendation is to declare all variables at the top of their scope.

> -- Except variables declared with var in for loops.

---

> Regardless of where variables are defined, they are always hoisted to the top of their scope. 

---

```javascript

console.log(x);
var x = 5;

```

#is like

```javascript

var x;
console.log(x);
x = 5;

```

---

>Functions declarations are also hoisted.

---

```javascript
test();

function test() {
	console.log('test');
}

```

---

>Function expressions are *not* hoisted.

---

```javascript

test();

var test = function test() {
	console.log('test');
}

```

---

#Questions?