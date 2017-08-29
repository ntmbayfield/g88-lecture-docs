# jQuery Events
![inline](https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/JQuery_logo.svg/1280px-JQuery_logo.svg.png)

---

# Objectives:

* Explain what jQuery events are.
* Name the steps to implement jQuery events.
* Use jQuery events to respond to user interaction.

---

  jQuery events are implementations for the following vanilla javascript events and function much the same way, however, they can be added to the entire collection of elements from the selector

  ```
  document.addEventListener  -> "on" events
  document.removeEventListener -> "off"

  ```

---

  There are 4 key steps to using jQuery for event listening.

  __Talk & Turn__: what do you think they are based on what you know about wiring up jQuery, DOM loading and how vanilla js event listeners work.

---

The steps to create an event are:

1. include jQuery via a script tag

---

The steps to create an event are:

1. include jQuery via a script tag
1. add code to wait for DOMContentLoaded

---

The steps to create an event are:

1. include jQuery via a script tag
1. add code to wait for DOMContentLoaded
1. add the event listener

---

The steps to create an event are:

1. include jQuery via a script tag
1. add code to wait for DOMContentLoaded
1. add the event listener
1. add the event handler callback function being mindful of dynamically generated elements

---

## Example in Vanilla JS

```
var paragraphs = document.querySelectorAll('p');

for (var i = 0; i < paragraphs.length; i++) {
  paragraphs[i].addEventListener('click', function() {
    console.log('<p> clicked!');
  });
}
```

---

## Example in jQuery

```
$('p').on('click', function() {
  console.log('<p> clicked and jQuery literally just saved my life!');
});
```

---

## Waiting for your DOM to load.

### jQuery provides two ways....


```
// First Way:  $(document).ready()

$(document).ready(function() { $('p').text('Hello world'); });
```

---

```
// Second Way:  anonymous function passed into the jQuery $ constructor

$(function() {
  $('p').text('Hello world');
});
```

---

## Common event listeners are built for handling clicks and form submits

###  on click

```
$('p').on('click', function() {
  $(this).toggleClass('active');
});
```
---

###  on submit

```

$('form').on('submit' ,function() {
  console.log('Searching...');
});

```

---

## There are even shortcuts for the shortcuts...

```
$('p').click(function() {
  $(this).toggleClass('active');
});
```

```
$('form').submit(function() {
  console.log('Searching...');
});
```

---

# Event delegation

__Super important__  Elements that are dynamically added to the DOM need to have a listener on the parent element OR you can add a listener while adding the element (usually less efficient)


---

Exercise: Create an html file and follow the 4 steps to make the Pokemon example under Event Delegation in the article function correctly. Follow the suggestions on changing the event delegation.

---

## Other common events:

```
on()
off()
hover()

keypress()
keydown()
keyup()

mousedown()
mouseenter()
mouseleave()
```

---

# Let's talk about **this**.  Yes, let's talk about that.  By **that** I mean **this**.

---

# this

Refers to the context of the outer selection...usually the element that was clicked.

```
$(‘.thing’).click(function(){
  $(this).hide();
});
```

---

## One more thing.  Sometimes the default behavior needs to be stopped (such as when submitting a form) This can be done by grabbing the event and using...

```
event.stopPropagation()

event.preventDefault()
```

---

# CFUs

---

Name the 4 steps to set up jQuery Events

---

Name as many reasons as you can for why the the following code will not work as expected.
What will it actually do?

```
<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript">
      $('paragraph').click(console.log('My Click is not working'))
    </script>
  </head>
  <body>
    <p class="paragraph">Click Me</p>
  </body>
</html>
```

^ no jquery script tag
^ DOM is not loaded where the script tags are
^ the click there is no callback function...you can't call console.log directly like that
^ query selector should be .pargraph not paragraph

---

## Final Exercise make the events work in exercises 00 and 01

```
https://github.com/gSchool/jquery-exercises
```
