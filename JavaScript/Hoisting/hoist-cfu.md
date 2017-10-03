
# A hoist there matey!

## What do the following console statements produced

---

```
function hoist() {
  a = 20;
  var b = 100;
}

hoist();

console.log(a);

console.log(b);

```

---

```
var hoist;

console.log(hoist);
hoist = 'The variable has been hoisted.';
```


---

## What about ```let```?

```
let hoist;

console.log(hoist);
hoist = 'The variable has been hoisted.';
```


---

## What about ```const```?

```
const hoist;

console.log(hoist);
hoist = 'The variable has been hoisted.';
```
---

# function scoping...

```
function hoist() {
  console.log(message);
  var message='Hoisting is all the rage!'
}

hoist();
```

---

## Take Aways...

- Using es5 var or es6 let, trying to use undeclared variables will lead to the variable being assigned a value of __undefined__ upon hoisting.
- Using es6 const, using undeclared variables will lead to a Reference Error because the variable remains uninitialised at execution.
