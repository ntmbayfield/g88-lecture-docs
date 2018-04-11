build-lists: true

# Learn to Code - React!

![inline center](https://wmira.gallerycdn.vsassets.io/extensions/wmira/react-playground-vscode/0.0.11/1494599205180/Microsoft.VisualStudio.Services.Icons.Default)

---

# Objectives
- Describe Single Page Applications (SPA)
- Name the key concepts in React
- Explain components, props, and JSX
- Identify functional and class components
- Know when to use state vs setState
- Lift state up to the closest common ancestor

---

# Describe Single Page Applications (SPA)

In a single-page application, all of the code needed is included in a single-page load. This includes all of the CSS, HTML, and JavaScript. The page does not reload, and it requires dynamic interaction with the Web server.

---

# Name the key concepts in React

- Web Components
- 1 way data binding
- Virtual DOM
- JSX (which requires a "build" step)
- State management (Flux or Redux)


---


# Components

- Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

^ Turn and talk

---

# Identify "container" (smart) components

![inline](https://s3-us-west-2.amazonaws.com/learn.galvanize.com/learn-images/gSchool/react-curriculum/units/images/components/top-level-components.png)

---

# Identify "presentation" (dumb) components

![inline](https://s3-us-west-2.amazonaws.com/learn.galvanize.com/learn-images/gSchool/react-curriculum/units/images/components/sub-components.png)

---

# Pass data as props and render dynamic values in JSX

- Props are Read-Only

``` js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

---

# Differentiate between functional and class components

``` js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

vs

``` js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

---

# Know when to use state vs setState

- Use state to assign initial state in a constructor

``` js
constructor(props) {
  super(props)
  this.state = {
    cards: CardData
  }
}
```

---

# Know when to use state vs setState

- Use setState to update state and re-render the component

``` js
onSubmit = (card) => {
  this.setState({
    cards: this.state.cards.concat(card)
  })
}
```

^ Cold call

---

# Lift state up to the closest common ancestor

- Single “source of truth” in React apps
- Rely on the top-down data flow
- Avoid duplicating lifted state in child components

^ Turn and talk

---

# Code Along

- Clone (or Download) [this repo](https://github.com/gSchool/learn-to-code-react)
- We will work together to wire up these components using props, state, and setState
- Here is [a video](https://vimeo.com/207527434) of the code along that you can refer to afterwards

---

# Objectives

- Describe Single Page Applications (SPA)
- Name the key concepts in React
- Explain components, props, and JSX
- Identify functional and class components
- Know when to use state vs setState
- Lift state up to the closest common ancestor
