'use strict';

angular.module('thesisApp.statistics', ['ngRoute', 'ui.bootstrap'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/stats', {
            templateUrl: 'statistics/statistics.html',
            controller: 'StatsCtrl'
        });
    }])

    .controller('StatsCtrl', [ '$scope', '$http', function($scope, $http) {
        function getResults() {
            $http.get('http://localhost:3000/results').then(function (response) {
                $scope.data = response.data;
                $scope.lastResult = response.data[response.data.length - 1];
            });
        }

        $scope.myFilter = function (record) {
          return (record.leftEye || record.righEye);
        }





        getResults();

    }]);