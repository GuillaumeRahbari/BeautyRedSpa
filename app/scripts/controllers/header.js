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

    $scope.base = 'assets/images/caroussel';
    $scope.images = [
      {src: $scope.base + '/image1.jpeg' },
      {src: $scope.base + '/image2.jpg' },
      {src: $scope.base + '/image3.jpg' }
    ];
  }]);
