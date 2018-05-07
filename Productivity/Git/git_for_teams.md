# Git for Teams

---

# Objectives
+ Understand Git collaboration best practices
+ Deal with merge conflicts
+ Use feature/branch workflow in a team
+ Rebase and merge branches

---

[Pirate Code](https://www.youtube.com/watch?v=b6kgS_AwuH0)

---

# Activity: Collaborate on a file (15min)
One person per table create a repo with html, css, and js files
Add everyone at table as collaborators
Everyone add a section about themselves
Merge conflicts, galore!

---

## What does a merge conflict look like? How do you resolve them?

```
<<<<<<< HEAD
color: red
=======
color: blue
>>>>>>>
```

---

# Hard rules
+ Do NOT commit directly to master EVER
+ Master should ALWAYS be in a working state
+ Create feature branches for tasks (good: book-crud, bad:craig-branch)
+ Rebase branches BEFORE merging to master

---

# Other Guidelines
+ Use good branch names -- no spaces, no capital letters
+ Merge conflicts should be handled frequently.
+ Merge conflicts should be handled on the feature branch.
+ Communicate and isolate who is working in different sections of the code.

---

# draw this diagram and discuss

![inline](images/diagram.jpg)

---

# Demo

- feature branch | rebase | merge


---

# feature/branch workflow (with remote repository)
```
1. git checkout -b <branch_name> (this creates a new branch and checks out to that same branch)
2. do work
3. commit (add, commit)
4. git checkout master
5. git pull origin master
6. git checkout <branch_name>
7. git rebase master
8. fix conflicts! (tells you on command line where to look in editor)
9. git push origin <branch_name>
10. git checkout master
11. git merge <branch-name>
12. git push origin master
13. Tell teammates to git pull origin master
```
---

# Repeat Activity (15 min)
+ User feature/branch work flow | rebase | merge

---

# Discussion

---

# Research a git command you haven't used before (5 min)

[Git-SCM - git bible](https://git-scm.com/)
[Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)
[Git Flow](https://guides.github.com/introduction/flow/)

---

[Git Team Exercises](https://github.com/gSchool/bue/wiki/Git-for-Teams---lecture-notes)
