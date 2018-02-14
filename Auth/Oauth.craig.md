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

# The best app you've never heard of:

* Everything you ever wanted
* More than just an app - This is a lifestyle
* Such crazy deals it doesn't even make sense

---

# CODE.PIZZA
![pizza 80%](https://i.chzbgr.com/full/8557342464/h3F7A8A28/ "Code + Pizza")

---

# The skit
* Katie (Client)
* Sean (Our server)
* Teddi (Third party server)

---

# Break up into groups around a whiteboard and try drawing the OAuth flow:
* Go!

---

# Review
* What are two use cases for OAuth? Why use it?
* What is OAuth? What are the 3 machines involved?
* Who can explain the OAuth data flow?

---

# Implement OAuth using Passport
* Check out the branch "step1" from the following repo:
* [https://github.com/seanhelvey/oauth-express-passport-explanation] (https://github.com/seanhelvey/oauth-express-passport-explanation)

---

# Resources

https://developers.google.com/identity/protocols/OAuth2WebServer
https://github.com/jaredhanson/passport-oauth2
http://www.passportjs.org/docs

https://github.com/gSchool/oauth-express-passport-explanation



# Steps to setup Oauth2

1. Register your App with the Provider including the url they should return you to if it's successful

1. Set up ENV variables for you client id/secret

1. install passport

1. configure passport

1. setup callback route

---

# Deployment Setup

- add your production callback url to the Provider's app configuration
- set ENV client id/secret