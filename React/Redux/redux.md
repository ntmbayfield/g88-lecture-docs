![fit](images/redux.png)

^ React - Library for a Single Page Application

^ Compnent - Each component has state

^ Problem - Single Page Application - lots of components - lots of states

^ After that - figure out how things are connected

^ Easy way to set it up.

---

# Objectives

- Understand why one would use Redux
- Explain Redux basics such as actions, reducers, and store
- Differentiate between plain redux and using the react-redux library

---

# Why Redux?

This complexity is difficult to handle as we're mixing two concepts that are very hard for the human mind to reason about: **mutation** and **asynchronicity**


Also skim this on [why react / redux](https://jrsinclair.com/articles/2018/react-redux-javascript-architecture/ ) (from casidoo's newsletter) it is about separating state from dom and the problems with lifting state to top. Passing everything from top is a little crufty.

---

# Things to notice with Redux

const store = createStore(reducer)

Vanilla react = store.subscribe() & store.dispatch()

---

# What is the "shape" of our state?

From reducers/todos.js

`const todos = (state = [], action)`

---

# It's called README for a reason

Go over [counter example](https://redux.js.org/) together

---

![fit](images/redux.jpeg)

---

### *buckyroberts/React-Redux-Boilerplate*. (2017). *GitHub*. Retrieved 18 July 2017, from https://github.com/buckyroberts/React-Redux-Boilerplate

---

# Quick Skit

User - Actually using the app on the screen adding todos as we act it out.

Container - Managing the dumb component, dispatching actions, subscribing to changes in state.

Component - Between me and the class. Must be really dumb. Asking dumb questions, while container component is being really condescending and giving orders.

---

# Quick Skit (Continued)

Action - Dispatched to the store in the middle of the room. “Ok he wants to add a todo this time, something about taking out the trash, says it is urgent” or whatever.

Store - Receives actions dispatched to update state, uses the reducer to make new copy of state with update, and notifies subscribers when the state has been updated.

Reducer - Takes old state and action, producing a new state. May want to talk about doing this immutably, so like making a copy of the old state and adding to it, or using concat. Something like that.


---

# Usage With React & Todos Example

In Redux docs, focus on "Usage With React" section! Trust me.

[Usage With React](https://redux.js.org/docs/basics/UsageWithReact.html)
[Todos Example](https://github.com/reactjs/redux/tree/master/examples/todos)

---

# Using react-redux

Provider (react-redux) takes store

Connect (react-redux) is alternative to avoid writing store.subscribe() and store.dispatch() by hand and unnecessary renders

---

# More on connect (react-redux)

To use connect, you need to define a special function called mapStateToProps() instead of using store.subscribe()

mapDispatchToProps() receives the store.dispatch() method and returns callback props that you want to inject into the presentational component

---

# "Dumb" Components vs Containers

Components tend to be “dumb” and not use connect.
Containers tend to use connect and dispatch, but not always black and white.

---

# Objectives

- Understand why one would use Redux
- Explain Redux basics such as actions, reducers, and store
- Differentiate between plain redux and using the react-redux library
