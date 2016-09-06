![left](img/es6-logo.png)

#[fit]Enhanced 
#[fit]Object
#[fit]Properties 
 
---

#[fit]Property Shorthand

---

#Then

```javascript

function es5property() {
	let x=1;
	let y=2;
	return { 
		x:x, 
		y:y 
	}
}

```

---

#Now

```javascript

function es6PropertyShorthand() {
	let x=1;
	let y=2;
	return { x, y }
}

```

---

#[fit]Computed Property Names

---

#Then

```javascript

var num = 42;

var obj = {
    foo: "bar"
};
obj[ "baz" + num ] = 42;

```

---

#Now

```javascript

var code = '1';
var name = 'Infinity'

function propName(name) {
		return name;
}

var obj = {
    // Computed (dynamic) property names
    [ 'prop_' + (() => 42)() ]: 42,
	[ 'prop_' + code ]: 1,
	[ 'prop_' + name.toUpperCase() ]: 'INFINITY',
	[ 'prop_' + propName('dynamic') ]: 'Dynamic'
};

```

---

#[fit]Method Properties

---

```javascript

var methodProperties = {
	sum (a,b) { // Method Shorthand
		return a + b;
	},
	es5Sum: function (a,b) { // ES5 Way
		return a + b;
	},
	arrSum : (a,b) => a+b // Arrow Function
}

```

---

#[fit]Questions?