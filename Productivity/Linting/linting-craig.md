##Objectives

+ Explain what linting is.
+ Explain why linting your JavaScript is useful.
+ Use ESLint to lint your own JavaScript code.

---

# Always Be Knolling

![inline](img/knoll.png)

---

Linting is the process of running a program that analyzes code for potential errors. The word "linting" comes the lint Unix utility which flags suspicious and non-portable constructs in C language code. Linting code is useful because suspicious and non-portable constructs are likely to produce bugs.

---

* A linter is any tool that flags suspicious usage of coding constructs and syntactic style.
* Linters are used to find syntax errors and to highlight code that doesn't adhere to certain style guidelines.

---

# Who benefits from a linter for javascript?

---

# Who benefits from a linter for javascript?

1. The person writing the code.

1. The system that executes the code.

1. The team that maintains or works on the code in the future.

---

## The process:

1. Initialize node for your project ```npm init -y```

1. Install linter module ( for node or atom)

1. Create a .eslintrc.js configuration file.

1. Add language configuration and environmnent configuration to the .eslintrc.js file.

1. Run eslint locally and see lots of errors

1. Curse, then fix errors

---

## example .eslintrc.js

```
module.exports = {
  extends: [
    'ryansobol/browser',
    'ryansobol/jquery',
    'ryansobol/es6'
  ]
};
```

---

## Setup in Terminal

```
npm install -g eslint eslint-config-airbnb

(
  export PKG=eslint-config-airbnb;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install -g "$PKG@latest"
)

```

```
touch ~/.eslintrc.js

atom ~/.eslintrc.js

```

add the configuration to ~/.eslintrc.js

```
npm get prefix
```

---

## In Atom Settings:

Install & Enable Packages:
- linter
- linter-ui-default
- linter-eslint
- make sure jslint is disabled or not installed

In linter-eslint Settings:
- Add ~/eslintrc.js to ".eslintrc Path"
- Add result from ```npm get prefix``` to "Global Node Installation Path" e.g. '/usr/local'
- Check "Show Rule ID in Messages:
- Check Use global ESLint Installation


---

Exercise:
* Install and configure the linter
* Then lint the code your wrote for your warm up.

---

My preferred eslintrc.js

```
module.exports = {
 "extends": [
    'ryansobol/browser',
    'ryansobol/es6',
    'ryansobol/jquery'
  ],
  rules: {
    "semi": "off",
    "prefer-const": "off",
    "no-implicit-globals": "off",
    "strict": "off",
    "quotes": "off",
    "no-unused-vars": "off",
    "no-else-return": "off",
    "no-multiple-empty-lines": "off"
  }
};

```
