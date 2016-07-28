The quadratic formula is $$-b \pm \sqrt{b^2 - 4ac} \over 2a$$

---

#Angular Services

Simply put Angular services are components that are added to your code via dependency injection.

## Services vs Factories

**Service**  

```javascript
app.service('MyService', function () {
  this.sayHello = function () {
    console.log('hello');
  };
});

app.controller('AppController', function (MyService) {
  MyService.sayHello(); // logs 'hello'
});
```
**Factory**

```javascript
app.factory('MyService',function () {
	return {
   	 	sayHello: function () {
    	console.log('hello');
    };
  }
});
```

Instead of working with this in the factory, we are returning an object literal.  

A service is a constructor function, whereas a factory is not.

Deep in the angular framework, code exists that calls ```Object.create()``` with the service constructor function.

A factory function is really just a function that gets called, which is why we return it explicitly.

Service = **Constructor Function**

Factory = **Function to invoke**
