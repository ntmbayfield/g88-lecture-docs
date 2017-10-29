# Intro to HTML & CSS

---

# Objectives

By the end of this lesson you will...

* Be able to define and explain:
  - HTML
  - CSS
  - Bootstrap
  - CDN

* Have a development environment for creating a website

* Create a multi-page responsive website

---

# Development Environment

# Atom

- Atom is a text editor that...
Take a few minutes to install Atom
https://atom.io/

---

![fit](https://s3-us-west-2.amazonaws.com/learn.galvanize.com/learn-images/gSchool/html_and_css_for_beginners/NSBE/02-Software/1-Atom/images/atom.jpg)

---

![fit](https://s3-us-west-2.amazonaws.com/learn.galvanize.com/learn-images/gSchool/html_and_css_for_beginners/NSBE/02-Software/1-Atom/images/file-navigation-atom.jpg)

---


# Technology Overview

---

# HTML

Html is structure/bones

---

# CSS

Gives your pages style

---

# Bootstrap

An HTML/CSS/JS framework

---

# CDN

Stands for content delivery network. We use this to reference code from an external source. We will be using a CDN for Bootstrap instead of downloading the source code.

---

# Create a multi-page, responsive site

[https://github.com/gSchool/intro-html-css](https://github.com/gSchool/intro-html-css)

^ We will be following this guide to create our sites

---

# Check In

- Do you have Atom installed?
- Are you using Chrome as your browser?

---

#Let's get started

---

# First we will add some HTML

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
  </body>
</html>
```

^ I do

---

# Create the index page

- New file called index.html
- Add the body and title to each page
- Add an image
- Open the page in Chrome

^ We do

---

# Take a few minutes to explore
## Add the following tags

- heading `<h1>`
- paragraph `<p>`
- img `<img>`
- break `<br>`

^ You do

---

# Check In

- Are you able to open index.html?
- Do you see your title?
- Do you see text on the page?
- Do you see your image?


---

# CSS: Add some style

- Create the main.css file
- Reference it in the index.html file
`<link rel="stylesheet" href="main.css">`

^ We will add this to the header of the html file that we are working on

---
# Explore a CSS file

```css

img {
  border: 1px solid black;
}

#name{
  color: green;
}

.card{
  text-align: center;
}

.main_header{
  color: red;
}
```

^ id selector, element selector

---

# Take a few minutes to explore

- color: green;
- border: 1px solid black;
- margin: 10px;
- padding: 10px;
- text-align: center;

^ You do


- Is your text the color you want it to be?
