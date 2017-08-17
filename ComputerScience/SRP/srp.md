# Single Responsibility Principle

---

The single responsibility principle states that every module or class should have responsibility over a single part of the functionality provided by the software, and that responsibility should be entirely encapsulated by the class. All its services should be narrowly aligned with that responsibility. Robert C. Martin expresses the principle as follows: “A class should have only one reason to change.

[.footer: https://en.wikipedia.org/wiki/Single_responsibility_principle]

---

Very similar to Unix’s “Do one thing and do it well”. This one is easy to comprehend but harder to implement.

---

Every function you write should do exactly one thing. It should have one clearly defined goal.

^ This description can be a little misleading as it would seem to suggest that an object should only do one thing. What is meant by this assertion, however, is that an object should have a cohesive set of behaviors, together comprising a single responsibility that, if changed, would require the modification of the object’s definition.  More simply, an object’s definition should only have to be modified due to changes to a single responsibility within the system.

---

As an example, consider a module that compiles and prints a report. Imagine such a module can be changed for two reasons. First, the content of the report could change. Second, the format of the report could change. 

---

The reason it is important to keep a class focused on a single concern is that it makes the class more robust. Continuing with the foregoing example, if there is a change to the report compilation process, there is greater danger that the printing code will break if it is part of the same class.

