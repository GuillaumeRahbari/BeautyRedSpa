'use strict';

/**
 * @ngdoc function
 * @name beautyRedSpaApp.controller:GaleriesCtrl
 * @description
 * # GaleriesCtrl
 * Controller of the beautyRedSpaApp
 */
angular.module('beautyRedSpaApp')
  .controller('GaleriesCtrl',['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    angular.element(document).ready(function(){
      angular.element('.bxslider').bxSlider({
        mode : 'fade',
        auto:true
      });
    });
  }]);
