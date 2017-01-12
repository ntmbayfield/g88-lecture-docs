# Angular Components

---

# Objectives

- Define a component
- Explain component name vs. template name
- Explain the component method syntax
- Explain $ctrl
- Explain what a lifecycle hook is
- Break a page down into components

---

# What is a _component_?

---

# A _component_ is a special kind of custom directive

^ You'll see directives in a lot of sample code. Under the hood a component is a directive with a set of reasonable defaults. It creates a great pathway for upgrading to Angular 2.0.

---

# Some people call them custom html tags

---

# Component Names

- camelCase in the component (tmHello)
- dashed in the view (tm-hello)
- use a prefix to avoid name collisions

---

# What is the syntax for a component?

---

```javascript
function HeroDetailController() {

}

angular
.module('heroApp')
.component('tmHeroDetail', {
  templateUrl: 'heroDetail.html',
  controller: HeroDetailController,
  bindings: {
    hero: '='
  }
});
```

^From the Angular docs. Explain each line...

---

# _$ctrl_ is the default name for controllerAs

^ You don't have to explicitly use controllerAs since it has a default. vm in the controller and $ctrl in the view.

---

# _lifecycle_ hooks

^ it's the lifecycle of creating/updating/destroying a component
You can access different points in the lifecycle of a component and implement code that will be run at various points in the life cycle ($onInit(), $onChanges())

---

# How do you decide what will be a component?

- Look at the data and the design
- Use the _Single Responsibility Principle_

^ using these principles makes your code easier to test

---

# Objectives

- Define a component
- Explain controller name vs. template name
- Explain the component method syntax
- Explain $ctrl
- Explain what a lifecycle hook is
- Break a page down into components

---

# Questions?
