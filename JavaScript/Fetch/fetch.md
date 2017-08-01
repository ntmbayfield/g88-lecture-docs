# [fit] Fetch

---

# Objectives

- Describe Fetch vs XHR
- Implement the Fetch API

---

# [fit] March 1999

---

![fit](images/The_Matrix.jpg)

---

![fit](images/Star_Wars_Phantom_Menace_poster.jpg)

---

![](images/melissa.jpg)

---

![fit](images/Outlook.jpg)

---

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.responseType = 'json';

xhr.onload = function() {
  console.log(xhr.response);
};

xhr.onerror = function() {
  console.log("Booo");
};

xhr.send();
```

---

```Javascript
$.get( "ajax/test.html", function( data ) {
  $( ".result" ).html( data );
  alert( "Load was performed." );
});
```

---

# Problems ...

- XHR not well equipped to handle low-level constructs of requests/responses.
- Callbacks
- No Streaming!

---

# Usage

```javascript
fetch(url, {  
    method: 'post',  
    headers: {  
      "Content-type": "application/json"  
    },  
    body: JSON.stringify(obj) 
  })
  .then(response => response.json())  
  .then(function (data) {  
    console.log(data);  
  })  
  .catch(function (error) {  
    console.log('Failed', error);  
 });
```



^ The first parameter of the fetch is the requested URL. 

^ We can optionally pass a second parameter which is a configuration object. 

^ In this configuration object, we can specify different options like HTTP Method Type, Headers of the Request, body of the request etc. Let’s look at how to make a post request with Fetch.

---

Fetch always returns a promise. 

Promise resolves to the response object. 

This **response object** has different helper methods like:

- response.json()
- response.text()
- response.blob() 
- etc.

----

# Function

```javascript
async function fetchAsync () {
  // await response of fetch call
  let response = await fetch('https://api.github.com');
  // only proceed once promise is resolved
  let data = await response.json();
  // only proceed once second promise is resolved
  return data;
}

fetchAsync()
    .then(data => console.log(data))
    .catch(reason => console.log(reason.message))
```

---

# More Consise Function

```javascript
async function fetchAsync () {
let data = await (await fetch('https://api.github.com')).json();
return data;
}
```

---

# Arrow Function

```javascript
const fetchAsyncA = async () => 
	await (await fetch('https://api.github.com')).json()
```

