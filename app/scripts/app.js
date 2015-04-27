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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/prestations', {
        templateUrl: 'views/prestations.html',
        controller: 'PrestationsCtrl'
      })
      .when('/galeries', {
        templateUrl: 'views/galeries.html',
        controller: 'GaleriesCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
