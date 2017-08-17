# Node Modules

---

## Objectives

- Explain what a Node.js module is.
- Split existing code into two modules.
- Export and require a function.
- Export and require an object.
- Explain what the three kinds of modules are.

---

## What is a Node Module?

^ a module is just a file that contains JavaScript code

---

## Export a Function

```javascript
'use strict';

module.exports = function(a, b) {
    return a + b;
};
```

---

## Require a Function

```javascript
'use strict';

var add = require('./arithmetic');
var result = add(1, 2);

console.log(result);
```
---

## Export an Object

```javascript
'use strict';

function add(a, b) {
    return a + b;
};

module.exports = {
  add
}


```

---

## Require an Object

```javascript
'use strict';

var arithmetic = require('./arithmetic');
var result = arithmetic.add(1, 2);

console.log(result);
```
---

## Steps for Creating a Module

- Identify which piece of code to export.
- Create a new module.
- Move that code to the new module.
- Assign that code to the module.exports object.
- Require the new module in the original module using the require() function.

---

# Demo
## Split existing code into 2 modules

^ g44/q2/create_module

---

## 3 Kinds of Modules

- Core Modules
- Modules from NPM
- Modules you Create

---

# Module Examples

```javascript
//Core
var fs = require('fs');
var path = require('path');
var http = require('http');

//Imported from npm
var express = require('express');
var bodyParser = require('bodyParser');

//my modules
var arithmetic = require('./arithmetic');


```

---

## Review Objectives

- Explain what a Node.js module is.
- Split existing code into two modules.
- Export and require a function.
- Export and require an object.
- Explain what the three kinds of modules are.

---

## Optional Demo
# "What will this log"

^g44/q2/modexports_playground
