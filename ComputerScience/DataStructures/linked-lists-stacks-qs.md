theme: Titillium, 1
autoscale: true
slidenumbers: true
<!-- @author: Pete Silva -->

# Linked Lists, Stacks, Queueueues, and You:
![](http://marketingland.com/wp-content/ml-loads/2016/03/stacks_ss_1920.png)

What do they do? Do they do things?

Let's find out!

---

### Objectives
![](https://mir-s3-cdn-cf.behance.net/project_modules/disp/a520773389308.56014b51916d7.png)

- Explain what is a linked list and how it's stored in memory
- Implement a linked list/stack/queue using JavaScript
- Explain differences between arrays, linked lists, stacks, queues or how they are related

---

### What is a linked list?
![](http://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png)
![right](http://techonix.in/images/products/workshop/data-structure.jpg)

... one of the most general data storage structures

---

### How is a Linked List stored in memory?
![](http://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png)
![original left](http://www.publicdomainpictures.net/pictures/20000/velka/computer-memory-chips.jpg)

For arrays, each element exists sequentially in memory, so it's fast to access array members in order, and to access items at any part in the array with an index.

Linked Lists are different-- data nodes are not necessarily sequential in memory. Accessing members in a LL involves jumping around from node to node in memory, which is relatively slow. Accessing an arbitrary item in the list is impossible by index, because there is no possible way to calculate the location of a particular node in memory. Just have to follow the references.

---

### LL vs Arrays
![](http://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png)

- JS Arrays are not true "raw arrays"-- they are dynamic and fancy objects
- In traditional langs like C:
  + Easier to store different sized data pieces in a LL. Arrays need every item to be same data type and size.
  + Easier for a LL to grow dynamically. An array's size needs to be known ahead of time, or re-created when it needs to grow.
  + Shuffling a LL requires only changing references (pointers). Shuffling an array is more complicated and/or takes more memory.

---

![](http://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png)

- And more generally:
  + LL offers faster (bigO) insertion/deletion since it's just references
  + LL offers easier insertion in the middle of a collection
  + Arrays are better when you need known indexes
  + Arrays take up less space in memory, since it's just sequential mem cells, no refs

---

### Single Linked List
![](http://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png)
![right](http://images.naldzgraphics.net/2011/02/8-Paper_texture.jpg)
![right fit](https://chessprogramming.wikispaces.com/file/view/380px-CPT-LinkedLists-deletingnode.svg.png/406080434/380px-CPT-LinkedLists-deletingnode.svg.png)

- Each node has some data payload
- Each node has 1 reference to the next

[http://blog.benoitvallon.com/data-structures-in-javascript/the-singly-linked-list-data-structure/](http://blog.benoitvallon.com/data-structures-in-javascript/the-singly-linked-list-data-structure/)

---

### Doubly Linked Lists
![](http://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png)
![left](http://images.naldzgraphics.net/2011/02/8-Paper_texture.jpg)
![left fit](http://www.thecrazyprogrammer.com/wp-content/uploads/2015/09/Doubly-Linked-List-in-C-and-C-.gif)

- Each node has some data payload
- Each node references both next and previous
- Uses more memory than single-linked

[http://blog.benoitvallon.com/data-structures-in-javascript/the-doubly-linked-list-data-structure/](http://blog.benoitvallon.com/data-structures-in-javascript/the-doubly-linked-list-data-structure/)

---

### Stack
![](https://prodigalthought.files.wordpress.com/2015/12/stack-of-books.jpg?w=1024)

- LIFO (Last In, First Out)
- Think push/pop
- Can be implemented atop LinkedList
  + All insertion/removal happens @ tail (or head)

[http://blog.benoitvallon.com/data-structures-in-javascript/the-stack-data-structure/](http://blog.benoitvallon.com/data-structures-in-javascript/the-stack-data-structure/)

---

### Queue
![](https://i.kinja-img.com/gawker-media/image/upload/cmrn3wvjafy47lxyby30.png)

- FIFO (First In, First Out)
- Can be implemented atop LinkedList
  + Insert @ tail, remove from head

[http://blog.benoitvallon.com/data-structures-in-javascript/the-queue-data-structure/](http://blog.benoitvallon.com/data-structures-in-javascript/the-queue-data-structure/)

---

### Common Data Structures in JS
![](https://ak8.picdn.net/shutterstock/videos/4017067/thumb/1.jpg?i10c=img.resize(height:160)

[https://github.com/benoitvallon/computer-science-in-javascript/tree/master/data-structures-in-javascript](https://github.com/benoitvallon/computer-science-in-javascript/tree/master/data-structures-in-javascript)

---

![](http://www.texturex.com/albums/Stone-Textures/Stone%20Texture%20wall%20large%20rock%20grey%20image.jpg)

### Hard Thinking time...

What's a good use case for...

- A Linked List?

- Stack?

- Queue?

...srsly though, google it

---

![](http://www.texturex.com/albums/Stone-Textures/Stone%20Texture%20wall%20large%20rock%20grey%20image.jpg)

- A Linked List?
  + Maybe a grocery/task list, gotta add things in the middle quickly?
  + Low level data structures, other more intelligent structures are built on

- Stack?
  + Undo/Redo in an program
  + Call stack in program execution

- Queue?
  + Batch or stream processing
  + Print job "spooling"
  + Anything you can visualize as a line of ants

---

### Objectives
![](https://mir-s3-cdn-cf.behance.net/project_modules/disp/a520773389308.56014b51916d7.png)

- Explain what is a linked list and how it's stored in memory
- Implement a linked list/stack/queue using JavaScript
- Explain differences between arrays, linked lists, stacks, queues or how they are related
