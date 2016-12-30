// the app has a dependency - the ngRoute module
var app = angular.module("routingApp", ['ngRoute']);

// configure the routes by passing a function that sets up the templateUrl and the controller for each route
app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/dogs', {
        templateUrl: 'partials/dogs.html',
        controller: 'DogsController'
      })
      .otherwise({ redirectTo: '/' });
});

//create the controllers for each of the pages
function HomeController($scope){
  $scope.view = {};
  $scope.view.title = "Home Page";
}

function DogsController($scope){
  $scope.view = {};
  $scope.view.title = "Dogs Page";
}

app.controller("HomeController", HomeController);
app.controller("DogsController", DogsController);
