# Auth^2 Plan

## Day One:
+ List topics for Auth^2 ... Authentication, Authorization, Cookies, Sessions, Hashes, 1 way encryption, bcrypt, JWT, token
+ Draw Diagram of Registration, Login, Authorization and connect topics to diagram
+ Have students identify HTTP Methods & Paths for Bookshelf requests and status codes for responses
+ Go through Authentication Overivew slides
https://docs.google.com/presentation/d/1n8cLu07crWlp3arLhNjwN9mVt4LRlqc_NHFTqvbkwTo/edit#slide=id.gf41a3e02f_0_7
+ Go through Authentication Passwords slides
https://github.com/gSchool/LectureDocs/blob/master/Auth/Authentication_Complete.md

+ Group in 3's and have them tackle bcrypt exercise ( 1-1.5 hours)
https://github.com/gSchool/auth-password-hashing

---

## Day Two:
+ Revisit Diagram from Day One

+ Go through Authorization Slides
https://docs.google.com/presentation/d/1DIN5qQlFX1P5Fn9yBtHBzvf4M0AEdt6Vkk_DbF2RM-4/edit#slide=id.gf421c8a5b_0_279

---

## Research on your own ( 5 min )
+ In express, how do you require and "use" cookies from an HTTP request?
+ How do you get information out of a request cookie (inside a route)?
+ How do you set information in a response (inside a route)?

---

Simple cookie code along
+ make a quick express app that sets/gets a cookie

---

## Research on your own ( 5 min )
https://jwt.io/introduction/

+ What is a Javascript Web Token?
+ What are the three main parts of a JWT?
+ In which part would you store information about a user such as their name and user id?
+ What does it mean to sign a JWT?
+ How do you retrieve and check the integrity of a payload of a JWT?

---

Simple JWT code along, using previous cookie example add JWT sign/verify example
+ JWT demo?
https://github.com/gSchool/jwt_simple_demo

---

+ Group in 3's go through Middleware exercise (2 hours)
https://github.com/gSchool/express-middleware-authorization
