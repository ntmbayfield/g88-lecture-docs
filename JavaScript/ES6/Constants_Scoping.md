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

#Questions?
