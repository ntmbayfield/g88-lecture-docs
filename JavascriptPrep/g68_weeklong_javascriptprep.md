
# Week long javascript prep

The goal of this week long prep is to help students who are in the application process for the g68 cohort level up their javascript skills so they are better prepared to complete the take home and the technical interview. This is the first time we are running this program. Some of the students who attended this program also attended the weekend intensive that Teddi did prior to the start of this week long prep course.

JT/PT Course Game Plan
Mon - Pete - Review  Data Types, Expressions, if/else, String manipulation
Tues - Craig - Arrays, Loops, Thinking like a developer ... Polya's comments, debugging, working incrementally
Wed - Sean - Functions, putting pieces together Fizzbuzz
Thurs - Teddi - Objects Word Problems, Whiteboarding
Fri - Teddi - Accumulator pattern

# Prerequisites
In Javascript for Kids:
Read chapters 1 and 2(What is Javascript, Data Types and Variables)
Read chapter 3 (Arrays)
Read Chapter 4 (Objects)
Read chapter(s) on Loops and Conditionals


## Monday (Pete)
7 people showed up, all said they plan to attend Thurs. I covered good ground: vars, expressions, if/else, strings (which seemed like review to them) and a little into function examples and a for-loop accumulator pattern. Didn’t expect the last stuff to stick but, call it a first pass.

I polled the room for any particulars people were struggling with:
- Nested loops & where to define vars for such a thing
- Defining vars and params in functions
- Bird’s eye view problem solving, knowing the pieces but how to glue them together

Resources - http://codingbat.com/java

## Tuesday - (Craig)

Nine People in the PT class tonight.  Pretty sharp group.  We stuck to Arrays...didn't get into Polya's Technique.   We did get to 3 level nested arrays though which was starting to hurt the brains.

```javascript
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

Resources - https://repl.it/teacher/assignments/277573/edit
The "you do" was home work and it was to randomly pick 7 cards from the deck.

## Wednesday (Sean)
Fizzbuzz, Functions, putting pieces together

## Thursday (Teddi)
Students tonight: 8
Whiteboarding (word problems/problem solving) and Objects

We worked through the following questions on the whiteboard(from our problem solving curriculum). This took about 70-80 minutes:
- Write a function that takes three arguments, sums all three and returns the result
- Write a function that takes a string and returns the uppercase version of that string with an “!”
- Write a function that prints the numbers 1 to 10 using a `while` loop

I had them follow Polya’s method (understand the problem/inputs and outputs, come up with a few possible solution, choose one and execute it, step through your code to make sure it works with your sample inputs). I spent quite a bit of time covering step 1 and showed them how important it is to break down the problem into manageable chunks and how to test javascript methods to make sure we know what we are getting.

They were very curious about the while loop since it was part of the homework Craig gave them. We explored the syntax, talked about use-cases for a while loop and explored the while loops for a bit.

I also covered objects for about 30-40 minutes. We covered the stuff in the repl.it - https://repl.it/KbYq/8  (the answers are there now, but we did those together in class and these came from a few warmup repos). I introduced them to the crazy people object at the bottom and backed way off when I saw lots of deer in headlights looks, lol. So we spent a ton of time exploring the for…in loop and explored how it’s different from the for loop they are used to.


Resources:
[Objects and Arrays warmup #1](https://github.com/gSchool/js-objects-arrays-warmup/blob/master/solutions.js)
[Objects and Arrays Warmup #2](https://github.com/gSchool/warmups/blob/master/w01/w-objects-and-arrays-warmups/w-objects-and-arrays-warmup.js)
[Problem Solving Questions](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/197/WB-01-Dayonequestions.pdf)
[Repl that I used for the class](https://repl.it/KbYq/2)

## Friday(Teddi)
Accumulator Pattern
Resources -
[Accumulator Problems](https://github.com/gSchool/accumulator-problems/blob/master/main.js)
[Repl used in the class](repl- https://repl.it/KbmE)

Students tonight: 7
We worked through the accumulator problems together. I emphasized inputs and outputs. With each question I asked what the data type of the inputs and outputs were and we came up with examples of what some in and outs could be which I wrote on the whiteboard. We thought up some corner and edge cases (but didn’t always write the code for those even though we talked through the logic of them). I asked them to think about why a problem would be solved using an accumulator pattern. I also demonstrated sandwich code and checking your work each step of the way (first create the accumulator and return it, check your work… then write the for loop and think through the start/stop and test condition…then write the body of the loop). I used this - https://repl.it/KbmE/, you can see how far we got here - https://repl.it/KbmE/14. I crowd sourced answers and we tried different approaches for several of the questions.

In terms of prep work I didn’t have any slides for tonight. We really just jumped into solving the problems. My prep was sourcing the problems we were going to work on and I pulled those from this repo - https://github.com/gSchool/accumulator-problems/blob/master/main.js.
