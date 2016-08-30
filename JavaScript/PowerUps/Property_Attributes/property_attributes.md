#Property Attributes

---

Objectives

---

#Common Attributes
#Enumerable and Configurable

---


#Enumerable means you can iterate over the property.

^using for in or Object.keys()

---

#Configurable determines whether a property can be changed.

^using delete

---

#By default all properties you declare are enumerable and configurable.

---

#[fit]```Object.defineProperty()```;

---

#Accepts 3 arguments

1. The object that owns the property.
2. A property name.
3. A property descriptor object containing what attributes to set.

---

Example

```javascript

var teacher = {
	name: "Mat"
};

Object.defineProperty(teacher, "name", { enumerable: false });

```

---

```javascript

console.log("name" in teacher);

//true

var properties = Object.keys(teacher);

console.log(properties.length);

//0


```

---

```javascript

Object.defineProperty(teacher,"name", { configurable: false });

// Try to delete property

delete teacher.name;

console.log("name" in teacher);

//true

console.log(teacher.name);

//"Mat"

```

---

```javascript

Object.defineProperty(teacher,"name", { configurable: true });

// VM380:1 Uncaught TypeError: Cannot redefine property: name

^Effectively name is locked down as a peoperty on teacher.
^You cannot make a nonconfigurable property configurable again.

```

---

#Data Property Attributes

#Value and Writable

^By default all values are properties are writable unless you specify otherwise.

---

```javascript

// Typical Object Literal

var teacher = {
	name: "Mat"
};

// Here is a more verbose alternative

var teacher = {};

Object.defineProperty(teacher, "name", {
	value: "Mat",
	enumerable: true,
	configurable: true,
	writable: true
});

```
^Object.defineProperty will add a property if it doesn't exist.

^Properties created in this manner will get their defaults if no value is specified.  Especially troublesome if it is not writable or configureable.

---

```javascript

// Careful

Object.defineProperty(teacher, "name", {
	value: "Mat"
});

console.log("name" in teacher); // true

console.log(teacher.propertyIsEnumerable("name")); // false

delete teacher.name; // Fails!

teacher.name = "Teddi" // Fails!

//Why???

```

^enumerable, configurable and writable are given default values - which for boolean are false.

---

#Accesor Property Attributes

---


