'use strict';

/**
 * @ngdoc function
 * @name beautyRedSpaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the beautyRedSpaApp
 */
angular.module('beautyRedSpaApp')
  .controller('AboutCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
