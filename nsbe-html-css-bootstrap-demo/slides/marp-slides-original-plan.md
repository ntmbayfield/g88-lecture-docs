<!-- $theme: default -->

# Intro to HTML & CSS

<!-- Install Atom and Chrome -->

---
<!-- page_number: true -->

<!-- *template: invert -->

# Objectives

By the end of this lesson you will...

* Have a development environment for creating a website
* Be able to define and explain:
  - HTML
  - CSS
  - Bootstrap
  - CDN
* Create a multi-page responsive website

---

# Development Environment

---

## Chrome 

Make sure you have Google Chrome installed.
[http://google.com/chrome](http://google.com/chrome) 

---

## Atom

- Install Atom: [https://atom.io/](https://atom.io/)
- Atom is a text editor that makes writing code much easier!

<!--Why can't I use Office? meta data. -->

---

![](https://s3-us-west-2.amazonaws.com/learn.galvanize.com/learn-images/gSchool/html_and_css_for_beginners/NSBE/02-Software/1-Atom/images/atom.jpg)

---

![](https://s3-us-west-2.amazonaws.com/learn.galvanize.com/learn-images/gSchool/html_and_css_for_beginners/NSBE/02-Software/1-Atom/images/file-navigation-atom.jpg)

---

# Check In

- Do you have Atom installed? [https://atom.io/](https://atom.io/)
- Are you using Chrome as your browser? [http://google.com/chrome](http://google.com/chrome) 


---


# Define & Explain

---

## HTML & CSS, The Building Blocks

- HTML - __Hypertext Markup Language__ is the structure/bones
- CSS - __Cascading Style Sheets__ give your pages their look and feel


<!-- Websites are made up of many things, but HTML (Hyper Text Markup Language) and CSS (Cascading Style Sheets) are two of the most important components. Together, they are the building blocks for every single webpage on the Internet. -->

---

## Think of a Car
HTML is like the doors, windows, tires. seats.
CSS is like the size, color, and other attributes.

![Cars](cars-2151317_1280.jpg)


<!-- In the world of HTML, these are the `elements` of a webpage. Meanwhile, each of the car's attributes are usually different. Perhaps they differ by size. Or color. Or wear and tear. These attributes are used to define how the `elements` look. Back in the world of webpages, CSS is used to define the look and feel of a webpage. -->

---

## Bootstrap

CSS frameworks, quite simply, are a large collection of CSS rules that play nice with each other. They make it easy for developers to worry less about the visual design of individual html elements, and more about the bigger picture of the page as a whole.

A bunch of helper methods. Bundles of premade styles.

<!--Update curriculum to remove this Bootstrap is a front-end framework developed by Twitter. -->

---

## CDN

Stands for __content delivery network__. It is an online repository of commonly used Javascript and CSS files. It's a good practice to use a CDN in your production code, as many of the files are pre-cached, so your site will actually load faster.

Files on a computer that a lot of people access so your browser does not have to download because it is cached.

<!--What is a repository? What is caching? What is production code? -->

---


# Creating an Online Resume

<!-- Show what we are making first -->

---

# HTML


Start by adding some basic structure:

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
  </body>
</html>
```

Type this basic webpage structure into your text editor. Save this file as *index.html*.

<!--
1. `<html>` is the first tag and it informs the browser that all code between the opening and closing, `</html>`, tags is HTML.
1. The `<head>` tag contains links to CSS stylesheets and Javascript files that we wish to use in our web page, as well as meta information used by search engines for classification. In the above HTML, I used the `<title>` tag to give the web page a title.
1. All code that falls within the `<body>` tags are part of the main content of the page, which will appear in the browser to the end user.

-->

---

## Tags
Tags form the structure of your page. They surround and apply *meaning* to content. There usually is an opening tag and then a closing tag, like - `<div></div>`, a divider.

Let's look at four tags:

1. title `<title> </title>`
2. heading `<h1> </h1>`
3. paragraph `<p> </p>`
4. img `<img>`

---

### Title
`<title>` displays the title in the browser toolbar. It's also used for the title when its added to your browser's favorites and the title of your page for search engine results.

---

### Headings
- These include the `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>` and `<h6>` tags. 
- `<h1>` is the main heading and the remaining headings decrease in size, with `<h6>` being the smallest. 


---

### Paragraph

Paragraphs: The `<p>` tag is used for splitting content into separate paragraphs. Each new `<p>` tag will appear on a new line.

---

### Images
  - Some tags, like the `<img>` (image) do not require a closing tag. 
  - The image tag requires a `src` attribute pointing to the location of the image

---


## Putting it all together

Let's add the tags that were discussed.

---


```html
<!DOCTYPE html>
<html>
  <head>
    <title>Resume: Darth Vader, Lord of the Sith</title>
  </head>
  <body>
    <h1>Darth Vader</h1>
    <p>Lord of the Sith</p>
    <img src="http://upload.wikimedia.org/wikipedia/en/7/76/Darth_Vader.jpg">
  </body>
</html>
```
---

Open the page in Chrome; it should look something like this:

![resume1](https://raw.github.com/mjhea0/thinkful-html/master/resume/images/resume1.png)


---

### You try it
- Create a page that contains a title, some text, and an image
- Note: [http://pixabay.com](http://pixabay.com) is a great place to get free, open-source images
- Reminder:
	+  title `<title> </title>`
	+ heading `<h1> </h1>`
	+ paragraph `<p> </p>`
	+ img `<img src="myimage.jpg">`


<!--Have an image for them to use that is the correct size so we can control for time . Give them a URL. Give a challenge for another p tag, etc.-->

---

# Check In

- Are you able to open index.html?
- Do you see your title?
- Do you see text on the page?
- Do you see your image?


---

## CSS

While HTML provides, structure, CSS is used for styling, making webpages look nice. 

---

## Create a CSS file

In your website directory create *main.css* then type this basic structure in the file

```css
html body{
  background-color: white;
}

img{
  border: 1px solid black;
}

.card{
  text-align: center;
}

.main_header{
  color: red;
}

```

---

## Link index.html to main.css
Next, we need to "link" our HTML page and CSS stylesheet. To do so, add the following code to the `<head>` section of the HTML page just below the title:

```html
<link rel="stylesheet" href="main.css">
```
---

## Reference the CSS class

use the class attribute to reference the classes that you created in the main.css file.

Example:
```html
<h1 class="main_header">Teddi Maull</h1>

```

<!-- Notice that the period is missing. It is not necessary to include it when referencing a class name in the html file. -->

---

Your code should now look similar to this:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Teddi Maull Resume</title>
    <link rel="stylesheet" href="main.css">
  </head>
  <body>
    <div class="card">
      <h1 class="main_header">Teddi Maull</h1>
      <p>Instructor, Web Development Immersive</p>
      <p>teddi.maull@galvanize.com</p>
      <img src="office-820390_640.jpg" alt="Office Image"/>
    </div>
  </body>
</html>
```
---

## Look at your site in Chrome

- Save the file. 
- Check it out in your browser.
- Do you see the difference?

---

## Selectors, Properties, & Values

```css
body{
  background-color: beige;
}

img {
  border: 1px solid black;
}

.card{
  text-align: center;
}

.heading{
  color: pink;
}
```

---

### You try it
- Put a border on your image, change the color of your header text, explore additional styling.
- Reminder:
	+  `border: 1px solid black;`
	+  `color: red;`


<!-- change the color of the text for a p tag -->

---

# Check In

- Do you see the text color change?
- Do you see a border on your image?
- What styles did you explore and find interesting?

---

## Connect index.html to resume.html
Somewhere in the body, add the following code:

```html
<a href="resume.html">Resume</a>
```
---

Your code should now look similar to this:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Teddi Maull Resume</title>
    <link rel="stylesheet" href="main.css">
  </head>
  <body>
    <div class="card">
      <h1 class="main_header">Teddi Maull</h1>
      <p>Instructor, Web Development Immersive</p>
      <p>teddi.maull@galvanize.com</p>
      <p>
        <a href="resume.html">Resume</a>
      </p>
      <img src="office-820390_640.jpg" alt="Office Image"/>

    </div>
  </body>
</html>
```

---

### You Try it - Create a resumé page


- In the head, link to the main.css file
- In the body, add the text "Hello World" in a p tag with the class "header"


---

# Check In

- Can you click the link from index.html to get to resume.html?
- Do you see Hello World on the resume.html page?
- Is the Hello World text the color of your main_header CSS class?

---

Your code should now look similar to this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="main.css">
    <title>Resume</title>
  </head>
  <body>
  <p class="header">Hello World</p>
  </body>
</html>

```
---


# Bootstrap

Add the Bootstrap link to the head of your HTML pages.

  ```html
  <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootswatch/3.1.1/cyborg/bootstrap.min.css">
  ```

Take a look at your pages. That's just from adding one line of code!

---

## Style Your Image


add Bootstrap classes to your image on the index.html page.

+ Make it responsive `img-responsive`
+ Center it `center-block`
+ Give it rounded edges `img-rounded`


---


## Bootstrap Grid System

 The grid system allows you to easily organize your content into a responsive design based around a 12-column grid. In order to make use of this grid, we need to wrap the main area of our content in one of Bootstrap's container classes: either .container or .container-fluid:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="main.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <title>Resume</title>
  </head>
  <body class="container-fluid">
    <div>Hello, World!</div>
  </body>
</html>
```

---

## Rows and Columns
To make use of the grid layout, we can add column classes to our divs. Every column needs to be inside of a div with the row class in order for Bootstrap's styling magic to work.

```html
<div class="row">
  <div class="col-md-12 bg-primary">Hello, World!</div>
</div>
```

<!-- add images to show rows and columns -->

---


### Let's put the container/row/columns together

  ```html
<div class="container-fluid">
    <div class="row">
      <div class="col-md-12 bg-primary">Hello, World!</div>
    </div>
    <div class="row">
      <div class="col-md-6 bg-success">Hello,</div>
      <div class="col-md-6 bg-danger">World!</div>
    </div>
    <div class="row">
      <div class="col-md-2 bg-info">Hi!</div>
      <div class="col-md-2 bg-warning">Hi!</div>
      <div class="col-md-2 bg-info">Hi!</div>
      <div class="col-md-2 bg-warning">Hi!</div>
      <div class="col-md-2 bg-info">Hi!</div>
      <div class="col-md-2 bg-warning">Hi!</div>
    </div>
</div>
  ```

 <!-- Note: I am using bootstrap background color classes so we can visualize the rows and columns -->
  

---

## Let's Explore the Grid Together

---


# You Try it

- Put the grid into the body of your resume.html page
- Explore what happens if you change the column sizes
- Create the grid layout you need for your resume

---

# Check In

- What surprised you about the grid system?
- What challenges are you experiencing?


---

# Final Site

---

# Thank you!