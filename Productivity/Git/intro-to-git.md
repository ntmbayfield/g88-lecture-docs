## Intro to Git 
<!-- .slide: data-background="http://i.imgur.com/b5fNx.jpg" -->

---

## Objectives

* Describe what a Version Control System does and why we use it 
* Initialize a git repository with git init
* Check the status of changed files in a git repository with git status
* Stage new and changed files with git add
* Commit staged files to the git repository with git commit
* Push local commits to a remote repository with git push

---

## Version Control System

Version control is a class of tools that programmers use to manage software projects. It allows you to track changes you make to files on your machine.

----

Version control allows developers to:

* Keep track of changes to files over time
* View previous states of your project
* Return to a previous state of your project
* Manage changes to files from multiple people
* Make changes without worrying about stability
* Keep files together as a group

----

## Like a Video Game 

![save](http://cdn.wikimg.net/strategywiki/images/7/7e/LOZ_Select_Screen.png)

---

## What is Git?

Git is a free and open source software for distributed version control. 
While there are *many different* version control systems, git is incredibly popular and powerful.

----

# GIT IS NOT GITHUB

----

## What is Github?

Github is a web based service that hosts repositories on a server and allows developers to easily collaborate.
Github acts as a remote backup service for git repositories.

---

## 🚀 A Metaphor: 
## Git is a Rocketship, Github is Mars

----

#### Let's create our Space Station

To initialize a new git repo in the current directory:

`git init`

To verify or check the progress of the git repo:

`git status`

----

## DO NOT NEST GIT REPOSITORIES

if you do, cause we all have, simply 

`rm -rf .git`

----

Any files (or packages) tracked by git typically go through 3 stages:

1. Unstaged (new packages created)
    - These changes will not be committed in the next commit
2. Staged (packages in launchpad)
    - These changes will be committed in the next commit
3. Committed (packages in rocketship)
    - Changes committed in the last commit

----

Any git repo (rocketship) can be sent or modified:

1. `git pull`
    - Gets changes from Github (Mars)
2. `git push`
    - Sends committed changes (new packages in rocketship) to Github (Mars)

----

Bonus:

`git remote` 

Use it to push the repo to Github (sets the location of Mars)

`git remote add origin <Github repo url>` 

---

Question:

* What is the difference between unstaged and staged?
* What is the command to stage the latest changes?
* How do I know if my directory is a git repo?

---

#### Exercise:

* Create a new folder
* Initialize a git repository
* Create a new file
* Check that the file is unstaged
* Add the file to the staging area
* Check that the file is staged
* Commit the file

----

#### Bonus: Push it to Github

* Create a GitHub repository and don't initialize it
* Create a local git repository
* Create a file
* Stage the file
* Commit the file
* Set the GitHub repo as the git remote
* Push to GitHub

---

## Objectives

* Describe what a Version Control System does and why we use it 
* Initialize a git repository with git init
* Check the status of changed files in a git repository with git status
* Stage new and changed files with git add
* Commit staged files to the git repository with git commit
* Push local commits to a remote repository with git push

---

## Stretch

* Remotes
* Feature/Branch Workflow
* Rebase, stash, and so much more

