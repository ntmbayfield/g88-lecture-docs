# Prototypal Inheritance & `this`

---

# Objectives

- Implement Prototypal Inheritance using Constructors
- Describe differences between Prototypal Inheritance  
and Classical Inheritance
- Describe what `this` refers to
- Change `this` context with `.call()` and `.apply()`

---

# Prototypal Inheritance

> JavaScript is Different

----

## Prototypal Inheritance

- Uses the special `prototype` property
- Objects inheriting from each other  
create _Prototype Chain_
- Can be modified at any point in time
- Acts like a **living** blueprint for _instances_
- Can be cloned and extended upon

----

## Prototypal Inheritance

> Creating a Prototype with Constructors

![Prototype and Constructor Example](https://cloud.githubusercontent.com/assets/259196/22457727/4e53f47a-e756-11e6-88e5-1a39c7e29397.png)

Try this out on [jsfiddle.net](https://jsfiddle.net/chadwithuhc/5r8tuscf/)

----

## Prototypal Inheritance

> Inheriting from another Prototype

![Prototypal Inheritance Example](https://cloud.githubusercontent.com/assets/259196/22457725/4e46b9b8-e756-11e6-827a-3fb8f131fe3c.png)

Try this out on [jsfiddle.net](https://jsfiddle.net/chadwithuhc/5r8tuscf/1/)

----

## Prototypal Inheritance Exercise

- Open [Animal Species Profiles](http://www.nature.org/newsfeatures/specialfeatures/animals/)
- Using [jsfiddle.net](https://jsfiddle.net), create a Prototypal Inheritance chain that includes:
  - A Constructor for your favorite Species Profile
  - A Constructor that inherits from your Species Profile
  - Each Constructor should include at least one property and one method

**STRETCH**  
- Write a `getSpecies()` method that outputs  
the species prototype chain

---

# Classical Inheritance

> How does Classical Inheritance work?

----

## Classical Inheritance

- A Class is a blueprint that can inherit from other Classes
- Makes instances which are Objects
- Can be mimicked with _Prototypal Inheritance_,  
but not vice-versa
- Does not have the Prototype chain

![Classical Inheritance Example](https://cloud.githubusercontent.com/assets/259196/22457726/4e468f10-e756-11e6-8ef0-f38bed41d6c2.png)

---

# What is `this`?

> A reference to the current "context"

----

## `this` is dynamic

- By default it refers to the current scope

```javascript
function Person() {
  // `this` refers to this instance of `Person()`
  this.name = 'The Dude'
}
```

- Even when it's nested

```javascript
function People(count) {
  // `this` refers to this instance of `People()`
  this.people = []

  // New scope, new `this`
  function Person(name) {
    // `this` refers to this instance of `Person()`
    this.name = name || 'The Dude'
  }

  for (var i = 0; i < count; i++) {
    this.people.push(new Person('Person ' + i))
  }
}
```

Try this out on [jsfiddle.net](https://jsfiddle.net/chadwithuhc/06qv5o8c/)

----

## Setting `this` with `.call()`

We can use `.call()` to change the value of `this` when being called

```javascript
function People() {
  this.people = []
}

People.prototype.add = function(count) {
  for (var i = 0; i < count; i++) {
    this.people.push(new Person())
  }
}

function Person(name) {
  this.name = name || 'The Dude'
}

var people = new People()
people.add(4)
var peopleObj = { people: [] }
// Use the `People()` instance to call `add()`
//   setting `this` to `peopleObj`
people.add.call(peopleObj, 2)
```

Try this out on [jsfiddle.net](https://jsfiddle.net/chadwithuhc/29d82Lp6/)

----

## Setting `this` with `.apply()`

`.apply()` will do the same, but take an array of arguments

```javascript
var creditCard = {
  charges: [],
  charge: function(vendor, amount) {
    this.charges.push([vendor, amount].join(' - '))
  }
}

var fauxCard = {
  charges: []
}

creditCard.charge.apply(fauxCard, ['Denver Pizza Company', 12.50])
```

Try this out on [jsfiddle.net](https://jsfiddle.net/chadwithuhc/carpwc5y/)

----

## `.call()` vs `.apply()`

`.call()` passes arguments separately

```javascript
creditCard.charge.call(fauxCard, 'Denver Pizza Company', 12.50)
```

...

`.apply()` takes an array and generates arguments for you

```javascript
creditCard.charge.apply(fauxCard, ['Denver Pizza Company', 12.50])
```

...

**Otherwise they are the same**

---

## Review Objectives

- Implement Prototypal Inheritance using Constructors
- Describe differences between Prototypal Inheritance  
and Classical Inheritance
- Describe what `this` refers to
- Change `this` context with `.call()` and `.apply()`

Try out the [assessment](https://github.com/gSchool/prototype-this-assessment)!
