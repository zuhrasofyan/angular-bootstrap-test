'use strict';

/**
 * @ngdoc function
 * @name angularBootstrapTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularBootstrapTestApp
 */
var app = angular.module('angularMapudo');

app.controller('TestCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Test'
    ];
  });
