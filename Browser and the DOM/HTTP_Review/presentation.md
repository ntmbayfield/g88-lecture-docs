![](img/http.jpg)

---

![original](img/pier.jpg)

#[fit]Separation of Concerns

---

![](img/request.png)

#[fit]HTTP Request

---

![](img/texture.jpg)

1. A Method (or Verb)
2. A Path
3. An HTTP Version
4. Headers (Key-value pairs)
5. Body (Optional)

---

![](img/texture2.jpg)

#[fit]Methods

^ Instruct a server how to proces the request.

---

![](img/texture3.jpg)

- GET - Read
- POST - Creaete 
- PUT - Update/Replace
- PATCH - Update/Modify
- DELETE - Delete

---

![](img/texture4.jpg)

#[fit]HTTP Response.

---

![](img/sky.jpg)

1. HTTP Version
2. Status Code
3. Headers (Key-value pairs)
4. Body (Optional)

---

![](img/texture5.jpg)

#Status Code Groups

- 1XX - Request accepted, ready for the next one.
- 2XX - Request accepted, the server's work is complete.
- 3XX - Request accepted, but additional client work is needed.
- 4XX - Request accepted, but there was an error on the client.
- 5XX - Request accepted, but there was an error on the server.

---

![](img/texture6.jpg)

#Most Common Status Codes

- 200 - OK
- 302 - Found
- 304 - See Other
- 404 - Not Found
- 500 - Internal Server Error

^ 200 Standard response for successful HTTP requests. The actual response will depend on the request method used. In a GET request, the response will contain an entity corresponding to the requested resource. In a POST request, the response will contain an entity describing or containing the result of the action

^ 302 The original describing phrase was "Moved Temporarily" - Redirection

^ 303 Redirect for Post/Put/Delete

---

![](img/cycle.png)

#HTTP Request/Response Cycle

---

![](img/questions.gif)
