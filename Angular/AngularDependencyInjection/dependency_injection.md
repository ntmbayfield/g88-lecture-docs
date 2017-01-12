# Dependency Injection

---

# Objectives

- define Dependency Injection
- identify the syntax option detailed by the Angular Style Guide

---

# First...what are dependencies?


---

## A dependency is basically any reference to code that you didn't define.

^Remember that we can pass functions as arguments to other functions.

---

# Second...what is dependency injection?

---

# From Angularjs:
## Dependency Injection (DI) is a software design pattern that deals with how components get a hold of their dependencies.


---

# Third...why bother with DI?

---

## your code is easier to test

---

## your code is easier to extend without modification

^ what do I mean? Let's look at an example from the article

---

#Consider this code:

```javascript
function doStuff() {
  let data = fs.readFileSync('data.txt')
  let parsed = new CSVParser().parse(data)
  console.log(parsed)
}
```

^if I wanted to change the behavior and not console.log the parsed value then I would have to rewrite this function

---

# Refactor to DI a writer service:

```javascript
function doStuff(writer) {
  let data = fs.readFileSync('data.txt')
  let parsed = new CSVParser().parse(data)
  writer.write(parsed)
}
```

^ Now I am using a writer service that has a write method on it. If I want to make changes I can make them to the service and leave my doStuff method alone
We will talk about services in more detail next week so let's move on to the syntax details of DI

---

# Angular supports 3 ways to define dependencies:

- Implicit annotation
- Inline array annotation
- $inject property annotation

---


# implicit

```javascript
angular
.module('heroApp')
.component('tmHeroDetail', {
  templateUrl: 'heroDetail.html',
  controller: HeroDetailController
})

function HeroDetailController($http,moment){
  //...
}
```

^this is the method you are used to using. The downside to using this method with angular is that if you are using a minifier you may lose access to the functions after renaming takes place.


---

# inline
```javascript
angular
.module('heroApp')
.component('tmHeroDetail', {
  templateUrl: 'heroDetail.html',
  controller: ['$http','moment', HeroDetailController]
})

function HeroDetailController($http,moment){
  //...
}
```

^ Angular docs say this is preferred, but we are using the Angular style guide which is the most up-to-date preferred method

---

# preferred

```javascript
angular
.module('heroApp')
.component('tmHeroDetail', {
  templateUrl: 'heroDetail.html',
  controller: HeroDetailController
})

HeroDetailController.$inject = ['$http', 'moment']
function HeroDetailController($http,moment){
  //...
}
```
---

# Questions?

---

# CFU

- What is Dependency Injection?
- Which syntax method is the preferred one for our code?
