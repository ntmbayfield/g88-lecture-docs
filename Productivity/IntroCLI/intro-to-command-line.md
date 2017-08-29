## Intro to Command Line
<!-- .slide: data-background="http://i.imgur.com/rbBVg4J.gif" -->

---

## Objectives

* Use 'man' to learn how to use CLI commands 
* Describe the connection between the command line and the "Graphical User Interface"
* Perform basic file manipulation & navigation operations on the command line

---

## What is the Terminal?

It’s the original interface for modern computers

----

Although they technically mean slightly different things, 
the following terms are synonymous with the Terminal:

* Shell
* Bourne Shell
* bash
* zsh
* Command Line
* DOS Prompt (on windows machines)
* SSH (on remote machines)
* csh
* ksh
* sh
* UNIX Shell

----

Modern version of an [‘original’](https://en.wikipedia.org/wiki/Computer_terminal#Text_terminals
) User Interface for unix based computers.

Because programmers have been using the CLI for so long, it has hundreds of very useful commands built in.

---

# Read The Manual

Form of documentation that explains how a command works.

----

The first command you should learn:

`man man`

----

# Command flags

A common way to specify options for command line programs.

`ls -l -a` 

or

`ls -la`

---

# Graphical User Interfaces

----

![finder](https://support.apple.com/library/content/dam/edam/applecare/images/en_US/osx/osx-el-capitan-finder-icon.png)

Finder is a GUI. It's an abstraction of the terminal

Everything you can do in your computer, you can do through the Terminal

----

`open` current directory in a Finder window

----

Display tree structure in the terminal

`brew install tree`

`tree -L 1`

----

# DEMO

- `ls`
- `cd`
- `mkdir`
- `rm`

---

# Basic File Manipulation and Tips 

----

## Absolute/Relative Paths

A path is absolute when it starts with /

Root is "/"

Home is "~"

----

## . and ..

`pwd` - show current path

`.` - current directory

`..` - up a directory

----

Question:

Is the path returned by the pwd command absolute or relative?

----

## Tab Complete

Start typing and hit `tab` to autocomplete

----

## Copy/Move

`mv`

`cp`

Extra: `-r`

----

## Create/Show Files

`touch` - creates a file

`cat` - shows content

Open with text editor - 

`atom .`

---

Questions:

* What command is used to create a new directory called workspace?
* What command would be used to remove a file called index.html from the current working directory?
* What command would be used to change your working directory to /usr/local?
* What command is used to move a file named index.html from the current working directory to the desktop?
* What does ~ mean in cd ~/Desktop?

---

## Objectives

* Use 'man' to learn how to use CLI commands 
* Describe the connection between the command line and the "Graphical User Interface"
* Perform basic file manipulation & navigation operations on the command line

---

## Exercise

https://github.com/gSchool/cmdLineSentence

---

## Stretch 

* Permission and Roles
* Piping
* Grep
* History
