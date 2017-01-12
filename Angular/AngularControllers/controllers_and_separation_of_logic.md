# Controller

---

# Objectives

- Explain what controllers are
- Explain the link between the controller and the view

---

# Definition Recap

- Model: How we model our data in the code
- View: What the user sees
- Controller: How the model and the view communicate

---

# What are controllers?

---

## They are just _functions_ that provide data for use in the views.

---

## Your _controller_ is where you do things like define click-handlers and set up the data that your template needs.

^ state and behavior

---

## All properties added to _`this`_ are automatically available in our view.

^ The view that is specifically associated with this controller

---

# Example Controller

```javascript

function HelloController() {
  //always set a variable equal to this
  var vm = this;

  // state/properties available to the view
  vm.hello = {};
  vm.hello.title = "World";

  // behavior/functions available to the view
  vm.changeGreeting = function(){
    vm.hello.title = "g36";
  }
}

```

---

# Controller and View

![inline](https://s3-us-west-2.amazonaws.com/learn.galvanize.com/learn-images/gSchool/angular-curriculum/master/images/angular-1-anatomy.png)

^ Focus on 3,4,5 for this lesson. Let's look at how the controller and view are connected.

---

# Example Code

---

# Review Objectives

- Explain what controllers are
- Explain the link between the controller and the view
