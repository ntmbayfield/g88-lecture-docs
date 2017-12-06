# CORS

## Cross Origin Resource Sharing


---

## Objectives

- Define CORS
- Discuss how to get around CORS restrictions

----

## Some helpful links

- [CORS from MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [Using CORS in Express](https://medium.com/trisfera/using-cors-in-express-cac7e29b005b)

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

- Define CORS
- Discuss how to get around CORS restrictions
