## Integrating React with APIs

![inline](img/logo.png)

---

# Objectives

+ Connect a React App with an API
+ Name the steps to make a GET request and update state in a React.Component
+ Name the steps to make a POST request and update state in a React.Component

---

# Steps to populate state based on an API

1. define initial state in a class property  ```this.state = { people: [] } ```
1. define an async componentDidMount method
1. fetch the data and await the response (inside componentDidMount)
1. turn it into json and await the response
1. this.setState
1. render the state info in the component

---

![right fit](img/getReact.png)

# Fetch Data Example

+ set an initial state
+ define an async componentDidMount method
+ fetch the data and await the response
+ turn it into json and await the response
+ call setState()


---

Questions: (4 min)

1. Why do we need to await response.json() ?
1. In this example, what would actually be in `<div>...</div>` to render the people?

---

# I Do

Create functionality to get all existing cards from an API using this [repo](https://github.com/gSchool/react-intro-exercise)

---

# Steps for handling a POST request in a React.Component

1. Define an async method that takes the data as a parameter. Note an event handler needs to use this method after it gets information out of the DOM (such as a form)
1. use fetch to do the POST request
1. get the added data from the json response
1. use this.setState() to update state with the new item

---

# Post

![inline](img/reactPost.png)

---

# We Do

Add functionality to POST a new card to the API.

Use the same [repo](https://github.com/gSchool/react-intro-exercise)

---

# You Do

Add functionality to DELETE a card from the API.  Note you have to repeat all the steps for adding a card and add a button and onClick handler

Use the same [repo](https://github.com/gSchool/react-intro-exercise)

# Objectives

+ Connect a React App with an API
+ Name the steps to make a GET request and update state in a React.Component
+ Name the steps to make a POST request and update state in a React.Component


