'use strict';

/**
 * @ngdoc overview
 * @name beautyRedSpaApp
 * @description
 * # beautyRedSpaApp
 *
 * Main module of the application.
 */
angular
  .module('beautyRedSpaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'duScroll'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
