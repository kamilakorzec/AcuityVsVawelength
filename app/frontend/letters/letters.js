'use strict';

angular.module('thesisApp.letters', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/letters', {
    templateUrl: 'letters/letters.html',
    controller: 'LettersCtrl'
  });
}])

.controller('LettersCtrl', [function() {
  this.helloWorld = "Hello world";
}]);