# Git

---

# Objectives
- Discuss what a Version Control System is
- Describe how Git works
- Initialize a git repository with git init
- Check the status of changed files in a git repository with git status
- Stage and Commit files


---

# Version Control System

Version control allows developers to revert back to a specific time and place in your code... sort of like a reset button.

![right filtered](./images/backwards-1426683_1920.png)

^ Keep track of changes to files over time
^ View or return to a previous state of your project
^ Manage changes to files from multiple people
^ Make changes without worrying about stability
^ Easy to share with others
^ "Save points" in the code

^ Have you ever worked on a file and wished you could go back to how it looked an hour ago?
^ First objective

---

# Git is the Solution
Git is a Version Control System. Any files tracked by git typically go through 3 stages:

Unstaged

^ These changes will not be committed in the next commit

Staged

^ These changes will be committed in the next commit

Committed

^ Changes committed in the last commit
^ Second objective

---

# `git init`

^ initialize a git repository to start tracking your changes
^ needs to be on the directory you want to be a repo (not the main workspace!)
^ Third Objective

---

# `git status`

^ see the status of your changed files (are they in the staging area or committed yet? Are some files not being tracked?)
^ Fourth Objective

---

# `git add`
![right](./images/rocket-312767_1280.png)

^ We are adding the changed files to the staging area
Almost done with 5th objective

---

# `git commit`
![right](./images/discovery-space-shuttle-879410_1280.jpg)

^ you will need to add a commit message
^ good practice is to add a detailed message in the present tense
^ commit early, commit often
^ done with Fifth objective

---
# Let's Put it All Together
- `git init`
- `git status`
- `git add -a`
- `git commit -m "complete the lesson"`

^ Explain what is happening at each step
Remind that init only happens ONCE per repository and only when creating a new repo

---

# `.git` directory

---

# Check for Understanding
![](./images/colors-1267036_1920.jpg)

^ Checks for Understanding:
 I want to initialize a repository
 I want to check the status of my repository
 I have created a new file and I want to add it to the staging area
 I have some files staged and want to commit them to my local repository

---
# BREAK

![](./images/emblem-1294453_1280.png)

---
# GitHub

---

# Objectives
- Discuss the difference between Git and GitHub
- Connect Git and GitHub
- Explain what a remote is
- Push and Pull from GitHub

---

# What is GitHub?
GitHub acts as a remote backup service for git repositories.

![](./images/mars-1326108_1280.jpg)

^ Git and GitHub are not the same thing. Git is version control software and GitHub is a place to backup or store the same files that are being tracked by Git.

---

# Connect Git and GitHub
`git remote add origin git@github.com:nasa/marooned-astronaut.git`

![](./images/entrepreneur-1103717_1280.jpg)

^ link to the github repository by referencing the account and the name of the repository from github. You need to set up the flight path.

---

# What is a remote and how do you see it/them?

`git remote -v`

^ Git stores an alias for your remotes. The default is origin.

---

# Send the files to GitHub

`git push -u origin master`

![right](./images/rocket-launch-67649_1920.jpg)

---

# Get updates from GitHub

`git pull origin master`

---

# Demo Time

---

# Connecting Git and GitHub
## Demo Objectives

- Create a new repository on GitHub
- Bring an existing GitHub repository to your local machine
  - Fork and clone
  - Clone
- Connect a Git and GitHub repository

---

# BREAK

![](./images/emblem-1294453_1280.png)

---

# Learning Strategy
## Jigsaw classroom

- You will have a home group
- Each person will choose a topic
- Go to the expert group to discuss/explore the topic and come up with talking points to bring back to your home group
- Come back to home group and you will get 2 minutes to share your new expertise

---

# Topics

- git remote rm
- git stash
- git checkout -b branch_name
- git log

^
- decide who will do which topic
- time to move into expert groups
- each person will get 2 minutes to share what they know
- 2 minutes for filling in gaps, questions, etc.
- What do you have for your first point
