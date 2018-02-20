# The Javascript Event Loop

---

# Objectives
- Describe how the Call Stack, Event Queue and Event Loop work together to execute code or delay code
- Describe the difference betweent "Synchronous" & "Asynchronous" code
- Use setTimeout to delay the excution of code

---

In what order will this code run?

```
setTimeout(() => console.log('first'), 1000)
console.log('second')
```

---

![fit](img/js_runtime.png)

---

# Terms
- Heap
- Stack
- Queue
- Event Loop

---

# Definition
- Heap - memory where function are stored

---

# Definition
- Stack - First in, last out list of functions to perform.

AKA: Call Stack

---

# Definition
- Queue - First in, first out list of functions to add to the Call Stack once the Call Stack is empty.

AKA: Event Queue, Callback Queue, Message Queue

---

# Definition
- Event Loop - a loop that processes messages in the Queue and moves them from the Queue to the Stack

---

### Synchronous code
In synchronous programs, if you have two lines of code (L1 followed by L2), then L2 cannot begin running until L1 has finished executing.


---

## Diagram Stack/Queue for Synchronous code

```
function multiply(a, b) { return a * b }

function square(n) { return multiply(n, n) }

function printSquare(n) {
  var squared = square(n)
  console.log(squared)
}

printSquare(4)
```

---

### Asynchronous code

In asynchronous programs, you can have two lines of code (L1 followed by L2), where L1 schedules some task to be run in the future, but L2 runs before that task completes.

---

## Diagram Stack/Queue for Ansynchronous code

```

console.log("1: Beginning")

setTimeout(() => { console.log("2: First timeout") }, 1000)

console.log("3: Middle")

setTimeout(() => { console.log("4: Second timeout") }, 1000)

console.log("5: End")

```

---

An aside ... what is a Stack Overflow?

```
function oopsIDidItAgain() {
  return oopsIDidItAgain()
}

oopsIDidItAgain()
```

---

In what order will this code run? Note the timeout is zero

```
setTimeout(() => console.log('cat'), 0)
console.log('dog')
```

---

If getData is asynchronous, why won't this code work?

```
function getData() {
  var data;
  $.get("example.php", function(response) {
    data = response; }); return data;
}

var data = getData();
console.log("The data is: " + data);
```

---

# Resources
* https://www.youtube.com/watch?v=8aGhZQkoFbQ
* http://latentflip.com/loupe/
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
* https://hackernoon.com/understanding-js-the-event-loop-959beae3ac40
* https://blog.carbonfive.com/2013/10/27/the-javascript-event-loop-explained/