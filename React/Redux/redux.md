![fit](images/redux.png)

^ React - Library for a Single Page Application

^ Compnent - Each component has state

^ Problem - Single Page Application - lots of components - lots of states

^ After that - figure out how things are connected

^ Easy way to set it up.

----

![fit](images/redux.jpeg)

---

### *buckyroberts/React-Redux-Boilerplate*. (2017). *GitHub*. Retrieved 18 July 2017, from https://github.com/buckyroberts/React-Redux-Boilerplate

---

# Why Redux?

This complexity is difficult to handle as we're mixing two concepts that are very hard for the human mind to reason about: **mutation** and **asynchronicity**


Also skim this on [why react / redux](https://jrsinclair.com/articles/2018/react-redux-javascript-architecture/ ) (from casidoo's newsletter) it is about separating state from dom and the problems with lifting state to top. Passing everything from top is a little crufty.

---

# Usage With React & Todos Example

In Redux docs, focus on "Usage With React" section! Trust me.

[Usage With React](https://redux.js.org/docs/basics/UsageWithReact.html)
[Todos Example](https://github.com/reactjs/redux/tree/master/examples/todos)

---

# Things to notice with Redux

const store = createStore(reducer)

Provider (react-redux) takes store

Vanilla react = subscribe & dispatch

---

# Using react-redux

Connect (react-redux) is alternative to avoid writing store.subscribe by hand and unnecessary renders

To use connect, you need to define a special function called mapStateToProps()

mapDispatchToProps receives the dispatch() method and returns callback props that you want to inject into the presentational component

---

# "Dumb" Components vs Containers

Components tend to be “dumb” and not use connect.
Containers tend to use connect and dispatch, but not always black and white.
