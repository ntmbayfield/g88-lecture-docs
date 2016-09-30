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

##ES6 maps provide abilities regular objects can't when storing key/value pairs.
- Ability to use any value as a key.
- Can iterate in insertion order.
- .has() method and size property.


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

##ES6 sets allow you to easily create a collection of unique values without worrying about type coercion.
- Enumerable in insertion order.
- Includes the same .has() method and size property that map has.

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

#Questions?