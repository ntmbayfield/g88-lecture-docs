# 4 Pillars of OOP
###  A (piece of) PIE
![right](img/pie.jpg)

---

# Objectives:

BY THE END OF THIS LESSON YOU WILL BE ABLE TO...

- Name the 4 Pillars of OOP
- Define Abstraction, Polymorphism, Inheritance, Encapsulation
- Describe examples of the 4 pillars of OOP

---

# 1. Abstraction

![right](img/caricature.jpg)

Abstraction reduces code complexity and at the same time it makes your code aesthetically pleasant.

It is the concept of creating a model of something tangible in the real world so that we can use that model to  write code to solve a problem. Usually our model is a simplified version of the real thing.

^Let’s consider a person in the real world – that is the real person with all of their complexity. A drawing of that person is an abstraction of them and it is certainly a simplified version. There can also be different abstractions created of that person – consider the difference between a charcoal drawing, a watercolor drawing, a caricature, etc. These are all very different representations of the person and will be useful in different contexts. This idea carries over to code. When creating an abstraction of a real life object you need to be aware of the problem you are aiming to solve and determine the important aspects of the model you need to create.

---

# 2. Polymorphism
![right](img/ps4.jpg)

Subtyping, a form of polymorphism, is when calling code can be agnostic as to whether an object belongs to a parent class or one of its descendants.

---

## Polymorphism Example:
A function might call "fullName()" on an object, which will work whether the object is of class Person or class Employee. This is another type of abstraction which simplifies code external to the class hierarchy and enables strong separation of concerns.

^In code, you can create a class of objects and those objects will need to abide by a specific contract in order to say that they belong to this class. For example, I can create a (very simplistic) Book class and any object that wants to call itself a Book must have a pageCount property, a nextPage method, and a previousPage method. The books can all be different from one another in a variety of ways, but if they meet the contract of implementing the required interface then they can call themselves a book. Polymorphism can be achieved in code by using inheritance.

---


# 3. Inheritance
![fit](img/avatar.png)

Inheritance allows classes to be arranged in a hierarchy that represents "is-a-type-of" relationships. For example, class Employee might inherit from class Person. All the data and methods available to the parent class also appear in the child class with the same names.

---

## Inheritance Example:
A class Employee might inherit from class Person. All the data and methods available to the parent class also appear in the child class with the same names. For example, class Person might define variables `first_name` and `last_name` with method `fullName()`. These will also be available in class Employee, which might add the variables "position" and "salary".

^ is the concept of sharing properties and behaviors. Generally you’d have a main class that describes the general properties and behaviors of an object. The classes that inherit from it will share those properties and behaviors and will also implement more specific ones of their own.

---

# 4. Encapsulation
![right](img/castle.jpg)

Encapsulation is an Object Oriented Programming concept that binds together the data and functions that manipulate the data, and that keeps both safe from outside interference and misuse. Data encapsulation led to the important OOP concept of data hiding.

^ Imagine a castle with a moat around it and a drawbridge. Inside the castle are the subjects (properties). The moat protects the subjects from outside forces. The only way to access them is to do so through the drawbridge(interface). In Javascript if you are creating a constructor and you return an explicit object, you have encapsulated the properties from any outside code so the properties cannot be accessed or changed directly. The only way to read/write those properties would be to go through the interface that you provide in the explicit object.

---

# Activity: OOP Jigsaw

1)Define, 2)Find or create an example or drawing that illustrates the concept, and 3)Describe why it is useful for maintainable code.


1. Abstraction
2. Encapsulation
3. Inheritance
4. Polymorphism

---

# Game Plan:

1. Meet in Learning Groups of at least 4 students and Divide Topics (5 minutes)
2. Research on Own (10 minutes)
3. Meet in Expert Groups (10-15 minutes)
4. Meet in Learning Group and teach each other topics (20 minutes)
5. Group Review
