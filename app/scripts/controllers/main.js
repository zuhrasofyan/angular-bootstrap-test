'use strict';

/**
 * @ngdoc function
 * @name angularMapudo.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularMapudo
 */
var app= angular.module('angularMain');

 app.controller('MainCtrl', function ($scope) {
    $scope.mainAwesomeThings = [
      'Views',
      'Following Users',
      'Likes',
      'Comments'
    ]; 
    //dummy scope for data by month
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September"];
    $scope.labelsDay = [1,2,3,4,5,6,7,8,9,10];
    //$scope.series = ['Total Viewer in this course','adasdad'];
    //$scope.data = [65, 59, 80, 81, 56, 55, 40, 81, 22];
    $scope.dataViews = [[65, 59, 80, 81, 56, 55, 40, 81, 22]];
    $scope.dataFollowingUsers = [[2, 5, 8, 10, 12, 11, 14, 17, 22]];
    $scope.dataLikes = [[7, 5, 1, 5, 5, 9, 12, 13, 20]];
    $scope.dataComments = [[4, 15, 12, 1, 17, 8, 15, 8, 2]];

    //scope else
    $scope.dataUserDay = [5,10,3,5,6,8,11,13,3,9];
    $scope.dataUserWeek = [5,6,8,11,13,3,9];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };

    

  });

