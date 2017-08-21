theme: Titillium, 1
autoscale: true
slidenumbers: true
<!-- @author: Pete Silva -->

##Angular Forms

![](http://blog.rangle.io/content/images/2016/03/mastering-forms-in-angular-2.gif)

---

###Objectives
- Bind multiple form controls to the same object
- Use ng-submit/ng-click to trigger controller actions and know when to use either
- Clear a form the Angular way

---

###ng-model
Maps the value of a form field to a variable in your controller.

```javascript
angular.module('app', [])
  .component('app', {
    template: `
      <form>
        <input type="text" ng-model="$ctrl.car.model" />
        <input type="text" ng-model="$ctrl.car.year" />
        <input type="submit">
      </form>
      {{$ctrl.car | json}}
    `
  })
```
![right fit](https://s3-us-west-2.amazonaws.com/learn.galvanize.com/learn-images/gSchool/angular-curriculum/master/images/simple-form.png)

---

###ng is magical?! 'splain it
- User inputs new value into "year" form field
- ng sees on that input field, you declared `ng-model="$ctrl.car.year"`
- If no `.car` property exists on `$ctrl`, ng creates it as empty object
- ng then sets value of `$ctrl.car.year`
- In the controller `$ctrl.car` equates to something like `{year: 1985}`

####In conclusion, magic.

---

###ng-submit
Nominates a controller function to handle the form submission.

This is similar to using ng-click on an element, but remember that a form MUST have a submit button for the form to work in Angular.

---

```javascript
angular.module('app', [])
  .component('app', {
    controller: function appController() {
      const vm = this;
      vm.doSubmit = function doSubmit() {
        console.log(vm.car); // What else could we do from here?
      }
    },
    template: `
      <form ng-submit="$ctrl.doSubmit()">
        <input type="text" ng-model="$ctrl.car.make" />
        <input type="text" ng-model="$ctrl.car.year" />
        <input type="submit">
      </form>
    `
  })
```

---

###ng-click
Nominates a controller function to call when the element is clicked

```javascript
angular.module('app', [])
  .component('app', {
    controller: function appController() {
      const vm = this;
      vm.doBtnClick = function doBtnClick() {
        console.log('Ghostride tha whip: ', vm.car);
      }
    },
    template: `
      <form>
        <input type="text" ng-model="$ctrl.car.make" />
        <input type="text" ng-model="$ctrl.car.year" />
        <button ng-click="$ctrl.doBtnClick()">DO NOT CLICK</button>
      </form>
    `
  })
```

---

###Clearing the form
Because Angular directly links the form field values to an object in your controller, blanking out the object will delete those values from the fields.

```javascript
controller: function appController() {
  const vm = this;
  vm.doReset = function doReset() {
    // this will entirely reset the form
    delete vm.car;
  }
}
```
Easy. Peasy. Nice and Breezy.

---

###Default values
Perhaps you want the form to render with some default values

```javascript
function controller() {
  const vm = this;
  vm.$onInit = function () {
    initForm();
  }
  vm.doReset = function () {
    initForm();
  }
  function initForm() {
    vm.car = {year: 1992, make: 'Subaru', model: 'Hoopty Deluxe'}
  }
}
```

---

###Best Practices

- Use `ng-submit` to handle form submission. Use `ng-click` to handle clicks on everything other than submit button.
- Use an object in your controller to hold the values of all your form fields, like `.car` in our example. Don't pollute the first level namespace of the controller.
- **Never do DOM manipulation in the controller.** Assign data to objects/vars which you then reference from your template/markup with {{ someVar }}.

---

###CFU Exercise
- Make it so it initializes the form fields to a robot with tank treads and a chainsaw named Chappy McChoppy upon load
- Upon form submit, console.log out the robot data from the fields, and clear the form fields
- Upon clicking reset, also clear the form fields

[http://codepen.io/peternsilva/pen/rmwbzP](http://codepen.io/peternsilva/pen/rmwbzP)

---

![](https://media.giphy.com/media/O7ernI4vp0aha/giphy.gif)
