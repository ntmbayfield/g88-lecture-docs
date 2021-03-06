# UI-Router's Resolve

---

# Objectives

- Explain the purpose of using resolve
- Explain the syntax of resolve

---

# Consider the following ...

---

> A **dependency** **fails** to load and the user gets a **broken page**.

---

> A **dependency** **loads** **slowly** and the page ***fills* in**.

—

# These cause a poor user experience.

---

# Resolve

## Like **Promise.all** for UI-Router.

---

> You can use **resolve** to provide your controller with content or data that is **custom to the state**. 

---

> **resolve** is an optional map of dependencies which should be **injected into the controller**.

---

> If any of these dependencies are **promises**, they will be resolved and converted to a value **before** the controller is instantiated and the $stateChangeSuccess event is fired.

---

# Old Syntax that You May See in the Wild

```javascript
$stateProvider
  .state("students", {
  url : "/students",
  templateUrl: 'students.html',
  controller : 'studentsController',
  resolve: {

  }
});
```

---

# New Syntax when Using Components

```javascript
$stateProvider
  .state("students", {
  url : "/students",
  component: 'studentsComponent',
  resolve: {

  }
});
```

---

# Example Resolve Object

```javascript
resolve {
  // Not a promise, resolves immediately
  simpleObj: function() {
  	return {value: 'simple!'};
  },
  // You need to inject any services that you are using.
  // Returns a promise, will resolve when promise is resolved.
  students1: function($http) {
    return $http({method: 'GET', url: '/api/students'});
  },
  //An example of processing the data
  students2:  function($http){
    return $http({method: 'GET', url: '/someUrl'})
      .then (function (data) {
      return doSomeStuffFirst(data);
    });
  }
}
```
---

# Example Controller

```javascript
studentsController(simpleObj,students,students2,studentInfo) {
  vm = this;
  vm.message = simpleObj;
  vm.students = students.data;
  vm.students = students;

  vm.studentInfo = studentsService.getInfo();
}
```

---

# Questions?
