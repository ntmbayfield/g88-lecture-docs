theme: Titillium, 1
autoscale: true
slidenumbers: true
<!-- @author: Pete Silva -->

## Object Oriented Programming
![](http://img00.deviantart.net/659a/i/2010/170/b/6/abstract_objects_by_psdtech.jpg)

-
Basic intro

---

### Objectives
![](https://mir-s3-cdn-cf.behance.net/project_modules/disp/a520773389308.56014b51916d7.png)

- Explain what programming in an Object-Oriented way means
- How to create a basic Class from which we spawn objects
- Be able to write/use a constructor function
- Be able to use keywords: class, new, constructor

_Stretch:_

- Be able to do class based inheritance
- Be able to use/explain keywords: super, extends

---

### Compare: Procedural to OO programming
![](http://www.designboom.com/weblog/images/images_2/rodrigo/august/supernaturedesign/02.jpg)

Let's research together the differences

---

### What's an object?

Objects are key to OOP. Look around right now and you'll find many examples of real-world objects: your dog, your desk, your television set, your bicycle.

Real-world objects share two characteristics: They all have state and behavior. Dogs have state (name, color, breed, hungry) and behavior (barking, fetching, wagging tail). Bicycles also have state (current gear, current pedal cadence, current speed) and behavior (changing gear, changing pedal cadence, applying brakes). Identifying the state and behavior for real-world objects is a great way to begin thinking in terms of object-oriented programming.

---

### OOP, Why? Advantages?
![](http://m.rgbimg.com/cache1tZ1M5/users/x/xy/xymonau/600/nVCkCpe.jpg)

Bundling code into individual software objects provides a number of benefits, including:

1) Modularity:

The source code for an object can be written and maintained independently of the source code for other objects. Once created, an object can be easily passed around inside the system.

---

![](http://m.rgbimg.com/cache1tZ1M5/users/x/xy/xymonau/600/nVCkCpe.jpg)

2) Information-hiding:

By interacting only with an object's methods, the details of its internal implementation remain hidden from the outside world.

---

![](http://m.rgbimg.com/cache1tZ1M5/users/x/xy/xymonau/600/nVCkCpe.jpg)

3) Code re-use:

If an object already exists (perhaps written by another software developer), you can use that object in your program. This allows specialists to implement/test/debug complex, task-specific objects, which you can then trust to run in your own code.

---

![](http://m.rgbimg.com/cache1tZ1M5/users/x/xy/xymonau/600/nVCkCpe.jpg)

4) Pluggability and debugging ease:

If a particular object turns out to be problematic, you can simply remove it from your application and plug in a different object as its replacement. This is analogous to fixing mechanical problems in the real world. If a bolt breaks, you replace it, not the entire machine.

---

### Visually

Classes "spawn" or "instantiate" objects. Classes are like a mold, and from that mold we bring into existence, objects.

---

![fit](img/class-vs-obj1.png)

---

![fit](img/class-vs-ob2.png)

---

### Paired Research
![](http://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png)
![](https://pbs.twimg.com/profile_images/774325864972558336/qVVVBEVi.jpg)

In your own words,
what is a constructor?

---

### Anatomy of JS classes

- Instance variables
- Constructor method
- Instance methods
- _
- Create + initialize object (invoke constructor)
- Invoke object methods

---

![original fit](img/class-anatomy-1.png)

---

![original fit](img/class-anatomy-2.png)

---

![original fit](img/class-anatomy-3.png)

---

![original fit](img/class-anatomy-4.png)

---

![original fit](img/class-anatomy-5.png)

---

![original fit](img/class-anatomy-6.png)

---

![original 300%](http://learnwebtutorials.com/wp-content/uploads/2016/11/es6-class-1.jpg)

---

### JS (ES6) Class Syntax
![](http://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png)

[https://codepen.io/peternsilva/pen/eRmwzw](https://codepen.io/peternsilva/pen/eRmwzw)

---

With a partner, let's write a class for a Person

```javascript
class Person {
  constructor() {
    // what's a person have
  }
  // what's a person do?
}
```

---

### Inheritance
![](http://www.bioethics.com/wp-content/uploads/2014/03/genetic-ethics1.jpg)

![inline 150%](http://www.moneyloveandlegacy.com/images/HandsGivingCoins.jpg)

---

More like this...
![original 100%](https://nshahpazov.github.io/images/ts-angular/inheritance.jpg)

---

![](http://www.designboom.com/weblog/images/images_2/rodrigo/august/supernaturedesign/02.jpg)

Subclasses inherit properties
and methods from parent classes

![original fit right](http://www.linuxtopia.org/online_books/programming_books/thinking_in_java/TIJ308.png)

---

### Inheritance

![](http://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png)

In a subclass' constructor, always call "super()" first.

This special function call, calls the superclass' constructor.

It connects the "this" keyword to also refer to props/methods of the superclass.

---

### Inheritance Example
![](http://www.bioethics.com/wp-content/uploads/2014/03/genetic-ethics1.jpg)

[https://codepen.io/peternsilva/pen/xrbvVX](https://codepen.io/peternsilva/pen/xrbvVX)

---

### Sidenote
![](http://m.rgbimg.com/cache1tZ1M5/users/x/xy/xymonau/600/nVCkCpe.jpg)

Objects are implemented atop native JS "prototypes". For now think of protoypes as a similar concept to classes, but with different syntax. Facilitates inheritance.

---

### Objectives
![](https://mir-s3-cdn-cf.behance.net/project_modules/disp/a520773389308.56014b51916d7.png)

- Explain what programming in an Object-Oriented way means
- How to create a basic Class from which we spawn objects
- Be able to write/use a constructor function
- Be able to use keywords: class, new, constructor

_Stretch:_

- Be able to do class based inheritance
- Be able to use/explain keywords: super, extends
