theme: Fira, 1
autoscale: true
slidenumbers: true
<!-- @author: Pete Silva -->

# DEBUGGING: WHY HOW DO?

---

## Objective

- Be able to use console.log consistently to inspect problems
- Be able to code in a clean/beautified/sane manner


---
## Making BROKEN -> FIXED

- Debugging (read: problem-solving) is the essence of programming
- Making a program is not like a marathon race with a finish line
- More like building a car piece by piece, and when you fix one piece another breaks

---

- Programming requires patience and curiosity --"The drive to know"
- Only by taking things apart, can we learn to put them back together again

---
## Work Clean

- Making code tidy as you go pays off hugely towards comprehension
- You may think the mess doesn't confuse you, but it's more overhead for your eyes and your brain that doesn't need to be in the way
- Things that become easier with tody code: scope!!, {}, (), order-of-operations
- Beautify is a gift from the coding heavens: use it

---
## Linting

- Troubleshoots style and best practices for you
- If you really want to shoot yourself in the foot, it won't stop you

---
## Comments

- No one wants to hire a programmer who doesn't know how to use comments effectively
- Good programmers first think about the 10,000ft view. Then they capture these steps in comments (pseudocode)

---
- Only once you have this skeleton, then worry about fleshing out the details
- Problem solving approach is more important than syntax, which hammer you choose

---
## When debugging your code, instructors look for:

- What or did you __console.log()__ anything?
- Are Chrome Dev Tools or a Terminal window open so we can see the console.logs?
- If no to both those things: __come back once you've done these__

---
# Console.log EVERYTHING

- This is not an exaggeration. This is about testing your assumptions.
- Favorite line: "This should work"
- Why should it? __Prove it__
- If you want to be a Computer Scientist, then science requires __repeatable evidence__

---
# Remember Polya's Technique

- What are my __inputs__? __Outputs__?
- Do I understand what is being asked of me to turn inputs->outputs?
- Edge cases: What assumptions am I making, that if false, would break my code?

---
## Getting stuck, rule of thumb

- Allow yourself to be "stuck" for at least 20 minutes before asking for help.
- It's important that you earnestly try several approaches before just getting an easy answer, it will upgrade the wetware between your ears.
- After 20min, ask a fellow student or instructor.

---
# NO REPL.IT

- Use node on the CLI or Chrome Dev Tools

---
# Variable/Function names

- Specific, meaningful names will serve you much better than goofy, vague names.
- Can infer meaning even if you were lame about commenting

```javascript
function convertDecimalToString()
```
vs

```javascript
function woohooPartyTime()
```

---
# How to read MDN docs

---
# Debugger (Alicia)
