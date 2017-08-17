# State and Behavior

---

# Objectives

- Explain what state and behavior are
- Create objects that contain state and behavior
- Explain and identify a mutator
- Explain and identify an accessor

---

# State: properties

^ state holds the value of the property at any given point in time

---

# Behavior: methods

^ A method is a function that is called on an object

---

# Challenge #1

Create a cow object that has a weight property and an eat method.
The eat method should have 1 parameter, poundsOfFood
The eat method should increase the cow's weight by the amount it ate

---

# Challenge #2

Create a glass object that has a volume property and a liquid property
Add a fill method that increases the liquid property
If fill is called such that it would overflow the cup, make sure that the liquid property never exceeds volume
__Stretch:__ How can you make sure the glass doesn't end up with too much liquid? Check what happens if you set the glass' liquid property to a number bigger than the volume.


---

# Encapsulation

^In Javascript if you are creating a constructor and you return an explicit object, you have encapsulated the properties from any outside code so the properties cannot be accessed or changed directly. The only way to read/write those properties would be to go through the interface that you provide in the explicit object.

---

# model is encapsulated

```javascript
function Car(model) {
  var _model = model;

  this.getModel = function() {
    return _model;
  };

  this.setModel = function(newModel) {
    _model = newModel;
  };
}

```
---

# Accessor

^ Accessor methods don't mutate state

---

# getModel is an accessor

```javascript
function Car(model) {
  var _model = model;

  this.getModel = function() {
    return _model;
  };

  this.setModel = function(newModel) {
    _model = newModel;
  };
}

```

---

# Mutator

^ Mutator methods don't return anything (or return self)

---

# setModel is a mutator

```javascript
function Car(model) {
  var _model = model;

  this.getModel = function() {
    return _model;
  };

  this.setModel = function(newModel) {
    _model = newModel;
  };
}

```

---
