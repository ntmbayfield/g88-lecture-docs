theme: Titillium, 1
autoscale: true
slidenumbers: true
<!-- @author: Pete Silva -->

## Objects, Manipulation, & Loops
![](http://img00.deviantart.net/659a/i/2010/170/b/6/abstract_objects_by_psdtech.jpg)

-
Beyond primitive data structures

---

### Objectives
![](https://mir-s3-cdn-cf.behance.net/project_modules/disp/a520773389308.56014b51916d7.png)

- Create and manipulate objects
- Explain how to get/set an object's properties
- Write a loop to iterate over an object's properties
- Explain how String, Math and Date objects work
- Create a deeply nested object
- Access data from a deeply nested object

---

### Objects
![](https://talkingwithimage.files.wordpress.com/2014/10/f5ac465df56759f1fecb01e677ceeb34.jpg)

A "compound value" where you can set properties (named locations) that each hold their own values of any type. These are known as key/value pairs. Labels and values. An object can contain different data types within itself, even arrays and other objects. Most values in JS can be worked with as objects.
![inline 175%](img/sample-obj.png)

---

### Paired research
![](http://www.dfsrealestate.com/wp-content/themes/dfs/images/backgrounds/background_research_001.jpg)

How do we create an object in Javascript?
How do we set values in an object, and access them later?

---

### Object creation
![](img/slothspace.jpg)

```javascript
var myObj = {} // empty
var myObj = {
  commonName: "Sloth",
  species: "Bradypus variegatus",
  class: "Mammal",
  stinky: true
}
var myObj = new Object()
```

---

### Object get property value
![](img/grey.png)

```javascript
// Get property called species
var x = myObj.species // dot notation, preferred
console.log(x)

var x = myObj["species"] // bracket notation
console.log(x)
```

---

### Object set property value
![](img/grey.png)

```javascript
// Set property called stinky
myObj.stinky = false
myObj["stinky"] = false

console.log(myObj.stinky)
```
---

![](img/grey.png)

Object properties can be set to any valid expression, including functions.

```javascript
myObj.sayHello = function(){
  console.log("Hi! I used to be stinky!");
}
myObj.sayHello(); // What happens?
```

---

### Manipulating objects
![](http://marccortez.com/wp-content/uploads/2014/03/questions-550x413.jpg)

```javascript
var myObj = {
  num1: 40,
  num2: 50,
  num3: 60
}
```
T&T: Given the above object, how could we add 5 to each property using a loop? Hint: for/in loop

---

### For/In
![](img/grey.png)

```javascript
for (var prop in myObj) {
  // prop is a variable, represents the name
  // of the object's property, which we don't know
  myObj[prop] = myObj[prop] + 5; // could be shorter?
}
```

Why use bracket notation here?

---

![](img/grey.png)

### When to use brackets over dot notation?
Square bracket notation allows use of characters in property names that can't be used with dot notation. It also comes in handy when we don't know the name of the property, as in our previous for/in loop.

-
```javascript
var myObj = { "myProp!": "whee" } //valid, but bad idea because...
console.log( myObj["myProp!"] ) // valid
console.log( myObj.myProp! ) // yields a syntax error
```

---

### Standard built-in objects
![](https://www.adelaide.edu.au/light-study/research/shutterstock_55318531.jpg)

Some commonly used ones include:

- *String*
- *Math*
- *Date*

Take a moment to pair research these objects and the properties and methods they provide.

---

![](https://www.alux.com/wp-content/uploads/2014/11/Lamborghini-Miura.jpg)

We can nest objects inside objects:

```javascript
var myCar = {
  name: "Lamborghini Miura",
  year: 1969,
  specs: {
    topSpeedMPH: 174,
    transmission: {
      type: "5-speed",
      gearRatios: [2.520, 1.735, 1.225, 1.000, 0.815]
    }
  }
}
```

---

### How to access the deep properties?
![](http://i0.kym-cdn.com/photos/images/original/000/302/657/674.jpg)

```javascript
// Log first gear ratio
console.log( myCar.specs.transmission.gearRatios[0] );
console.log( myCar['specs']['transmission']['gearRatios'][0] );
```

-
Dot notation is a bit cleaner

---

### Objectives
![](https://mir-s3-cdn-cf.behance.net/project_modules/disp/a520773389308.56014b51916d7.png)

- Create and manipulate objects
- Explain how to get/set an object's properties
- Write a loop to iterate over an object's properties
- Explain how String, Math and Date objects work
- Create a deeply nested object
- Access data from a deeply nested object
