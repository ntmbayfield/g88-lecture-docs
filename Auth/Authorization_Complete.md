# [fit]Authorization

---

# Review

---

# Next: Storing Credentials on the client

^ Why?

^ Don't login each time.

---

# We have choices ...

---

# Cookies

- Small - max 4kb
- Set by the server
  - In the response header
  - Set-Cookie
- The browser sends all cookies it has stored in the request
  - Cookie header
  - key/value pairs

---

# Cookie Expiration

- Session Cookie
  - Deleted after the browser has quit
- Peristent COokie
  - Deleted after a specified priod of time

---

# cookie-parser

- Read a Cookie
  - req.cookies;
- Set a Cookie
  - res.cookie(name,val[,options]);
- Clear a cookie
  - res.clearCookie(name[,options]);

---

# Code Along

---

# Cookie Security

![Dtoor9tnmUJoJ7hmzYeKmL7o.jpeg](https://lh3.googleusercontent.com/F3XR_VcoXapW-7KEHF3WfZJe3m1bqzbu6_4jjOML51E10IZArzO5jIcOdw9WawkUl5xs9zY4ffPzsi0Vs8yATOWMKYTftITgOcS9X2bfI3__LvVjp7f7GKzrElkZSW5hqqX8O6pSZXs)

---

# Session Hijacking

- Always use HTTPS
- Indicate to the browser that the cookie should be secure.
  - Secure:true option to setCookie.

---

# Cross Site Scripting (XSS)

- Hacker adds malicious javascript - that can read document.cookie and can send it back to the hacker.
- Set HTTPOnly Flag
  - Tells the browser to not allow javascript to access the cookie.

---

# Brute Force/Guessing

- A hacker sees the format of your cookie.

  - Example - userId: 3

- Starts making requests and guessing

  # What we can do

- Signed Cookies

  - Value + Cryptographic Signature

- Add encryption key when adding middleware

---

# Sessions

---

> Cookie-session … we already have cookies, what's the difference?

---

# Sessions do not equal Cookies

---

# Sessions store a unique id that map to some data for a session.

---

# That data can be stored anywhere.

# Session data can be stored in ...

- Cookies
- Database
- MemCache
- Redis
- Etc

---

# Cookie Session is an abstraction

---

# It stores session data in cookies - but does it in the same way other session providers do.

# Using req.session

---

# This allows you to swap out cookie-session for any other session handler without changing the underlying code.

---

# This is one advantage … but cookie-session has many other benefits.

---

# cookie-session

- Cookie-session has sensible defaults.
- HTTPOnly
- Secure over HTTPS
- Signed and Encrypted cookie values.
- A simpler API than cookie-parser.
- Allows for key-rotation.

---

# Middleware

- Application-Level
- Route-Level
- Sub-Stack

---

# Sub-Stack?

- You can "stack" functions in a route.

---

# Questions?

---

# Full Code Along later.