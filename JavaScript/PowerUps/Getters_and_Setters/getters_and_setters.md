
![inline](img/power_up.png)

#[fit]Getters and Setters

---

Objectives

- Define the two types of properties.
- Explain what a getter and a setter are.
- Implement a getter and a setter.
- Explain good reasons for using getters and setters.

---

#Types of Properties

---

# Data Properties

^What you are used to. Contain a value.

---

#Accessor Properties

---

Accessor properties don't contain a value but instead define a function to call when the property is read (called a getter) and a function to call when the property is written to (called a setter).

---

This example adds logging behavior to the property.

```javascript

var person1 = {
	_name: "Mat",
	get name() {
		console.log("Reading name");
		return this._name;
	},
	set name(value) {
		console.log("Setting name to %s", value);
		this._name = value;
	}
};

```

^Even though this example uses _name to store the property data - you could just as easily store the data in a variable or even in another object.


---

Accessor properties only require either a getter or a setter, but they can have both.

^You don't ned to define both a setter and a getter.  

^If you define only a getter the property becomes read-only and any attempt to write to it will fail silently in nonstrict mode and throw an error in strict mode.  

^If you define only a setter, then the property will become write-only and any attempts to read will fail silently.

---

Accessor properties are most useful when you want the assignment of a value to trigger some sort of behavior, or when reading a value requires the calculation of the desired return value.

---

#Questions?