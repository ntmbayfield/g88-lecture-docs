theme: Next, 1
autoscale: true
slidenumbers: true
<!-- @author: Pete Silva -->

# DOM Traversal

---

# Objectives

- Query the the DOM for nodes using CSS selectors.
- Traverse the DOM using parent, sibling and children nodes.
- Access the values of HTML attributes and the innerText of a node.

---

You Do:

- Write down the CSS rule to style all elements with the class pink to have a pink background.
- Write down the CSS rule to style all elements with an ID of tk421 to have a white background.

---

- CSS uses selectors to select elements from the document and apply styles to them.

- Querying the document works the same way, we can use selectors to query for elements based on ID, class name, name and tag name.

---

### 2 ways to traverse or navigate around:

1. CSS Selectors
2. Nodes (navigate relationship between HTML elements)

---

### First let's try with CSS selectors

Go to [http://traverse-bears.surge.sh](http://traverse-bears.surge.sh) and let's practice selecting different nodes in the DOM and accessing their properties.

Use the MDN docs to understand these methods below:

```javascript
document.getElementByID('idName')
document.getElementsByClassName('className')
document.getElementsByTagName('elementType')
document.querySelector('anyCssSelector')
document.querySelectorAll('anyCssSelector')
```

---

### Now let's try traversing using DOM Nodes.

We leverage the relations between nodes.

```javascript
someNode.childNodes()
someNode.firstChild()
someNode.lastChild()
someNode.parentNode()
someNode.nextSibling()
someNode.previousSibling()
```

---

### It is very important to be conscious that the methods above all potentially return different object types.

The methods above returned:

- Elements
- HTMLCollections
  - Contains Elements
- NodeLists
  - Contains ChildNodes

Regardless you can almost always access using [n] bracket syntax.

---

### Access HTML element attributes, inner text contents

```javascript
someElement.attributes
someElement.getAttribute('attributeName')
formElement.value
someElement.innerText
```

[https://developer.mozilla.org/en-US/docs/Web/API/Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

---

### Don't worry about memorizing all DOM methods, it's about digging, inspecting, and not stopping till you have what you want.

![](http://dogsaholic.com/wp-content/uploads/2015/03/Big-dig.jpg)

---

# Objectives

- Query the the DOM for nodes using CSS selectors.
- Traverse the DOM using parent, sibling and children nodes.
- Access the values of HTML attributes and the innerText of a node.
