# Intro to Components

![inline center](https://wmira.gallerycdn.vsassets.io/extensions/wmira/react-playground-vscode/0.0.11/1494599205180/Microsoft.VisualStudio.Services.Icons.Default)

---

# Objectives

- Explain what components are and why they are useful
- Identify and create components
- Pass data as props and render dynamic values in JSX
- Differentiate between functional and class components
- Know when to use state vs setState
- Lift state up to the closest common ancestor

---

# Explain what components are and why they are useful

- Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

^ Turn and talk

---

# Identify and create components

- See [this example](https://learn.galvanize.com/cohorts/284/units/4536/content_files/57681) in Learn
- Split into groups by row. You have 2 minutes to pick a website and then 3 minutes to identify components.

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

- Fork & clone [this repo](https://github.com/gSchool/react-intro-exercise)
- We will work together to wire up these components using props, state, and setState
- Here is [a video](https://vimeo.com/207527434) of the code along that you can refer to afterwards

---

# Objectives

- Explain what components are and why they are useful
- Identify and create components
- Pass data as props and render dynamic values in JSX
- Differentiate between functional and class components
- Know when to use state vs setState
- Lift state up to the closest common ancestor

---
