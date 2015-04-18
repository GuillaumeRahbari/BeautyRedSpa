'use strict';

/**
 * @ngdoc function
 * @name beautyRedSpaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the beautyRedSpaApp
 */
angular.module('beautyRedSpaApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
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
  }])
;
