# Intro to HTTP

---

# Objectives

- Explain what HTTP is.
- Explain why HTTP is useful?
- Explain what an HTTP request is.
- Explain what an HTTP response is.
- Diagram HTTP request-response cycle.
- Send HTTP requests and receive HTTP responses for HTML.
- Explain what JSON is.
- Explain why JSON is useful.
- Send HTTP requests and receive HTTP responses for JSON.

---

#H*yper*t*ext* T*ransfer* P*rotocol*

---

#What is Hypertext?

---

#What is a protocol?

---

#HTTP is a request-response protocol.

---

#Client and Server.

---

#Client

---

#Server

---

#Requests

---

An HTTP request is composed of the following parts.

1. A method (or verb)
1. A path
1. An HTTP version
1. Key-value pairs called **headers**
1. And an optional body

---

#Responses

---

An HTTP response is composed of the following parts.

1. An HTTP version
1. A status code
1. Key-value headers
1. And an optional body

---

#Act out the HTTP request-response cycle.

---

# Data Exchange Formats

---

# JSON

---

```json
{
  "avatar": "https://i.imgur.com/KlycRG5.jpg",
  "hobby": "Motherhood",
  "name": "Daenerys Targaryen"
}
```
Both JSON strings and JSON object keys **must** be wrapped in double quotes `"`.

---

```json
["Daenerys Targaryen", "Tyrion Lannister"]
```

^Describe this object.

---

```json
[
  {
    "avatar": "https://i.imgur.com/KlycRG5.jpg",
    "hobby": "Motherhood",
    "name": "Daenerys Targaryen"
  },
  {
    "avatar": "https://i.imgur.com/fFMusdC.png",
    "hobby": "Traveling",
    "name": "Tyrion Lannister"
  }
]
```

---

#Serialization

^ The process of translating a program's data to and from a string.

^ JSON is a serialization format. JavaScript objects, arrays, numbers, strings, booleans, and null are all translated into a JSON string. Here's an example of translating a JavaScript object into a JSON string.

```javascript
var queen = {
  avatar: 'https://i.imgur.com/KlycRG5.jpg',
  hobby: 'Motherhood',
  name: 'Daenerys Targaryen'
};

var queenJSON = JSON.stringify(queen);

// Store or transmit the JSON string
```

---

```javascript
var queenJSON = '{
  "avatar": "https://i.imgur.com/KlycRG5.jpg",
  "hobby": "Motherhood",
  "name": "Daenerys Targaryen"
}';

var queen = JSON.parse(queenJSON);

console.log(queen.name);  // Daenerys Targaryen
```

---

#Web APIs

^ An application programming interface, or **API**, is a broad term used to describe any set of protocols for interacting with a computer program. 

---


