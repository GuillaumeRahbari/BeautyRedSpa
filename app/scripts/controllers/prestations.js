'use strict';

/**
 * @ngdoc function
 * @name beautyRedSpaApp.controller:PrestationsCtrl
 * @description
 * # PrestationsCtrl
 * Controller of the beautyRedSpaApp
 */
angular.module('beautyRedSpaApp')
  .controller('PrestationsCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
