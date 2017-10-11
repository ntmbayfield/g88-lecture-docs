# DOM Demo Creation, Deletion, Manipulation
[Demo Video](https://www.youtube.com/watch?v=a2AU1mIzRkc&feature=youtu.be)

## Create & Attach Elements

1. view the document

2. get the body

   1. `var body = document.getElementsByTagName("body")`
   2. look at what you got `body`. What do you see?

3. create a header

   1. `var title = document.createElement("h2")`
   2. look at what you got `title`
   3. add text to the h2 tag `title.innerText="Learn the DOM"`

4. create a p element

   1. `var paragraph1 = document.createElement("p")`
   2. look at what you got `paragraph1`
   3. add text to the p tag `paragraph1.innerText`

5. create another p element

   1. `var paragraph2 = document.createElement("p")`
   2. look at what you got `paragraph2`
   3. add text to the p tag `paragraph2.innerText`
   4. change the color of the p tag `paragraph2.style.color = "blue"`

6. Attach elements to the body

   1. `body` what do you see?
   2. `body.appendChild(title)`
   3. `body.appendChild(paragraph1)`
   4. `body.appendChild(paragraph2)`
   5. `body` what do you see?

   ## Delete an Element

   1. Delete one of the paragraphs in the body `body.removeChild(paragraph1);`
   2. Delete everything in the body `body.innerHTML = "";`

   ## Manipulate an Element

   1. change the text color of paragraph2 `paragraph2. style.color = "red"`

   ## Create Nested Elements

   1. create a ul element `var ul = document.createElement("ul");`
   2. create an li element `var li = document.createElement("li");`
   3. append the li element to the ul element `ul.appendChild(li)`
   4. append the ul element to the body so it is now attached to the DOM `body.appendChild(ul);`

   ## Getting started from nothing

   1. Make html and js files
   2. link the js file to the html file

   ## Looping Over Elements

   1. get the elements
   2. iterate over the array you get back

   ​

   ​
