# Arrays []

---

```
var objectives = [
  'Create Arrays to store lists of items',
  'Access values by index',
  'Loop over arrays and display values',
  'Store mixed data types in an Array',
  'Create and access nested Arrays',
  'Use common Array properties & methods: length, push, pop, indexOf, join',
  'Randomly access elements in an Array'];
```

---

## Pair Research use the MDN docs to... (3 minutes)

- find a technical definition of an array
- an example of an array

^^^ The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects.
^^^ var fruits = ['Apple', 'Banana'];

---

## Defining an Array (a list like object)

```
  let suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds']

  // side note: let is another (safer) way of declaring a variable
```

---

## One of the great features of an Array is that we can access the values of array elements by their index.

## Determine what the following console logs produce

```
  let suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds']

  console.log(suits[0])
  console.log(suits[-1])
  console.log(suits[2])
  console.log(suits[4])
```


---

# Review: For Loops

## With a partner:  write a for loop that loops from 1 to 13 and prints out the numbers

---

```
for (let count = 1; count <= 13; count++) {

  console.log(count);
}

```

---

# For Loops are the power tool of "iterating" over an array
### Important note, the first index of an array is zero!  That's weird, get used to it

```
let suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds']

for (let i = 0; i < suits.length; i++) {
  console.log("One suit in a deck of cards is " + suits[i]);
}
```

---

# Array methods:

## Pair Research: use the MDN docs to figure out what the following properties and methods do (10 minutes)

- push, pop, length, indexOf
- find one additional method that seems useful to share with the group

## Exercise:
Declare an Array, add 3 items to it, console.log the length, radomly pick one item from the array

---

## Arrays can be used to store different data types

```
  let randomJunk = ['apple', 3.14, true, null, undefined]
```

^^^ Side note: these are the primitive data types except Symbol

---

## You can even create Arrays with arrays in them!

```
let desserts = [['chocolate chip', 'fig newton'], ['apple pie', 'pecan pie', 'chocolate cream pie']]


```

### Talk and Turn: How would you access the value that corresponds to 'pecan pie'

---

```
let desserts = [['chocolate chip', 'fig newton'], ['apple pie', 'pecan pie', 'chocolate cream pie']]

desserts[1][1]
```

---

## The index of an array can be a key that you choose.  We sometimes call them key/value pairs.  Back to the desserts.

```
let desserts = []
desserts["cookies"] = ['chocolate chip', 'fig newton']
dessert["pie"] = ['apple pie', 'pecan pie', 'chocolate cream pie']
```

---

## I Do

Create an Array of Arrays that represents a deck of cards

---

## We do

Print out all the items in the deck.  e.g. "Ace of Spades, Two of Spades, etc."

---

## You Do

Randomly pick a card from the "deck"

