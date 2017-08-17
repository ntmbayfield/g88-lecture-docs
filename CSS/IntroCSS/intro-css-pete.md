theme: Titillium, 1
autoscale: true
slidenumbers: true
<!-- @author: Pete Silva -->

![original](img/1_water.jpg)

# [fit] Cascading Style Sheets

# [fit] CSS

---

# Objectives

* Understand what CSS is and why we use it
* Understand how to link HTML to CSS
* Target HTML elements with CSS selectors
* Style HTML elements with CSS properties
* Arrange elements on a page
* Understand style specificity
* Understand the box model

---

# CSS IS AWESOME

[A Single Div](http://a.singlediv.com/)
[The Simpsons in CSS](http://pattle.github.io/simpsons-in-css/)

---

## What and Why CSS?

* Cascading
  * Inheritance is a key feature in CSS; it relies on the ancestor-descendant relationship to operate (document tree).
  * It is the mechanism by which properties are applied not only to a specified element, but also to its descendants.
* Style
  * Describes presentation
* Sheet
  * Separate concerns

---

## Advantages of CSS

* Separation of content from presentation
* Site-wide consistency
* Bandwidth
* Page-reformatting
* Accessibility

---

## 3 ways to connect CSS to HTML

* Inline Styles
* Internal Style Sheet
* External Style Sheet

T&T: What do these look like?

---

## Anatomy of a Style

![inline 100%](http://www.sccc.premiumdw.com/wp-content/uploads/2011/06/css-rule.png)

The whole thing is called a `rule` or `rule-set`

---

## Types of Selectors

* element
* class
* id

There are many ways to select the same thing:

Paired Research: [MDN: CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

---

## Combinators

Combine selectors with combinators to target very specific elements!

* descendant selector (space)
* child selector `>`
* adjacent sibling selector `+`
* general sibling selector `~`

[MDN: Combinators](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors#Combinators)

---

# The Box Model

- Content
- Padding
- Border
- Margin

![right fit](http://www.codeproject.com/KB/HTML/567385/boxmodel-image.png)

---

## Specificity

Specificity is the means by which browsers decide which CSS property values should be applied to an element.

It refers to the relative weights of various rules.

This is part of the "cascading" aspect of stylesheets.

----

# Specificity Values

* Inline styles have a specificity of 1,0,0,0
* ID selectors a specificity of 1,0,0
* Class selectors have a specificity of 1,0
* A simple element selector has a specificity of 1

![right fit](https://css-tricks.com/wp-content/csstricks-uploads/specificity-calculationbase.png)

_Basically: inline > id > class > element_
_The most specific rule overrides_

[CSS Tricks: Specifics on CSS Specificity](https://css-tricks.com/specifics-on-css-specificity/)

---

### Specificity only applies when the same element is targeted by multiple declarations.

### A directly targeted element will always take precedence over rules that an element inherits from an ancestor.

---

## Display: Inline vs Block Elements

Difference?

---

## Display: Inline vs Block Elements

Every HTML element has a default display value depending on what type of element it is. The default display value for most elements is block or inline.
- A block element always occupies the whole line (img, div)
- An inline element does not start in a new line and only takes up as much space as necessary (span, a)

Display property can override this default behavior:

```css
div {
  display: inline;
}
```

---

## Defining Styles with Properties

Color|Borders|Width/Height
---|---|---
Background|Layout|List styles
Font styles|Margins|Animations
Image styles|Padding|Transitions

---

## Font and Text Properties

Someone 'splain it

```css
p {
  color: #6b3333;
  font-family: sans-serif;
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
}
```

---

## Shorthand Properties

Some properties are a shortcut for defining several rules at once.

* border
* background
* font
* margin

```css
div {
  border: 10px solid yellow;
}
```

[MDN: Shorthand Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties)

---

## Layout Properties

Many ways to layout page elements:
* Floats
* Positioning Property (relative, absolute, etc.)
* Flexbox

---

## Float
* Allows other elements to wrap around block elements
* Floated elements remain a part of the flow of the web page

```css
.floater-left,
.floater-right {
    width: 200px;
    height: 100px;
}
.floater-left { float: left; }
.floater-right { float: right; }
```

[Link: Float your Boat](https://css-tricks.com/all-about-floats/)

---

# Objectives

* Understand what CSS is and why we use it
* Understand how to link HTML to CSS
* Target HTML elements with CSS selectors
* Style HTML elements with CSS properties
* Arrange elements on a page
* Understand style specificity
* Understand the box model

---

# Play!

* Create a project folder
* Git
  * Initialize the repo locally
  * Create a new repo on GitHub
  * Add a remote to your repo
* Create an index.html and a main.css
* Fill in the basic HTML structure - nest some tags to make it more interesting
* Link to your external style sheet
* Play with some of the  combinators to target different elements on the page
