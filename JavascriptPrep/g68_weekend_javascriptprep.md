

# Saturday Javascript Class (Teddi)

The slides I used for the javascript class this weekend -
I did a quick review with these slides - [Review Data Types, Variables, and Operators](http://slides.com/teddimaull/intro-to-javascript#/ )just to make sure everyone was on the same page regarding operators and data types.

Then I used these slides [Javascript Prep](http://slides.com/teddimaull/javascript-prep#/) for the remainder of the class (note that with slides it goes in two directions…forward and down). I gave them time to do the “You Try It” parts and walked around and gave individual help to students.


##Admissions Problem

This is the take home problem that students are responsible for being able to complete. I did *not* talk through this problem with them, but I wanted to know what beginner things they might be struggling with so I could give them guidance about how to study.

```
You will be using JavaScript to write a simple function that can accomplish a goal.

We want to find the credit card number whose digits sum to the largest number. If more than one has the same largest sum of digits, we want the last one in the list with that sum.

Write a single function that takes one argument. That argument will be an array of credit card numbers. Assume the array can have any number of credit card numbers and each one is a string of digits and dashes. Your function should return the credit card number that has the largest sum of digits.

Here is a sample array of credit card numbers:
[‘4916-2600-1804-0530’, ‘4779-252888-3972’, ‘4252-278893-7978’, ‘4556-4242-9283-2260’]

In the sample array above, the digits add up to 49, 81, 81, and 64 respectively. Since there are two which have the same sum, the function should return the last one with that sum, in this case ‘4252-278893-7978’

Start by thinking through your step-by-step process. Then, submit your best code. If your code isn’t complete, that’s OK; just let us know how far you were able to get.
What do you need to do to solve this problem? Explain your thought process and how you will work through each part.
```
Here is a possible solution using javascript that a beginner should know -
```
function find(arr){
  var largest = arr[0];
  var largestNum = 0 ;

  for(let i=0; i<arr.length;i++){
    var num = arr[i].split('-').join('');
    var sum = 0;
    for(let j = 0; j < num.length;j++){
      sum = sum + parseInt(num[j]);
    }
    if(sum >= largestNum){
      largest = arr[i];
      largestNum = sum;
    }
  }
  return largest;
}
```

# What students need to know prior to the event:

Phoebe (admissions advisor) or Tara (program director) sent this information out to the students so they could prepare.

## Prerequisite for the Saturday code event:
In _Javascript for Kids_:
Read chapters 1 and 2(What is Javascript, Data Types and Variables)
Read chapter 3 pages 40-44(Arrays)

##Topics for the Day
Working with Strings
If and If…Else Statements
For loops
Working with Arrays
Writing a function

Bring your computer, be prepared to have fun writing and sharing code!

- Strings
- If and If...Else
- For Loops
- Arrays
- Functions


# Problems:

These are additional problems that I was going to introduce if we had time, but the students weren't ready for this yet. They were pretty beginner level.

// Problem 1: Create a function called "addToArrayOne" that adds a single value to an array. The function takes two parameters: The first parameter is the array the value will be added to and the second parameter is the value.

// Problem 2: Create a function called "addWithoutPush" that adds a single value to the end of the array without using the Array.push method. The function takes two parameters: The first parameter is the array the value will be added to and the second parameter is the value.


// Problem 3: Create a function called "removeFirst" that removes the first index of an array.

// Write a function called 'whichIsHigher' that takes two numbers and returns the higher number

// Write a function called "fizzBuzz" which pushes the integers from 1 to 15 into an array that will be returned when it is done. For multiples of three push "Fizz" instead of the number and for the multiples of five push "Buzz". For numbers which are multiples of both three and five push "FizzBuzz".

// Write a for loop within this function that will create this array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function problem1() {
  var oneToTen = [];
  // start coding here

  // done coding here
  return oneToTen;
}

// Write a for loop within this function that will create this array: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
function problem2() {
  var tenToOne = [];
  // start coding here

  // done coding here
  return tenToOne;
}

// Write a for loop within this function that will create this array: [1, 3, 5, 7, 9]
function problem3() {
  var oddNumsArray = [];
  // start coding here

  // done coding here
  return oddNumsArray;
}
