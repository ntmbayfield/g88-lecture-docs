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
