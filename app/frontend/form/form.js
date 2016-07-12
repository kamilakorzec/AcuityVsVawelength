'use strict';

angular.module('thesisApp.form', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'form/form.html',
    controller: 'FormCtrl'
  });
}])

.controller('FormCtrl', ['$scope', function($scope) {
  $scope.helloWorld = "Hello World"
}]);