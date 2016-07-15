'use strict';

angular.module('thesisApp.letters', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/letters', {
    templateUrl: 'letters/letters.html',
    controller: 'LettersCtrl'
  });
}])

.controller('LettersCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {

  var letters=[], error=0, logMar=1;
  var isCorrect=[];
  var lambdas = shuffle([400, 420, 440, 460, 480, 500, 520, 540, 560, 570, 580, 600, 620, 640, 660, 680, 700]);
  var l=0;
  $scope.letterHeight = 100;
  var i = 0;
  var info = $stateParams.info ? $stateParams.info : {};
  info.acuity = [];
  init();

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  function componentToHex(n) {
    var c = Math.round(255*n);
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  function spectralColor(l) {
    var t = 0,  r=0, g=0, b=0;
    if ((l>=400.0)&&(l<410.0)) { t=(l-400.0)/(410.0-400.0); r=    +(0.33*t)-(0.20*t*t); }
    else if ((l>=410.0)&&(l<475.0)) { t=(l-410.0)/(475.0-410.0); r=0.14         -(0.13*t*t); }
    else if ((l>=545.0)&&(l<595.0)) { t=(l-545.0)/(595.0-545.0); r=    +(1.98*t)-(     t*t); }
    else if ((l>=595.0)&&(l<650.0)) { t=(l-595.0)/(650.0-595.0); r=0.98+(0.06*t)-(0.40*t*t); }
    else if ((l>=650.0)&&(l<700.0)) { t=(l-650.0)/(700.0-650.0); r=0.65-(0.84*t)+(0.20*t*t); }
    if ((l>=415.0)&&(l<475.0)) { t=(l-415.0)/(475.0-415.0); g=             +(0.80*t*t); }
    else if ((l>=475.0)&&(l<590.0)) { t=(l-475.0)/(590.0-475.0); g=0.8 +(0.76*t)-(0.80*t*t); }
    else if ((l>=585.0)&&(l<639.0)) { t=(l-585.0)/(639.0-585.0); g=0.84-(0.84*t)           ; }
    if ((l>=400.0)&&(l<475.0)) { t=(l-400.0)/(475.0-400.0); b=    +(2.20*t)-(1.50*t*t); }
    else if ((l>=475.0)&&(l<560.0)) { t=(l-475.0)/(560.0-475.0); b=0.7 -(     t)+(0.30*t*t); }
    return rgbToHex(r,g,b);
  }

  function sendData() {

  }

  $scope.updateData = function($event){
    var letter = $event.charCode;
    if(letters.indexOf(String.fromCharCode(letter - 32)) !== -1) {
      isCorrect[letters.indexOf(String.fromCharCode(letter - 32))] = 50;
      logMar -= 0.02;
    }
    else error++;
    if( error===3 ){
      info.acuity.push([$scope.lambda, logMar]);
      l++;
      i = 0;
      logMar = 1;
      init();
    }
    i = (i+1)%5;
    if( i===0 ) {
      $scope.letterHeight = Math.round($scope.letterHeight/1.25892541179);
      error=0;
      init();
    }
  }

  function init() {
    console.log(info.acuity);
    if( l<lambdas.length ) {
      letters = shuffle(['C', 'D', 'H', 'K', 'N', 'O', 'R', 'S', 'V', 'Z']);
      error = 0;

      $scope.letter1 = letters[0];
      $scope.letter2 = letters[1];
      $scope.letter3 = letters[2];
      $scope.letter4 = letters[3];
      $scope.letter5 = letters[4];

      $scope.lambda = lambdas[l];
      $scope.lambdaRgb = spectralColor($scope.lambda);
    }
    else sendData();
  }

  init();
}]);