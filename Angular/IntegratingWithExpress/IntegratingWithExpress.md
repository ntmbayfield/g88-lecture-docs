# Integrating with Express

---

# Knowing how to package your application along with the API will be crucial to deploying.

---

# HTML5 Mode

---

# The Problem:

# Mixing Express and Angular Routing.

^Requesting http://example.com/people/4 - means Express will serve index.html - so that angular can process the correct route.

---

# Wildcard Route

```js
app.use('/api/people', people)
app.use('/api/addresses', addresses)

// install wildcard route beneath other routes
app.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')})
})
```

---

# Using NPM 

# (Client-Side Stuff)

---

# The article says do this:

You can easily change that by adding another `express.static` line, like so:

```js
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, '/../', 'node_modules')))
```

Then in `index.html` you can just write:

```html
<script src="/angular/angular.min.js"></script>
<script src="/angular-ui-router/release/angular-ui-router.min.js"></script>
```

---

> What I would do is serve the libraries individually.

^Avoid giving access to all of node_modules.

---

# Code Along

---

# browsersync

- Live reloading
- Interaction synchronization
- Simulate slow connections
- More!

^Its in the article, try it.

^It demonstrates the live reloading.