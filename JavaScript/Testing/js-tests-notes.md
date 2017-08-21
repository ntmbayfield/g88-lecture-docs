theme: Merriweather, 3
autoscale: true
slidenumbers: true
<!-- @author: Pete Silva -->

### Notes:

---

### Objectives
- Write tests for RESTful routes in Express apps using Supertest
- Write tests to handle errors in your Express apps

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
npm install --save express pg knex body-parser
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
