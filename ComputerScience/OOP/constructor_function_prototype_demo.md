# Create objects using constructor functions
---

# Objectives

You will be able to create a constructor function with the following rules:

- Constructor functions start with a capital letter
- Instance methods are added to the constructor function's prototype (not `this`)

---

# Constructor Function
## review of methods on `this`

```javascript
function Person(name){
  this.name = name;
  this.sayHello = function(){
    console.log("hello");
  }
}

var person1 = new Person('person1');
```

---

# Constructor Function
## methods on prototype

```javascript
function Person(name){
  this.name = name;
}

Person.prototype.sayHello = function sayHello(){
  console.log("hello");
}

var person1 = new Person('person1');

```

---

# Demo
##[http://jsbin.com/maxojag/edit?js,console](http://jsbin.com/maxojag/edit?js,console)
