# NPM - Node Package Manager

---

# Objectives

You will be able to:

- Explain the purpose of NPM
- Install a global module (`npm -g <module>`)
- Initialize NPM (`npm init`)
- Install a package using NPM (`npm <module> --save`)
- Explain the purpose of the package.json file
- Create a .gitignore file

---

# Why Use NPM?

- Makes code portable
- Manages dependancies (libraries you need to run your app)
- Keeps project metadata consistent
- Access thousands of packages, so you don't have to reinvent the wheel
- Consistent interface allows easy deployment

---

# Where to find NPM
## [npmjs.com](http://npmjs.com)

^ Explore npmjs for a few minutes and then we will discuss what we found there.

---

# Install a Module Globally
## `npm install nodemon -g`

^ You do it. What do you see? What does it mean to install this globally? Where can I access this package?

---

# Initialize NPM
## `npm init`

^ Walks you through creating a package.json file. For now, you can just accept the default values by hitting enter or by using the -y flag.

---

# Package.json file

```json
{
  "name": "npm_practice",
  "version": "1.0.0",
  "description": "practice with npm",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "test": "mocha"
  },
  "author": "tsm",
  "license": "MIT",
  "dependencies": {
    "express": "^4.14.0"
  }
}
```

^Let's talk about what this package.json is.

---

# Install a Module Locally
## `npm install express --save`

^ installs a new module and saves it to package.json. If you leave off the --save then the module will not be saved to the package.json.


---

# Using the Packages
## `var moduleName = require('moduleName');`

^ Use the require keyword to include the package in your app after it has been installed

---

# .gitignore

## `echo node_modules >> .gitignore`

^Prevent node_modules from being added to source control. The package.json file contains a list of the modules that need to be installed. It is an waste of space to check node_modules into source control.

---

# [NPM PDF](NPM_Notes.pdf)

---

# Demo

^ create package.json, install some modules from npm, create gitignore, show package.json

---

# Review Objectives

- Explain the purpose of NPM
- Install a global module
- Initialize NPM
- Install a package using NPM
- Explain the purpose of the package.json file
- Create a .gitignore file


^ CFU
What is the purpose?
What command would you use to -install a global module, initialize npm, install a package using NPM
What is the purpose of the package.json file
