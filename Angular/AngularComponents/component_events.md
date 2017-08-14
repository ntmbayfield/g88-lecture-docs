# Angular Component Events

---

# Objectives
By the end of this lesson you will:

- Explain what & is
- Explain a use case for the function/event binding
- Explain the syntax of function/event binding

---

# bindings

^are how components communicate with each other.

---

# binding options - review

- < one-way
- = two-way
- @ string
- & function/event

---

# binding - function/events
## `& function/event`

^^ When would you use this? Can you think of something in redditclone that might benefit from this binding?

---

# Step 0:
##Add the binding to the component in the html

---

# Parent Component's Template

```html
<person-form
 person="$ctrl.somePerson"
 on-save="$ctrl.doStuff(savedPerson)">
</person-form>
```

---

# Step 1:
## Define a binding using `&`

^which indicates "I'm going to let other components pass a function to me"

---

# Component

```javascript
(function() {
  'use strict'

  angular.module('app')
    .component('personForm', {
      bindings: {
        person: '<',
        onSave: '&'
      },
      controller: personFormController
    })

}());
```

---

# Step 2:
## In the controller, call the passed in function, and hand it an object

---

# Controller

```javascript
function personFormController(){
  const vm = this

  vm.submit = function () {
    vm.onSave({savedPerson: vm.person})
  }
}
```
^ remember the onSave function expects a savedPerson argument to be passed
so the keys of this object match the parameter names of the function that is passed in

---

# Step 3:
## In this component's template, invoke the function

---
# Child Component's Template

```html
<form ng-submit="$ctrl.submit()">
```

^this will invoke the function on your controller which in turns invokes the bound function and passes in the arguments it needs

---

# Questions?

-  What is &?
- When would you use it?
