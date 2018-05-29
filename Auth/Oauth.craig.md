build-lists: true

# Introduction to OAuth

---

# Objectives
* Identify use-cases for OAuth
* Draw and explain the OAuth data flow
* Implement OAuth using Passport

---

# Researching Oauth on the Internets with Partner (7 minutes)
- What is Oauth?  What does the O stand for?
- What are the advantages of using Oauth over managing username/passwords in your database
- What clients/servers are involved in an Oauth authentication flow?

---

# Why OAuth?
* Reduce development costs
* Make it easy on the API user (no username / password)
* Security

---

# What is OAuth
* An authentication protocol
* Allows users to login to our applications via a third party (Facebook, etc.)
* Our users grant us permission to access their account info

---

# What are the 3 machines involved in a typical OAuth flow?
* Client
* Our server
* Third party server

---

# Here is one visualization of the OAuth flow:
* [http://slides.com/tylerbettilyon/oauth#/4](http://slides.com/tylerbettilyon/oauth#/4)

---


# Break up into groups around a whiteboard and try drawing the OAuth flow:
* Go!

---

# Task: Create an express app from scratch and implement OAuth using Passport.js

Resources:
* [Passport.js](http://www.passportjs.org/docs/)
* [Passport example with explanation](https://github.com/gSchool/oauth-express-passport-explanation)
* [github Oauth](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/)

---



# Steps to setup Oauth2

1. Register your App with the Provider including the url they should return you to if it's successful

1. Set up ENV variables for you client id/secret

1. Install passport

1. Configure passport

1. Setup callback route

---

# Deployment Setup

- Add your production callback url to the Provider's app configuration
- Set ENV client id/secret (e.g. using `heroku config:set`)

---

# Review
* What are two use cases for OAuth? Why use it?
* What is OAuth? What are the 3 machines involved?
* Who can explain the OAuth data flow?

---

# Resources

https://developers.google.com/identity/protocols/OAuth2WebServer
https://github.com/jaredhanson/passport-oauth2
http://www.passportjs.org/docs

https://github.com/gSchool/oauth-express-passport-explanation

