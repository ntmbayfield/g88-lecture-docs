# Angular Digest Cycle

---

## Objectives

- Explain the following vocabulary: watch list, dirty checking, digest cycle.
- Identify 2 problems that might have something to do with the digest cycle.

---

# Digest Cycle


^
This is the process angular uses to implement the awesome 2-way binding that we use.

---

# Watch List

![inline](./binoculars.jpg)

^ To understand what happens during the digest cycle, you need to understand the notion of the watch list - it is a list of items that will be observed for changes.
You can observe expressions or function results

---

# How do items end up on the watch list?
### some directives / {{}} / $scope.$watch

^ They are put there by certain directives or by the curly bindings or by being manually added through the $watch method. These will trigger the digest cycle immediately and then whenever a change is detected, another cycle will occur.
ng-model
ng-show/ng-hide/ng-if
ng-repeat
{{ }}
$scope.$watch

---

# Dirty Checking

![inline](./checklist.png)

^ Dirty Checking simply compares each value on the watchlist and compares old value with a new one to see if it has changed.  Run down the list and dirty check each item. If the item has not changed, keep going. If the item has changed, start again. Keep doing this until there are no changes then update the DOM.

---

# What triggers a digest cycle?
### Examples: ng-click / $http / $scope.$apply

^ directives like ng-click and services like $http will trigger a digest cycle.

---

# Common Problems

---

# Problem: infdig error
## watched items never stop changing

![inline](./infinity.jpg)

^ The digest cycle will run a maximum of 10 times at which point an infinite digest loop error (infdig) is triggered. When you are testing your app, do so with the developer console open so you can see all errors. If your variable changes more than 10 times then you will trigger this.

---

# Problem: Nothing is changing

^ Maybe you made a change outside of the Angular world. Maybe you made a change to a variable that is not being watched. Example - you used setTimeout. This happens outside of the angular context and the digest cycle is not getting triggered.

---

# Questions?
