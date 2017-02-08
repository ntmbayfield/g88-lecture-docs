
#Objectives

By the end of this lesson you will be able to:

- Explain the purpose of dotenv
- Explain Heroku CLI syntax to use to get an app with a database up and running
- Explain what the cause of some errors could be

---

# Associated Standard

- Use dotenv package
  - Set Environment Variables
  - Database connection string is provided via environment variable / works both locally and on Heroku
  - No API keys / auth tokens are committed to git / pushed to Github

---

- App with a database is running on Heroku
- Can use Heroku CLI to
  - View tail logs
  - Attach Postgres addons

---

# Install and use dotenv

1. Install the dotenv package
`npm install dotenv --save`

2. Then require dotenv in your server.js or app.js file
`require('dotenv').config()`

^ require dotenv as early as you can in your app.js
use a .env file to store variables that you want to keep hidden. Add it to the gitignore.

---

# Storing Environment Variables in .env

1. In the .env file create variables like: `NAME=Teddi`
2. In your app, access variables like: `process.env.NAME`

^You can access the variables in the .env file throughout your app like this

---

# Update your knexfile.js with production information

Example:

```javascript
module.exports = {

  development: {
  client: 'pg',
  connection: 'postgresql://localhost:5432/messagingdb_dev'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
 },

};
```

---

# What is Heroku?

![](./images/mars-1326108_1280.jpg)


---

# Create a Heroku App
## `heroku create restaurants-martha`

![](./images/entrepreneur-1103717_1280.jpg)

^ From within the directory that contains your application, you should type this command. This command sets up your app, with the name you choose on Heroku and creates a Git remote called heroku.

---
# Send the files to Heroku

`git push heroku master`

![right](./images/rocket-launch-67649_1920.jpg)

^ Make sure all of your files have been added and committed to git before you push to Heroku. If you make changes, make sure to add/commit/push again.

---

# Setup the Database

1. Provision the postgresql database
`$> heroku addons:create heroku-postgresql`

2. Run your migrations on Heroku
`$> heroku run knex migrate:latest`

3. Run your seed file on Heroku
`$> heroku run knex seed:run`

---

# Open your app

## `heroku open`

^This should open your browser and access the url for your app

---

# All together

Once your app is setup properly (dotenv, knexfile.js, package.json,etc.) and added and committed to git, you will begin to put your files on heroku as follows:

```
$> heroku create your-app-name
$> heroku addons:create heroku-postgresql
$> git push heroku master
$> heroku run knex migrate:latest
$> heroku run knex seed:run
$> heroku open
```

^ The caveat here is that your package.json may be set up with post-build scripts that take care of your migration and seed steps.

---

# Debugging Heroku

## `heroku logs --tail`

^ with tail you will see live logs

---

# View the shell

##`heroku run bash`

---

# Errors in Sample App

- Error: ENOENT: no such file or directory, open '.env'
- Knex:Error Pool2 - Error: connect ECONNREFUSED 127.0.0.1:5432
- Unhandled rejection Error: Pool is destroyed
- Unhandled rejection error: select * from "books" - relation "books" does not exist

---

#One Last Error

```
Starting process with command `npm start`
2016-12-02T20:33:40.684894+00:00 app[web.1]:
2016-12-02T20:33:40.684911+00:00 app[web.1]: > galvanize-bookshelf@1.0.0 start /app
2016-12-02T20:33:40.684912+00:00 app[web.1]: > nodemon server.js
2016-12-02T20:33:40.684913+00:00 app[web.1]:
2016-12-02T20:33:40.697596+00:00 app[web.1]: sh: 1: nodemon: not found
```
---
