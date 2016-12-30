# Project Structure

---

# Objective

### List 3 main points to remember about the style guide

---

# 3 Things to Remember

1. Folders by Features
1. Nice Names
1. Learn LIFT

---

# 1. Folders by Features


^ There are several schools of thought. Some people organize folders by their type (all views in one folder, all controllers in another, etc.).
Let's take a look at these options in the next few slides.

---

# Example: Folders by Type

```javascript
/*
* Folders per type
*/

app/
    app.module.js
    app.config.js
    directives.js
    controllers/
        session-detail.js       // controller
        sessions.js             // controller
        shell.js                // controller
        topnav.js               // controller
    views/
        session-detail.html     // view
        sessions.html           // view
        shell.html              // view
        topnav.html             // view
```

^ abbreviated from Angular Style Guide
Controllers and views are grouped into one folder.

^Directives all live in one file.

^Why might this last thing be tricky? What did you learn during project week? Hint: it's easier to work on group projects when the code is NOT all in one big file. Can you say merge conflicts? ;)

^As the app grows it means that you have to bounce around to different folders to find all related files that belong to a single feature.

^For this reason, organizing by features is preferable.

---

# Example: Folders by Feature

```javascript
/**
 * recommended
 */

app/
    app.module.js
    app.config.js
    components/
        calendar.directive.js
        calendar.directive.html
        user-profile.directive.js
        user-profile.directive.html
    layout/
        shell.html
        shell.controller.js
        topnav.html
        topnav.controller.js
    sessions/
        sessions.html
        sessions.controller.js
        sessions.routes.js
        session-detail.html
        session-detail.controller.js
```

^ abbreviated from Angular Style Guide
Features separated into their own folders. You can visit one folder and find the view (html) and all related js files (controllers, routes) for a given feature.
One file per controller or component.



---

# 2. Nice Names

```javascript
layout/
    shell.html
    shell.controller.js
    topnav.html
    topnav.controller.js
```
^ Everyone should be able to tell at a glance what is in a given file. In this example we can tell that this folder contains layout related files. shell is probably the main structure/view of the app. shell.controller.js is clearly the controller for the shell.  Similarly for topnav.

---


# 3. LIFT like John Papa[^1]

- Locating our code is easy
- Identify code at a glance
- Flat structure as long as we can
- Try to stay DRY (Don't Repeat Yourself) or T-DRY

^ John Papa uses this acronym as a guideline for a well structured app. He revisits this whenever the app grows.

[^1]: John Papa is a Microsoft Regional Director, MVP, and Google Developer Expert for Angular. He authored the  Angular Style Guide.

---

TODO: Include image of a sample app structure for reddit clone

---

# Resources

- https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
- https://johnpapa.net/angular-app-structuring-guidelines/


---

# Objective

### List 3 main points to remember about the style guide
