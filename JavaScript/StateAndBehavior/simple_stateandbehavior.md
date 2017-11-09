# State and Behavior

---

# Objectives

- Explain what state and behavior are
- Create objects that contain state and behavior

---

# State: properties

state holds the value of the property at any given point in time


```javascript
function Car(model) {
  this.model = model;
}

```

---

# Behavior: methods

A method is a function that is called on an object


```javascript
function Car(model) {
  this.model = model;

  this.printModel = function() {
    console.log(this.model);
  };

}

```

---

# Challenge #1

- Create a cow object that has a weight property and an eat method.
- The eat method should have 1 parameter, poundsOfFood
- The eat method should increase the cow's weight by the amount it ate

---

# Challenge #2

- Create a glass object that has a volume property and a liquid property
- Add a fill method that increases the liquid property
- If fill is called such that it would overflow the cup, make sure that the liquid property never exceeds volume
__Stretch:__ How can you make sure the glass doesn't end up with too much liquid? Check what happens if you set the glass' liquid property to a number bigger than the volume.

---


# Behavior: methods on the prototype


```javascript
function Car(model) {
  this.model = model;

}

Car.prototype.printModel = function() {
  console.log(this.model);
};

```

---

# Review Objectives

- Explain what state and behavior are
- Create objects that contain state and behavior
