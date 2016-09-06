![left](img/es6-logo.png)

#Map
#WeakMap
#Set
#WeakSet
 
---

#These are 4 data structures added to ES6

---

#Map

---

#The Map object is a simple key/value map.

---

##Objects are similar to Maps in that both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. 

---

#Advantages

- An Object has a prototype, so there are default keys in the map.
- The keys of an Object are Strings and Symbols, where they can be any value for a Map.
- You can get the size of a Map easily while you have to manually keep track of size for an Object.

---

```javascript

let m = new Map();
m.set('hello',42);
m.set(s, 34);

m.get(s) === 34; //true
m.size === 2; //true

for (let key of m.keys()) {
    console.log(key);
}

for (let value of m.values()) {
    console.log(value);
}

for (let [key, value] of m) {
    console.log(key, value);
}

```

---

```javascript

let map = new Map([
        [ 1, 'one' ],
        [ 2, 'two' ],
        [ 3, 'three' ], // trailing comma is ignored
    ]);
    
let map = new Map()
.set(1, 'one')
.set(2, 'two')
.set(3, 'three');

```
---

```javascript

let map = new Map();
    
const KEY1 = {};
map.set(KEY1, 'hello');
console.log(map.get(KEY1)); // hello
    
const KEY2 = {};
map.set(KEY2, 'world');
console.log(map.get(KEY2)); // world
   
```
 
---

##Map instances are only useful for collections, and you should consider adapting your code where you have previously used objects for such.

---

##Objects shall be used as records, with fields and methods.

---

##A WeakMap is a map that doesn’t prevent its keys from being garbage-collected. 

---

##That means that you can associate data with objects without having to worry about memory leaks.

---

# Differences from Map

- The KEYS must be objects.
- You cannot iterate over the contents.
- You cannot clear a weak map.

---

#Set

---

##The Set object lets you store unique values of any type, whether primitive values or object references.

---

##Set objects are collections of values, you can iterate its elements in insertion order. 

---

```javascript

let set = new Set();

set.add('Teddi');

set.has('Teddi'); // true

set.size; // 1

set.delete('Teddi');

set.has('Teddi'); // False

set.size; // 0

```

---

```javascript

let set = new Set(['red', 'green', 'blue']);

let set = new Set().add('red').add('green').add('blue');

for (let x of set) {
    console.log(x);
}

```

---

##ECMAScript 6 sets do not coerce values in determining whether or not to values are the same. 

---

##So, a set can contain both the number 5 and the string "5" (internally, the comparison is done using ===).

---

##Converting Array to Set

```javascript

let arr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr)]; // [3, 5, 2]

```

---

#WeakSet

---

#Differences

- A WeakSet is a set that doesn’t prevent its elements from being garbage-collected. 
- WeakSets don't allow iteration, looping or clearing.

---

#Summary

---

##ES6 maps provide abilities regular objects can't when storing key/value pairs.  Maps give easy ways to iterate over keys and values as well as removing concern over prototypes

---

##ES6 sets allow you to easily create a collection of unique values without worrying about type coercion.

---

#Questions?