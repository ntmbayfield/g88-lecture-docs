# AJAX

Including JSON & Promises!!

---

# Objectives

- Define AJAX
- Describe Asynchronous vs Synchronous
- Define APIs and JSON
- Define the states of Promises
- Write Promises to handle async code

---

# AJAX

> Asynchronous JavaScript and XML

...

### Asynchronous

> Task that runs in the background, outside of synchronous flow

----

# Question

How does async compare to sync?

---

## Asynchronous Example

Imagine grading a stack of papers ...

## [✓] &nbsp; [&#42;] &nbsp; [&#42;] &nbsp; [✓] &nbsp; [✓]

**[✓] = Ready to grade**  
**[&#42;] = Missing Name**

...

Which of these are Asynchronous?

----

## Sync Examples

- Rendering of an HTML page
- Rendering CSS or JavaScript

...

## Async Examples

- `<script>` tags with `defer` on them

And of course, anything loaded with AJAX!

---

# AJAX Usage

What do we use AJAX for?

> To exchange data with a server without blocking the other functionality of our app

----

# AJAX with APIs

We need data!

APIs are our destination for  
getting, setting, and modifying data.

- `GET`
- `POST`
- `PUT` / `PATCH`
- `DELETE`

We can make all these "requests" with AJAX  
using JSON Data

----

# JSON

> JavaScript Object Notation

```javascript
{
  "name": "Bart Simpson",
  "siblings": ["Lisa", "Maggie"],
  "adult": false,
  "skills": {
    "skateboarding": 10,
    "pranks": 9,
    "math": 6.5
  }
}
```

----

## JSONs Simple Rules

```javascript
{
  "key": "value",
  "key2": 123,
  "key 3": true
}
```

- Keys and string values must have double quotes
- Numbers and booleans don't require quotes
- Trailing commas are NOT allowed

```javascript
{
  "colors": ["red", "green", "blue"],
  "hues": {
    "purple": {
      "light": ["periwinkle", "pixie dust"]
    }
  }
}
```

- Nesting can go as deep as you need

---

# Making AJAX Requests

`Let's code!`

Open [jsfiddle.net](https://jsfiddle.net)

----

## Basic `GET` Request

```javascript
$.get('https://jsonplaceholder.typicode.com/users', function(result) {
  console.log(result)
})
```

We're saying  
> Get the JSON data at this URL, and run this function when you're done

----

## Basic `POST` Request

```javascript
$.post('https://jsonplaceholder.typicode.com/users',
 { name: 'George Costanza' },
 function(result) {
  console.log(result)
})
```

We're saying  
> Post (create) to this URL with this JSON data, and run this function when you're done


---

# Promises

Now that we're making requests and relying on data  
we need to handle async in a better way

Introducing, Promises!

----

# Promises

What's so special about a promise?

A promise has three states:

- Pending (in progress)
- Fulfilled (resolved)
- Rejected (failed)

With these three states, we always know the status  
of our async code, allowing us to trigger callbacks  
when we reach our desired status

----

## Promise Examples

## Pending

We've made a request to a server:

```javascript
// Using jQuery Deferred
// As soon as it starts the request we are in "pending" mode
$.get('https://jsonplaceholder.typicode.com/users')
```

We want to create a Promise to run some code async:

```javascript
// Using ES6 Promises
var promise = new Promise(function(resolve, reject) {
  // In a "pending" state until we call `resolve()` or `reject()`
})
```

----

## Promise Examples

## Fulfilled

We got back data with a successful status code:

```javascript
// Using jQuery Deferred
$.get('https://jsonplaceholder.typicode.com/users', function(result) {
  // Our `result` is now available
})
```

We want to resolve our async code:

```javascript
// Using ES6 Promises
var promise = new Promise(function(resolve, reject) {
  // resolves after a 5 second delay
  setTimeout(function() {
    resolve('Great Scott!')
  }, 5000)
})
```

----

## Promise Examples

## Rejected

We had a connection or server error:

```javascript
// Using jQuery Deferred
$.get('https://jsonplaceholder.typicode.com/users').catch(...)
```


We didn't like the data we got:

```javascript
// Using ES6 Promises
var promise = new Promise(function(resolve, reject) {
  if (parentsResponse === 'NO') {
    reject(' :( ')
  }
  else {
    resolve(' :) ')
  }
})
```

----

## Promise Examples

We saw how to change the state.

How do we act on the state change?

`.then()` and `.catch()`

----

## Promise Examples

```javascript
// Using jQuery Deferred
$.get('https://jsonplaceholder.typicode.com/users')
  .then(success, rejected)
```

```javascript
// Using jQuery Deferred
$.get('https://jsonplaceholder.typicode.com/users')
  .then(success)
  .catch(rejected)
```

OR

```javascript
// Using ES6 Promises
var promise = new Promise(function(resolve, reject) {
  // ...
})

promise.then(success, rejected)
// OR
promise.then(success).catch(rejected)
```

----

## Promise Examples

And finally, What if we have multiple async requests out?

```javascript
// Using jQuery Deferred
$.when(request1, request2)
  .then(success)
  .catch(rejected)
```

OR

```javascript
// Using ES6 Promises
Promise.all([promise1, promise2])
  .then(success)
  .catch(rejected)
```

---

# Objectives

- Define AJAX
- Describe Asynchronous vs Synchronous
- Define APIs and JSON
- Define the states of Promises
- Write Promises to handle async code

----

# Questions

- What does AJAX stand for?
- How do Asynchronous and Synchronous differ?
- What are APIs used for?
- What are the "simple rules" of JSON?
- What three states do Promises have?

And a code challenge...

----

# Code Challenge

Given this code:

```javascript
// Using jQuery Deferred
$.get('https://jsonplaceholder.typicode.com/users')
  .then(function(result) {
    console.log(result.length)
  })
  .catch(function(error) {
    showError(error)
  })
```

- What will happen if this promise is fulfilled?
- What will happen if it's rejected?

---

### Pat yourself on the back.

This shit ain't easy.
