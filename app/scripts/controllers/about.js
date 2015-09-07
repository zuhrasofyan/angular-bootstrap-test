'use strict';

/**
 * @ngdoc function
 * @name angularBootstrapTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularBootstrapTestApp
 */
angular.module('angularMain')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'About'
    ];
    $scope.test = 'hoooi';
  });
