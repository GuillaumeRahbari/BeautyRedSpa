'use strict';

/**
 * @ngdoc directive
 * @name beautyRedSpaApp.directive:slider
 * @description
 * # slider
 */
angular.module('beautyRedSpaApp')
  .directive('slider', ['$timeout', function ($timeout) {
    return {
      replace: true,
      restrict: 'E',
      scope: {
        slideit: '='
      },
      template: '<ul class="bxslider">' +
      '<div class="container text-center"><div><h1>Beauty Red Spa</h1></div></div>' +
      '<li ng-repeat="slide in slideit" class="slide">' +
      '<img ng-src="{{slide.src}}" />' +
      '</li>' +
      '</ul>',
      link: function(scope, element, attrs) {
          $timeout(function () {
            element.bxSlider({
              mode: 'fade',
              auto: true,
              adaptiveHeight: true,
              speed: 50,
              slideSelector : '.slide'
            });
          });
      }
    };
  }]);
