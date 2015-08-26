'use strict';

/**
 * @ngdoc function
 * @name angularMapudo.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularMapudo
 */
var app= angular.module('angularMapudo');

 app.controller('MainCtrl', function ($scope) {
    $scope.mainAwesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ]; 
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
  });
