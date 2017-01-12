
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

# dotenv
## `require('dotenv').config()`

^ require dotenv as early as you can in your app.js
use a .env file to store variables that you want to keep hidden. Add it to the gitignore.

---

# Storing Environment Variables in .env
## `DATABASE_URL=`

---

# Accessing Environment Variables
## `process.env.DATABASE_URL`

^
add gitignore
install dotenv package
add info to .env file

---

# What is Heroku?

![](file:///Users/teddimaull/Desktop/desktop/pixabayimages/mars-1326108_1280.jpg)


---

# Connect Git and Heroku
## `heroku create restaurants-martha`

![](file:///Users/teddimaull/Desktop/desktop/pixabayimages/entrepreneur-1103717_1280.jpg)

^ This command sets up your app, with the name you choose, on Heroku as well as a Git remote called heroku.

---
# Send the files to Heroku

`git push heroku master`

![right](file:///Users/teddimaull/Desktop/desktop/pixabayimages/rocket-launch-67649_1920.jpg)

---

# Add Your Database

`heroku addons:create heroku-postgresql`
`heroku run knex migrate:latest`
`heroku run knex seed:run`

^these are not the commands for the sample app
bookshelf deployment will fail on this step if you have not added a production db to your knexfile.js
add seed info

---

# Open your app

## `heroku open`

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
