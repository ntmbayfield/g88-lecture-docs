

# Client-side routing

---

# Objectives

- Describe the core concepts of the __browser history API__...
- Diagram what happens when a user loads a bookmarked URL...


---

# What's the point?

- users can use the back button
- users can bookmark


^A big part of building a single-page application is having client-side routing.
This allows users to use the back button in their browser to return to where they were, and also allows them to bookmark pages within the app.
And when a user bookmarks a url and then loads that page up, both the server and the client are involved in making the page display correctly.
So in this lesson you'll learn about some of the core concepts of client-side routing that can apply to any client-side framework.


---

# the Server

### When you make an HTTP request to a server, the server __parses__ the request, __reads__ the path, and __creates__ a response to send back to the client

^Sometimes the path relates to a file on disk, such as rendering the contents of index.html
And sometimes it uses a framework like Spring or Rails or Express to dynamically generate a response.

---

# Server Routing: What happens?

- full __reload__ of the page
- all objects __cleared out__
- the DOM is completely __recreated__
- URL __updated__

^In either case, every HTTP request has a response, and that response causes the browser to completely reload the HTML.
This clears out all of the objects in memory in JavaScript, and completely recreates the DOM.
Users normally see a loading icon and the page goes blank for a moment while this happens.
In this flow, the URL bar in the browser always shows the address of the most recent HTTP call.

---

# SPA: What happens?

- URL starts as the address of the last http call
- Javascript manipulates the address, no http requests

^In single-page applications however, the URL bar _starts out_ as the URL of the last HTTP call, but then JavaScript can manipulate what's in the URL bar without making subsequent HTTP requests.

---

# How do SPAs do it?

### the history API

^This happens via the history API.
Once the browser has loaded your page, you can call pushState to change what's in the URL bar...
And if you inspect the network tab, you can see that even though the URL has changed, it didn't make any HTTP requests to the server.

---

# Enhanced User Experience

### faster, no flicker

^So what client-side frameworks like React, Angular, Ember, Vue etc...  do is combine changes to the URL with changes to the dom.
This user experience emulates HTTP requests, but it's much faster, and since it doesn't have to reload the entire page, there's no flicker.
And this is all easy when you start on the homepage and then start clicking around, but when a user goes directly to a path that's supposed to be handled by the client-side router, then the server needs to get involved.

---

# What kind of paths?

### hash paths
### path in the url

^When you are working with client-side routing there are two ways you can represent the paths in the URL.
One way is to put the client-side path after the hash.
And another way is to use the actual path in the URL.
JavaScript can write to either of them equally well but servers interpret these differently.

---

# hash paths

^When you load a URL that contains a hash, the server always gets the same path, in this case, just slash.
So these three routes all send an HTTP request to the root path

---

# Full path

^When you load a URL in your browser that contains a full path, the server actually gets an HTTP request to that full path.
Now typically your single-page application is comprised of a single html page named index.html.
So when you load the page
the server gets an http request to the path
but it has to render index.html
and then after the JavaScript loads _it_ reads the path of the URL and updates the DOM accordingly.
So if you are using normal paths in your URLs, your servers have to somehow know how to serve the index.html file for all of those routes.

---

# Review...

---

## when client-side apps manipulate the hash, the server __doesn't__ need to change

---

## when client-side apps manipulate the path, the server has to understand how to __always serve index.html__

---

## client-side apps update the URL and the DOM at the same time to give the __appearance__ of moving between different pages

^And that's a basic overview of how client-side routing works.

---

# React Router
### [Where to begin...](https://reacttraining.com/react-router/web/guides/quick-start)

^ QuickStart, Examples, BrowserRouter, NavLink, exact, render
Lots of old code examples out there, we are going to use react-router-dom which is react router v4 for the browser.
