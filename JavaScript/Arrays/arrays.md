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

```
  // the suits of a deck of cards
  let suit1 = 'Spades'
  let suit2 = 'Clubs'
  let suit3 =  'Hearts'
  let suit4 = 'Diamonds'
```

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


> Here's some to talk about...shift, unshift, concat, join, sort
> Probably skip HOF methods like map, forEach, every, etc. at this stage

---

## Exercise:
Declare an Array, add 3 items to it with push, console.log the length, radomly pick one item from the array


> let pies = []
> pies.push("Apple")
> pies.push("Pecan")
> pies.push("Banana Cream")
>
> for (let i = 0; i < pies.length; i++) {
>   console.log(pies[i] + " Pie!")
> }
>
> console.log("Length of pies is", pies.length, "and it's not long enough :-)")
>
> let randomPick = Math.floor(Math.random() * pies.length)
>
> console.log("Random picks is at index", randomPick, pies[randomPick])

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

## The index of an array can be a key that you choose.  We sometimes call them key/value pairs.  Back to the desserts...

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

```

let faceCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
let faceNames = [undefined, "Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"]


let cards = [
  ["Spades", faceCards],
  ["Clubs", faceCards],
  ["Hearts", faceCards],
  ["Diamonds", faceCards]
]


// go over each suit array
for (let suitIndex = 0; suitIndex < cards.length; suitIndex++) {
  // need javascript to help me
  let suit = cards[suitIndex][0]
  let faces = cards[suitIndex][1]

  // go over every face card in the other array
  for (let faceIndex = 0; faceIndex < faces.length; faceIndex++)
  {
    let cardFaceName = faceNames[faces[faceIndex]]
    let card = cardFaceName  + ' of ' + suit
    console.log(card)
  }
}
// console.log(cards)

// make an array to hold cards
// randomly pick a card

// while loop to fill up your array until you have seven cards
```

---

## You Do

Randomly pick a card from the "deck" and build a hand of 7 unique cards

