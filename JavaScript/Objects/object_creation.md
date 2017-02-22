## Object Creation

^there are a lot of ways to create objects, lots of patterns. This is an intro to the many ways you might see them. We are going to look at the different syntax, but as always, playing around with this and exploring is the best way to learn the nuances.

---

# Objectives

- Explore the syntax of
  + Object Creation
  + Object Copying
  + Constructor Creation

---

# Create "Standalone" Objects

---

- Create an Object from Scratch ({})
- Copy an existing Object (Object.assign)

---

##1 - Create an Object from Scratch ({})

```javascript

let myObj = { "name": "Teddi" };

```

---

##2 - Copy an existing Object (Object.assign)

```javascript

let myObj = { "name": "Teddi" };
let myNewObj = Object.assign({}, myObj);

console.log(myObj === myNewObj) //false
```

---

# Create Object using Inheritance

---

##Use a Constructor function (new keyword)

- Use a Constructor function and add methods _to the prototype_
- Use a Constructor function and add methods to _this_ (the instance)
- Use ES6 Class syntax

---

###3 - Use a Constructor function and add methods to the prototype

```javascript

function Car(make,model){
  this.make = make;
  this.model = model;
  this.gasIsFull = true;
}

Car.prototype.drive = function(){
  this.gasIsFull = false;
}
Car.prototype.fillTank = function(){
  this.gasIsFull = true;
}
```

---

#4 - Use a Constructor function and add methods to this (the instance)


```javascript

function Car(make,model){
  this.make = make;
  this.model = model;
  this.gasIsFull = true;

  this.drive = function(){
    this.gasIsFull = false;
  }
  this.fillTank = function(){
    this.gasIsFull = true;
  }
}

```

---

#5 - Use ES6 Class syntax

```javascript
class Car {

  constructor (make,model) {
    this.make = make;
    this.model = model;
    this.gasIsFull = true;
  }
  drive(){
    this.gasIsFull = false;
  }
  fillTank(){
    this.gasIsFull = true;
  }

}
```

---

#6 Create inheritance manually with Object.create

```javascript

let Car = {
  gasIsFull:true,
  init: function(make,model){
    this.make = make,
    this.model = model
  },
  drive: function drive(){
    this.gasIsFull = false;
  },
  fillTank: function fillTank(){
    this.gasIsFull = true;
  },
}

//a new object gets created and it gets linked to the Car Object
var carA = Object.create(Car);
carA.init("Nissan", "Maxima");
console.log(carA);
```
---

# Questions?
