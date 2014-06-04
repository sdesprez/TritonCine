'use strict';

angular
  .module('tritonCineApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/realisateur/:realisateur', {
        templateUrl: 'views/realisateur.html',
        controller: 'RealisateurCtrl'
      })
      .when('/description/:titre', {
        templateUrl: 'views/description.html',
        controller: 'DescriptionCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
