# Built-in Directives, Expressions, and Filters

---

# Objectives

By the end of this lesson you will be able to describe:

- What a built-in directive is
- What an expression is
- What a filter is

---

# Built-in Directives

## Built-in directives are little pieces of functionality that Angular gives you for free.

---

### To use them, you will generally add the attribute to an html element

For example:

```html
<div ng-show="$ctrl.showHello">
  Hello There!
</div>
```

---

## The docs are your friend for these!
## You are not expected to memorize how to use each and every built-in directive. Knowing that they exist is half the battle.

---

# Name 3 built-in directives that we have used so far.

^# Additional Built-in Directives

^ng-repeat
ng-hide
ng-href
ng-class
ng-src
ng-app
ng-show
ng-click
ng-disabled
ng-checked
ng-selected
ng-model
ng-style
ng-disabled
ng-readonly
ng-include
ng-switch
ng-controller
ng-view
ng-if
ng-init
ng-bind
ng-cloak
ng-bind-template
ng-model-options
ng-change
ng-form
ng-submit

---

# Expressions

Angular expressions are Javascript-like snippets that are usually placed in bindings like {{ expression }}.

- They can be used as an argument for a directive
- They can be used to display information on the page
- No access to variables outside of the global scope

---

# Filters

Angular filters are bits of code that format data before displaying it.
