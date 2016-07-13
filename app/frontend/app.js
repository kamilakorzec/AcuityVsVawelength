'use strict';

// Declare app level module which depends on views, and components
angular.module('thesisApp', [
  'ngRoute',
  // 'jquery',
  // 'ui.bootstrap',
  'thesisApp.form'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/'});
}]);
