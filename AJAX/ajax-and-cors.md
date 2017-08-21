<img style="height:300px;width:auto;background:none;border:none;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/AJAX_logo_by_gengns.svg/2000px-AJAX_logo_by_gengns.svg.png" />

## AJAX and CORS 

---

## Standards

- Fetch and send JSON with AJAX
- Deploy separate client-server applications with CORS

---

## Objectives

- Define AJAX 
- Use jQuery to create an HTTP/AJAX request
- Define and interact with an API
- Use a callback to handle an HTTP/AJAX response
- Define CORS
- Discuss how to get around CORS restrictions

---

## AJAX

A set of web development techniques using many web technologies on the client-side to create asynchronous Web applications. With Ajax, web applications can send data to and retrieve from a server asynchronously (in the background) without interfering with the display and behavior of the existing page --Wikipedia

----

## In other words...

A set of techniques used to send data to and retrieve data from a server asynchronously

----

## Why do we use AJAX?

----

To exchange data with a server without blocking the other functionality of our app

---

## Where are we sending these requests?

----

## Web APIs

Application Programming Interface

---

## XHR

```js
httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = function(){
    if (httpRequest.readyState === 4) {
       if(httpRequest.status < 400) {
         alert(httpRequest.responseText);
       }
    }
};
httpRequest.open('GET', 'http://www.omdbapi.com/?t=Frozen&y=&plot=short&r=json');
httpRequest.send();
```

----

### With jQuery 

```js
$.get("http://www.reddit.com/r/aww.json", function(data) {
  // Do something with the data
});
```

---

## $.ajax()

```js
$.ajax({
  url: “data.json”,
  success: function(data){
    $(".result").append(‘<h1>’ + title + </h1>);
  }
});
```

----

## $.get() 

```js
$.get("data.json", function(data) {
  $(".result").append(‘<h1>’ + title + </h1>);
});
```

----

## $.post() 

```js
$.post("http://www.reddit.com/r/aww.json", formData, function(data) {
	console.log(data)
});
```

---

## Request DEMO

---

## CORS

Cross Origin Resource Sharing

----

## Same Origin Policy (SOP)

Same Origin Policy permits scripts contained in a first web page to access data in a second web page, but only if both web pages have the same origin. An origin is defined as a combination of URI scheme, hostname, and port number. This policy prevents a malicious script on one page from obtaining access to sensitive data on another web page through that page's DOM.

----

## ERROR!!

```
XMLHttpRequest cannot load http://example.com/. 
No 'Access-Control-Allow-Origin' header is present on the requested resource.
Origin 'http://example.net/' is therefore not allowed access.
```

----

## How to get around it 

- Run server instead of opening files. i.e. `http-server`
- Use a proxy server that grabs and relays a request along
- Add CORS Headers e.g. Access-Control-Allow-Origin in the response header

---

### Review

- Define AJAX 
- Use jQuery to create an HTTP/AJAX request
- Define and interact with an API
- Use a callback to handle an HTTP/AJAX response
- Define CORS
- Discuss how to get around CORS restrictions

