# Refactor vanilla React state to Redux

---
1. cow(boy|girl) up
2. npm install redux react-redux
3. createStore with default reducers
4. wrap <App /> in a Provider
5. create Reducers and default state using combineReducers if breaking up into multiple files
6. add reducers w/Actions
7. add /containers dir with Containers for Components that will be "wrapped" by redux, move comps.  (edit App.js for Component imports that moved containers)
8. in Container, connect the component, remove propsm destructed dispatched
9. add /actions dir, create functions that...
- return async functions (which recieve dispatch)
- interact with API
- dispatched data from API to reducer after API is completed
10. Fix errors
11. use mapDispatchToProps in the Container so we don't need dipsatch in wrapped Component
12. Use mapStateToProps in Components where we need data from state
13. Add thunk middleware, Need thunk in createStore to call async action creators

---

# To inital fetch/dispatch of data
1. create an action, connect to API and dispatch a new action when complete
2. create a reducer to recieve the action and manipulate state
3. may need mapStateToProps or mapDispatchToProps in your Container