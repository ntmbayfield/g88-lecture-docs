theme: Titillium, 1
autoscale: true
slidenumbers: true
<!-- @author: Pete Silva -->

![](http://wallpup.com/wp-content/uploads/2013/04/Cool-Background-Green-Leaf.jpg)

## Full Stack CRUD REST, a guide
## Slack these out to begin

---
![](http://wallpup.com/wp-content/uploads/2013/04/Cool-Background-Green-Leaf.jpg)

## We are going to build a simple full stack app tracking __directors__ and the __movies__ they have made.

![fit inline](img/movieAppERD.png)

---
![](http://wallpup.com/wp-content/uploads/2013/04/Cool-Background-Green-Leaf.jpg)

## Phase 1: Express + Knex + DB Setup
## (30 min)

---
![](http://wallpup.com/wp-content/uploads/2013/04/Cool-Background-Green-Leaf.jpg)

# GitHub
- Create a new repo "__movieapp__"
- Initialize w/ README
- Choose "__Add .gitignore: Node__"
- Choose "__Add a license: MIT License__"
- Once created, clone it down to your machine

---
![](http://wallpup.com/wp-content/uploads/2013/04/Cool-Background-Green-Leaf.jpg)

# Express Generator

```
cd movieapp
express --ejs
npm install
```

---
![](http://wallpup.com/wp-content/uploads/2013/04/Cool-Background-Green-Leaf.jpg)

# First commit

```
git status
git add .
git commit -m "first commit"
```

---
![](http://wallpup.com/wp-content/uploads/2013/04/Cool-Background-Green-Leaf.jpg)

# Setup KNEX + Postgres
- Install knex globally, and also locally saving to package.json

```
npm install -g knex
npm install --save knex pg
```

---
![](http://wallpup.com/wp-content/uploads/2013/04/Cool-Background-Green-Leaf.jpg)

# Create knexfile.js

```javascript
// knexfile.js: DB connection details
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/movieappdb'
  }
}
```

---
![](http://wallpup.com/wp-content/uploads/2013/04/Cool-Background-Green-Leaf.jpg)

# Create knex.js

```javascript
// knex.js: Intelligently choose environment
// require and setup knex module
const environment = process.env.NODE_ENV || 'development'
const knexConfig = require('./knexfile')[environment]
const knex = require('knex')(knexConfig)

module.exports = knex
```

---
![](http://wallpup.com/wp-content/uploads/2013/04/Cool-Background-Green-Leaf.jpg)

# Create Knex migrations

`knex migrate:make movie`
`knex migrate:make director`

---
![](http://wallpup.com/wp-content/uploads/2013/04/Cool-Background-Green-Leaf.jpg)

```javascript
// Movie migration file
exports.up = function(knex) {
  return knex.schema.createTable('movie', (table) => {
    table.increments();
    table.string('title');
    table.integer('year');
    table.integer('director_id').foreign('director_id').references('director.id');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('movie');
};
```

---
![](http://wallpup.com/wp-content/uploads/2013/04/Cool-Background-Green-Leaf.jpg)

```javascript
// Director migration file
exports.up = function(knex) {
  return knex.schema.createTable('director', (table) => {
    table.increments();
    table.string('name');
    table.string('nationality');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('director');
};
```

---
![](http://wallpup.com/wp-content/uploads/2013/04/Cool-Background-Green-Leaf.jpg)

# Run Knex migrations

`knex migrate:latest`

- Verify in psql CLI tool

```
git status
git add .
git commit -m "migrations created"
```

---
![](http://wallpup.com/wp-content/uploads/2013/04/Cool-Background-Green-Leaf.jpg)

# Create Knex Seeds

`knex seed:make 01_movie`
`knex seed:make 02_director`

---
![](http://wallpup.com/wp-content/uploads/2013/04/Cool-Background-Green-Leaf.jpg)

# Seed the DB

`knex seed:run`

- Verify in psql CLI tool

```
git status
git add .
git commit -m "seeds created"
```

---
![](http://wallpup.com/wp-content/uploads/2013/04/Cool-Background-Green-Leaf.jpg)

Review Q+A: 15 min

---
![](http://bgfons.com/uploads/ornaments/ornaments_texture1112.jpg)

## Phase 2: Basic Routes Functioning
## (20 min)

---
![](http://bgfons.com/uploads/ornaments/ornaments_texture1112.jpg)

- Create new route file for each entity by duplicating an existing route file
  - movie
  - director
- Link up route files by adding app.use() lines to app.js

---
![](http://bgfons.com/uploads/ornaments/ornaments_texture1112.jpg)

- For each route file, have 1 GET route respond w/ some success message
- npm start
- Test those GET routes
- Test 404 handling

---
![](http://bgfons.com/uploads/ornaments/ornaments_texture1112.jpg)

- Stub out routes for GET/POST/PUT/DELETE in your route file with simple JSON replies
- Test them out with POSTman or HTTPie

```
git status
git add .
git commit -m "basic routes work"
```

---
![](http://bgfons.com/uploads/ornaments/ornaments_texture1112.jpg)

Review Q+A: 15 min

---
![](https://gogreenhall.org/wp-content/uploads/2013/09/igihof-bg.jpg)

## Phase 3: Routes Fully Working With DB
## (75 min)

---
![](https://gogreenhall.org/wp-content/uploads/2013/09/igihof-bg.jpg)

- Make GET route read from DB
- Make POST route save to DB
- Make PUT route update DB
- Make DELETE route delete from DB
- Test them out with POSTman or HTTPie

```
git status
git add .
git commit -m "routes+db works"
```

---
![](https://gogreenhall.org/wp-content/uploads/2013/09/igihof-bg.jpg)

Review Q+A: 30 min

---
![](http://www.powerpointhintergrund.com/uploads/2017/08/slide-background-15.jpeg)
## Phase 4: Build Frontend + Connect to Backend via AJAX
## (90 min)

---
![](http://www.powerpointhintergrund.com/uploads/2017/08/slide-background-15.jpeg)

- Create HTML/JS in ./public which will issue AJAX calls to our routes
- Write AJAX call to GET route, change the DOM
- Write AJAX call to POST route, change the DOM
- Write AJAX call to PUT route, change the DOM
- Write AJAX call to DELETE route, change the DOM

```
git status
git add .
git commit -m "front+back+db works!"
```
---
![](http://www.powerpointhintergrund.com/uploads/2017/08/slide-background-15.jpeg)

Review Q+A: 30 min
