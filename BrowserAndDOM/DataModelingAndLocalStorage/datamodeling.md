# [fit] Data Modeling Activity

---

# Objectives

- Explain what data modeling is.
- Practice defining complex data.

---

# [fit] What is Data Modeling?

^ Data modeling is a process to define and analyze data based on the requirements needed for your software. When modeling data, we look at two "customers" that we model data for: the stakeholders (the people who own the software) and developers (the people who read and use your code).

^ Each of your projects is working with data in some way whether your program is managing data from an API, changing a game state, or creating data on its own. As software engineers, we spend a lot of time thinking about the structure of our data before we implement our project. Defining the structure of our data allows us to set expectations on what is the input of our programs and what our programs are supposed to produce as output.

---

## You want to store the price of an apple for a sign. How would you model this data?

^ Whiteboard, then share with a neighbor. I'll ask for volunteers to share theirs in a few minutes.
var apple = 5

---

## Your apple business is expanding internationally to other countries. How might you want to represent the price of your apples?

^Should the price of an apple be a number or a string? Why?
Example: var apple = {price: 5, currency: "US_DOL"}

---

## You want to store the state of whether a light switch is turned on or off. How would you model this light?

^Examples: lightIsOn = true;  light = {on: true};

---

## Your light switch is fancy and it dims. How might you model this data?

^Example:  light = {on: true, dimLevel: 5};

---

## Your dimmable light switch can change colors! How might you want to represent the dimmable state and the color?

^Example:  light = {on: true, dimLevel: 5, color: "red"};

---

## You want to represent a set of twinkling lights where a light can be on or off. How might you represent that?

^ Now we are looking at more complex data. How could you represent a set? What questions might you ask to figure out how to represent the data? Do the lights turn on and off at the same time? At what rate do that twinkle? Are the twinkling lights colored?

^ Example: setOfLights = [{on: true}, {on: false}]

---

##Questions?
