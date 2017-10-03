theme: Titillium, 1
autoscale: true
slidenumbers: true
<!-- @author: Pete Silva -->


![](img/bg.png)
## Templating w/ Express

---

![](img/bg.png)
## Objectives

- Be able to explain what templates are and what they do for us
- Name 3 templating engines/syntaxes we can use with Express
- Explain how we get data into a template from our Express routes
- Explain what a partial is

---

![](img/bg.png)
## What is server-side templating?

Files that are mostly HTML-like peppered with special tags that let us pull in data provided by our routes.

---

![](img/bg.png)

There are many templating engine syntaxes, but we will focus on 3 commonly used with Express:

- **EJS**
- **Handlebars**
- **Pug** (formerly Jade)

---

![](img/bg.png)
## EJS

- Looks mostly like normal HTML
- `<% %>` tag will execute containing code. Good for conditionals, loops
- `<%= %>` tag will evaluate a JS expression, and output result. Good for output of variables

---

![](img/bg.png)

```html
<html lang="en">
  <body>
    <h1>All the Puppies</h1>
    <ul>
    <% puppies.forEach(function(pup) { %>
      <li>
        <a href="/puppies/<%= pup.id %>/edit">
          <%= pup.name %>
        </a>
      </li>
    <% }); %>
    </ul>
  </body>
</html>
```

---

![](img/bg.png)
## Handlebars

- Looks mostly like normal HTML
- Limited if statements, supports loops
- Mostly focused on output of variables

---

![](img/bg.png)

```html
<html lang="en">
  <body>
    <h1>All the Puppies</h1>
    <ul>
    {{#each puppies}}
      <li>
        <a href="/puppies/{{ id }}/edit">{{ name }}</a>
      </li>
    {{/each}}
    </ul>
  </body>
</html>
```

---

![](img/bg.png)
## Pug/Jade

- Shorthand representation of HTML
- Tabs indicate scope (like Python)
- Supports conditionals, loops, variable output

---

![](img/bg.png)

```
html(lang="en")
  body
    h1 All The Puppies
    ul
      each pup in puppies
        li
          a(href="/puppies/#{pup.id}/edit")= pup.name
```

---

![](img/bg.png)

But how do we actually get our data from our route into the template?

(demo)

---

![](img/bg.png)
## Partials

Templates that represent just a fragment of HTML or layout which can be included from other more complete templates. E.g. HTML for a navbar component that needs to be reused on multiple pages.

---

![](img/bg.png)
### views/partials/navbar.ejs

```html
<nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">Puppies!</a>
        </div>
        <ul class="nav navbar-nav">
            <li><a href="/">Puppy List</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </div>
</nav>
```

---

![](img/bg.png)
### views/index.ejs

```html
<html lang="en">
  <body>
    <% include partials/navbar %>
    <h1> All The Puppies </h1>
    <ul>
    <% puppies.forEach(function(pup) { %>
      <li>
        <a href="/puppies/<%= pup.id %>/edit">
          <%= pup.name %>
        </a>
      </li>
    <% }); %>
    </ul>
  </body>
</html>
```

---

![](img/bg.png)
## Objectives

- Be able to explain what templates are and what they do for us
- Name 3 templating engines/syntaxes we can use with Express
- Explain how we get data into a template from our Express routes
  - Everyone slack a res.render() that pushes some data to a template
- Explain what a partial is
