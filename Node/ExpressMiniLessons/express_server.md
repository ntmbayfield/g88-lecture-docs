# Express Server

---

## Objectives

By the end of this lesson, you will be able to:

- Explain what Express is
- Explain what a route is
- Read and explain each line of a basic Express server
- Build a simple full stack app with one route ~~in under 5 minutes~~
- Use checklist, build and burn, and I do/We do/You do learning techniques

---

# Express is a...
## Fast, un-opinionated, minimalist framework for Node. [^1]

[^1]:[Express Website](http://expressjs.com/)

---

# Research: What is a Route?

^ What is a route? http://expressjs.com/en/starter/basic-routing.html
Simile - A route is like ___________

---

# Explain some Code

---

```javascript
'use strict';

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/api', function(req,res){
  res.send({greeting:"Hello from the api"});
})

app.listen('3000',function(){
  console.log("listening on port 3000");
});
```

---

# Make a Checklist

^ I want you to write out this checklist -
initialize npm
install express
require express
invoke express
use middleware to serve static files
create a route that handles a GET request for the main api route
make the server listen on port 3000

---

# Resources

^ Express website

---

## Review Objectives

- Explain what Express is
- Explain what a route is
- Read and explain each line of a basic Express server
- Build a simple full stack app with one route ~~in under 5 minutes~~
- Use checklist, build and burn, and I do/We do/You do learning techniques

^ partner up and take a few minutes to take turns explaining simple server code

---

# Build and Burn

---

# I do, We do, You do

^ We will be doing a lot of drilling and code alongs this quarter. One technique that we use is I/We/You. Gradual release of responsibility for the topic.
Staying for this portion is up to you.
---
