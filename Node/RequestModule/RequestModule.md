# [fit]Server 

# [fit]Side 

# [fit]Requests

---

# **Objectives**

- Understand why you would want to make requests on the server side, give examples
- Use the request module to make GET and POST requests
- Make server side requests with express

---

# Questions for the class

- What are some reasons for sever side requests?
- What browser security policy might prevent us from using an api on the client side?
- Why would you want requests for a service like S3 to happen mainly on the server side?
- What are some other examples of APIs that you'd prefer on the server side?
- Define **Service Oriented Architecture**.

---

# [fit]Request Promise Module

```
npm install --save request-promise
```

---

# Get Request

```javascript
var request = require('request-promise');
request({uri: 'https://fs-student-roster.herokuapp.com/'})
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });
```

---

# Post Request

```javascript
var request = require('request-promise');

var data = {
  name: 'Baxster',
  hobby: 'Surviving being thrown off bridges',
  avatar: 'http://cdn.bleedingcool.net/wp-content/uploads/2013/11/baxter-600x354.jpg'
};

var options = {
  uri: 'https://fs-student-roster.herokuapp.com/',
  method: 'POST',
  json: true,
  body: data
};

request(options)
  .then(function(parsedBody) {
    console.log(parsedBody);
  })
  .catch(function(err) {
    console.log(err);
  });
```

---

# With Express

```javascript
var express = require('express');
var rp = require('request-promise');
var app = express();

app.get("/", function (req, res) {
  rp({uri: 'http://www.omdbapi.com/?i=tt4331680&plot=short', json: true})
    .then(function(movieData) {
      var result = "Title: " + movieData.Title + "<br>" + "Year: " + movieData.Year + "<br>";
      res.send(result);
    })
    .catch(function(err) {
      res.send('Sorry there was an error: ', err);
    });
});

app.listen(3000, function () {
  console.log("Starting a server on localhost:3000");
});
```

---

#Questions?