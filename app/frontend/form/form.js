'use strict';

angular.module('thesisApp.form', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'form/form.html',
    controller: 'FormCtrl'
  });
}])

.controller('FormCtrl', ['$scope', '$modalInstance', function($scope, $modalInstance) {
  $scope.info = {};

  $scope.gender = ["Kobieta", "Mężczyzna"];

  $scope.eyes = {
    myopia: {
      text: "krótkowzroczność",
      left: false,
      right: false
    },
    presbyopia: {
      text: "dalekowzroczność",
      left: false,
      right: false
    },
    astigmatism: {
      text: "astygmatyzm",
      left: false,
      right: false
    },
    dichromatism: {
      text: "dichromatyzm",
      right: false
    },
    trichromatism: {
      text: "trichromatyzm",
      right: false
    },
    monochromatism: {
      text: "monochromatyzm",
      right: false
    }
  }

  $scope.openModal = new function () {
    $modalInstance.open();
  }
}]);