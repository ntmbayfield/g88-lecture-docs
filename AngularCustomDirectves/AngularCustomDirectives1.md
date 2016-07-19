# Angular Custom Directives (Part 1)

## Objectives

- Create and use  custom directive.
- Explain Angular's HTML Normalization.
- Restrict Custom Directives.
- Use Template URLs.
- Explain what Isolate Scope is.

## Lecture

```app.js```

```javascript
var app = angular.module('simpleDirectiveApp', [])
app.directive('gsAngularLogo', function() {
  return {
    template: '<img src="https://lh6.googleusercontent.com/-TlY7amsfzPs/T9ZgLXXK1cI/AAAAAAABK-c/Ki-inmeYNKk/w749-h794/AngularJS-Shield-large.png">'
  };
});
```
```index.html```

```javascript
<!DOCTYPE html>
<html ng-app="simpleDirectiveApp">
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.js" type="text/javascript"></script>
  <script src="app.js" type="text/javascript"></script>
</head>
<body>
  <gs-angular-logo></gs-angular-logo>
</body>
</html>
```

## A few things to notice

- The directive is named ```gsAngularLogo``` but we use it by calling ```gs-angular-logo```.
- We prefixed it with gs (Galvanize School).  Angular highly recommends prefixes to avoid name collision.
- This Angular Directive is a element, not an attribute of an html tag.

## HTML Normalization

Angular parses your HTML document and goes through a process called normalization.  Essentially this means going over eac tag, looking for angular directives and converting the name from a dash-delimited name to a camel case name.

For example, angular translates ```gs-angular-logo``` into ```gsAngularLogo```. 

This also works with ```:``` and ```_```.  The reason Angular does this is because HTML is case-insensitive.

Angular also will strip the x- and data- from the front of the directive.

You should use dash-delimited format.  If you need to use a HTML validator that is not Angular aware - you can use the data- prefixed version.

## Restrict

```index.html```

```
<body>
  <h5 gs-angular-logo></h5>
</body>
```

```app.js```

```javascript
var app = angular.module('simpleDirectiveApp', [])
app.directive('gsAngularLogo', function() {
  return {
    restrict: 'E', // 'E' for element
    template: '<img src="https://lh6.googleusercontent.com/-TlY7amsfzPs/T9ZgLXXK1cI/AAAAAAABK-c/Ki-inmeYNKk/w749-h794/AngularJS-Shield-large.png">'
  };
});
```

**Best Practice**

Use an angular directive as an attribute only when it decorates a tag or somehow relates to it. Otherwise, create a separate element for the directive. 

##Template URL

Typically a directive's template will become larger. To make the directive cleaner, you can use templateUrl instead of template in the directive. The templateUrl defines an html file that will be requested via ajax and used as the template.

```app.js```

```
var app = angular.module('yoyoDirectiveApp', [])

app.controller('YoyoController', ['$scope', function($scope) {
  $scope.yoyo = {name: 'Duncan Metal Drifter',
    img: "http://www.toysrus.com/graphics/tru_prod_images/Duncan-Metal-Drifter-Pro-Yo-Yo--pTRU1-8444206dt.jpg"
  };
}]);

app.directive('gsYoyoDetails', function() {
  return {
    templateUrl: 'yoyo-details.html',
  };
});

```

```details.html```

```
<h3>{{yoyo.name}}</h3>
<img ng-src="{{yoyo.img}}">
```

```index.html```

```
<!DOCTYPE html>
<html ng-app="yoyoDirectiveApp">
<head>
<script src="https://code.jquery.com/jquery-2.1.4.min.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.3/angular.js" type="text/javascript"></script>
<script src="app.js" type="text/javascript"></script>
</head>
<body ng-controller="YoyoController">
  <gs-yoyo-details></gs-yoyo-details>
</body>
</html>
```

## Isolate Scope

Directives have access to the parent scope by default in AngularJS applications. 

This requires you to know a lot bout the parent scope to use the directive.

If you want to make a reusable directive you can't rely on the parent scope and must use something called Isolate Scope instead.

You also might not want directives to accidently read or write properties in the parent scope.

Isolate scope is like creating a wall around the directive that parent scope can't penetrate.

You can pass values in isolate scope through HTML attributes.

```
.directive('myComponent', function () {
    return {
        scope:{
            attributeFoo:'@',
        }
    };
})
```

```
<my-component attribute-foo="{{foo}}"></my-component>
```