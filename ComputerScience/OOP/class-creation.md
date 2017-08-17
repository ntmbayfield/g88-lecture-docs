theme: Titillium, 1
autoscale: true
slidenumbers: true
<!-- @author: Pete Silva -->

# ES6 Classes
![original](https://cdn-images-1.medium.com/max/2000/1*RuxaPPPrL6K09eF4pFhISw.jpeg)

---

### Objectives
![](http://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png)

- Be able to write an ES6 class from which you can spawn object instances
- Be able to use a constructor function
- Be able to do class based inheritance
- Be able to explain difference between Prototypes and ES6 Classes
- Be able to use/explain keywords: class, new, static, extends, super

---

### ES6 Class Syntax
![](http://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png)

```javascript
class Rectangle {
  constructor(width, height) {
    this._width = width
    this._height = height
  }
  getWidth() { return this._width }
  setWidth(val) { this._width = val }
  toString() { return `Rect: ${this._width} by ${this._height}` }
}
var myRect = new Rectangle(5, 7);
```

[https://codepen.io/peternsilva/pen/eRmwzw](https://codepen.io/peternsilva/pen/eRmwzw)

---

### Paired Research
![](http://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png)
![](https://pbs.twimg.com/profile_images/774325864972558336/qVVVBEVi.jpg)

In your own words,
what is a constructor?

---

### Constructors
![](http://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png)

A constructor method is a special method for creating and initializing an object created with a class.

There can only be one special method with the name "constructor" in a class.

---

### Inheritance
![](https://mir-s3-cdn-cf.behance.net/project_modules/disp/a520773389308.56014b51916d7.png)

Google real quick: how does we make teh subclass?

---

### Inheritance
![](http://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png)

In a subclass' constructor, good practice to always call "super()" first.

This special function call, calls the superclass' constructor.

It connects the "this" keyword to also refer to props/methods of the superclass.

---

### Inheritance Example
![](http://www.bioethics.com/wp-content/uploads/2014/03/genetic-ethics1.jpg)

[https://codepen.io/peternsilva/pen/xrbvVX](https://codepen.io/peternsilva/pen/xrbvVX)

---

### Encapsulation
![](https://www.nature.com/article-assets/npg/nm/journal/v20/n1/images/nm0114-9-I1.jpg)

For private properties, use convention: *this._myPrivateProp*

ES6 doesn't have true private members, but we can still use the above convention

Never declare properties in the general body of a class. Set it up in the constructor using *this._myProp = "something"*

---

### Static Members
![](http://cdn.wallpapersafari.com/27/0/hF3Mnk.jpeg)

Static properties/methods: Something that is a part of the class, but not part of any specific instance object of that class.

There will only be one copy of a static property/method rather than a new copy per instance.

A static member is referred to without mentioning an instance. Instead you refer to it by using the formal name of the class.

---

### Statics Example
![](http://cdn.wallpapersafari.com/27/0/hF3Mnk.jpeg)

```javascript
class MyClass {
  constructor(val) {
    this._x = val
    MyClass.staticMethod() // Use the class name
  }
  getX() { return this._x }
  static staticMethod() {
    // Does the same thing regardless of instances
    console.log('Im sensing some static');
  }
}
MyClass.staticMethod(); // Use the class name
```

---

### Paired Research
![](http://www.designboom.com/weblog/images/images_2/rodrigo/august/supernaturedesign/02.jpg)

What is the difference between Prototypes (ES5) and Classes (ES6+)?

[http://sporto.github.io/blog/2013/02/22/a-plain-english-guide-to-javascript-prototypes/](http://sporto.github.io/blog/2013/02/22/a-plain-english-guide-to-javascript-prototypes/)

---

![](http://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png)

Class inheritance necessarily creates parent/child object taxonomies as a side-effect. Classes are blueprints, from which we instantiate working objects.

Prototypal Inheritance: A prototype is a working object instance. Objects inherit directly from other objects. Like a copy of the original, plus some other mods.

---

![original fit](http://image.slidesharecdn.com/javascriptoops-140122020213-phpapp01/95/javascript-oops-4-638.jpg?cb=1390356199)

---

![](http://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png)

ES6 Classes are syntactic sugar implemented atop traditional JS prototypes.

Classes are easier with strict hierarchical inheritance. Prototypes more flexible allowing inheritance of only wanted features from other objects, but best practices can be unclear.

---

#### Prototype Example 1 (Constructor Function + attach to 'this')
![](http://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png)

```javascript
// Animal is a function, we can use 'this'
function Animal() {
  this.kind   = 'mammal'
  this.hungry = true
  this.tired  = true
  this.eat    = function(){ this.hungry = false }
  this.sleep  = function(){ this.tired = false }
}
var sloth = new Animal(); // An instance of function Animal
console.log(sloth instanceof Animal ) // logs true
console.log(sloth.kind); // logs 'mammal'
```

---

#### Prototype Example 2 (Constructor Function + attach to prototype)
![](http://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png)

```javascript
// Animal is a function, we can use 'this'
function Animal() {
  this.kind   = 'mammal'
  this.hungry = true
  this.tired  = true
}
Animal.prototype.eat = function(){ this.hungry = false }
Animal.prototype.sleep = function(){ this.tired = false }

var sloth = new Animal(); // An instance of function Animal
console.log(sloth.kind); // logs 'mammal'
```

---

#### Prototype Example 3 (Manual inheritance w/ Object.create)
![](http://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png)

```javascript
// Animal is a simple object
var Animal = {
  kind: 'mammal',
  hungry: true,
  tired: true,
  eat: function(){ this.hungry = false },
  sleep: function(){ this.tired = false }
}

var sloth = Object.create(Animal); // new object whose prototype is Animal
console.log(sloth.kind); // logs 'mammal'
```

---

![](https://i.kinja-img.com/gawker-media/image/upload/s--sTU9H6RE--/c_scale,f_auto,fl_progressive,q_80,w_800/18dtzjus7l88bjpg.jpg)

More prototype examples: [http://slides.com/lizh/oop#/](http://slides.com/lizh/oop#/)

---

Repaso de Objetivos

![](https://cdn-images-1.medium.com/max/2000/1*RuxaPPPrL6K09eF4pFhISw.jpeg)
