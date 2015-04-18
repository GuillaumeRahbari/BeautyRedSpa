'use strict';

/**
 * @ngdoc function
 * @name beautyRedSpaApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the beautyRedSpaApp
 */
angular.module('beautyRedSpaApp')
  .controller('HeaderCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
