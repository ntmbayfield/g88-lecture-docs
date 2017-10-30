theme: Merriweather, 3
autoscale: true
slidenumbers: true
<!-- @author: Pete Silva -->

### Notes:

---

### Objectives
- Explain what Mocha, Chai, Supertest do individually
- Write tests for RESTful routes in Express apps using Mocha/Chai/Supertest

---

Mocha
  - Test framework
  - Runs all our tests for us
  - "describe, beforeEach, afterEach, context, it" blocks

Chai
  - Assertion library
  - everything inside "it" blocks
  - "expects, should, assert, equal, exist" blocks
  - defines expectations

---

Supertest
  - Let's GOOOOGLE it

---

Supertest
  - Allows testing of HTTP routes

---

```bash
express --git --view=hbs sloths_app
```

---

knex.js

```javascript
// Choose an enviroment setup from knexfile
// Get env vars
// Then require knex package, passing in the env config we just found

'use strict';

const environment = process.env.NODE_ENV || 'test';
const knexConfig = require('./knexfile')[environment];
const knex = require('knex')(knexConfig);

module.exports = knex;
```

---

```bash
npm install --save pg knex
npm install --save-dev chai mocha supertest
npm install
```
Last install for express-gen deps

---

in package.json add

```json
"scripts": {
  "test": "mocha ./test/test-app.js"
}
```

So you can run tests with either

```bash
mocha test/my-tests.js
npm test
```

---
`psql -f myfile.sql`

```sql
\c postgres;
DROP DATABASE IF EXISTS knex_sloths_test;
CREATE DATABASE knex_sloths_test;
\c knex_sloths_test;

DROP TABLE IF EXISTS sloths;
CREATE TABLE sloths (
  id serial,
  name text,
  age integer,
  image text
)
```

---

knexfile.js
If too much unknown debug msgs:

debug: false

---
