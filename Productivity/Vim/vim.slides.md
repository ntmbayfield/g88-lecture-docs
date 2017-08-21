# Introduction to Vim

---

# Objectives

- Open a file
- Toggle between command mode and edit mode
- Save a file and quit
- Use basic movement and edit commands

---

## The only command you ever need

__escacpe__ :q!

... this gets out of vim

---

# The End

---

## Just Kidding...Why vim?

1. You will have to use vim to edit files on *nix machines
1. Extremely efficient once you get used to it
1. It could be the only IDE/editor you ever need
1. It has powerful regex search/replace built in
1. You will be able to debate your friends who prefer emacs on the benefits of vim

---

# Tabs or Spaces?

https://www.youtube.com/watch?v=3r1z5NDXU3s

---

## Edit vs. Command Mode

the __esc__ toggles between the two modes (edit or commands).  Working in vim requires switching between the two a lot!

---

### Opening a file

```
vim bacon.txt
```

### Switch to edit mode and write some text

```
esc i
```
 ... start writing

### Save the file and quit

```
esc :wq
```

---

## The Basics...

```
h j k l     : move cursor ( l: ←  j: ↓  k: ↑  h: → )
A           : Append at end of line
o           : Insert at new line below
u           : undo last command, again and again
x           : delete character under cursor
dw          : delete everything right from the cursor to the start of next word (and put it into the default register)
dd          : delete line (and put it into the default register)
p           : paste the default register

/bacon: search forward for bacon

```

---

## Copy Paste

```
v           : visual mode -- use to select text with cursor movement or mouse
y           : use to yank (copy) what was selected
<Esc>       : esc gets you back to the main mode

^ w e $     : bigger movements: beginning of line, word, end of word, end of line

Modes:
 normal, insert and visual, there are others too
 <Esc>    takes you back to normal

Commands are case sensitive:
   c        : starts a change command
   C        : change to end of line (same as c$)
```

---

### search and replace

```
s/bacon/lettuce/g : use regex to search & replace the line
%s/bacon/lettuce/g : use regex to search & replace the file
```

---

Combining Movement and Edit

```
esc d shift-G : delete everything to the end of the file
esc cw : change the current word you are on
```

---

Show how to build a SQL statement from CVS delimited data

---

## Want More?

https://vim-adventures.com/
http://vim.wikia.com/wiki/Best_Vim_Tips
http://www.viemu.com/a_vi_vim_graphical_cheat_sheet_tutorial.html

