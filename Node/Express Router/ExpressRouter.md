# Express/Router

---

## Objectives

- Explain what an Express router is.
- Explain why an Express router is useful.
- Use the Express router to organize RESTful routes.

---

# [fit]What's an Express `router`?

^ An **Express router** is a proxy that you can use for attaching groups of middleware. Once middleware has been attached to the router, it can be attached to an Express application itself.

^ A way to organize your code in RESTful routes

---

```javascript
'use strict';

var express = require('express');
var router = express.Router();

router.get('/english', function(req, res) {
  res.send('Hello world');
});

router.get('/spanish', function(req, res) {
  res.send('Hola mundo');
});

module.exports = router;
```

---

```javascript
'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

var greet = require('./greet');

app.use(greet);

app.listen(port, function() {
  console.log('Listening on port', port);
});
```

---

# [fit] Why is an Express router useful?

---

## It allows you to organize a project's RESTful routes into separate, resource-specific file modules.

---

## Node.js doesn't care if all the RESTful routes live in the same file. 

## Do you want to build and maintain thousands of lines of code in a single file?

---

## By using an Express router, you can split the RESTful routes for each resource into separate file modules.

---

```
├── routes
│   ├── activities.js
│   ├── drinks.js
│   ├── foods.js
│   ├── guests.js
│   └── prizes.js
└── server.js
```

---

#Questions?