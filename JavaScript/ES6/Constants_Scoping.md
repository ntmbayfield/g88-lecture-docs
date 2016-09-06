![left](img/es6-logo.png)

#[fit]Constants 
#and
#[fit]Scoping

---

#Constants

^Constants (also known as "immutable variables") are variables that cannot be assigned new content.

^Notice: this only makes the variable itself immutable, not its assigned content (for instance, in case the content is an object, this means the object itself can still be altered).

---

```javascript

'use strict';


const PI = 3.141593;

```

---

#[fit]Blocked Scope Variables

^Block-scoped variables (and constants) without hoisting.

---

```javascript

'use strict';

function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}

```

---

```var``` will get scoped to the current function.

```let``` will get scoped to the current block.

---

#[fit]Block-Scoped Functions

---

```javascript

'use strict';

function foo () { return 1; }
console.log(foo());
{
  console.log(foo());
  function foo () { return 2; }
}
console.log(foo());

```

---

#Style Guides

---

#Airbnb JavaScript Style Guide

Use const for all of your references; avoid using var.  

> Why? This ensures that you can't reassign your references, which can lead to bugs and difficult to comprehend code.

---

#Airbnb JavaScript Style Guide


If you must reassign references, use let instead of var.

> Why? let is block-scoped rather than function-scoped like var.

---

#Google JavaScript Style Guide

Declarations with var: Always

Use NAMES_LIKE_THIS for constant values.

Never use the const keyword as it's not supported in Internet Explorer.


---

#Questions?
