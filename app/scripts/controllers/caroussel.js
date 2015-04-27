'use strict';

/**
 * @ngdoc function
 * @name beautyRedSpaApp.controller:CarousselCtrl
 * @description
 * # CarousselCtrl
 * Controller of the beautyRedSpaApp
 */
angular.module('beautyRedSpaApp')
  .controller('CarousselCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
