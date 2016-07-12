'use strict';

angular.module('thesisApp.statistics', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/statistics', {
            templateUrl: 'statistics/statistics.html',
            controller: 'StatsCtrl'
        });
    }])

    .controller('StatsCtrl', [function() {

    }]);