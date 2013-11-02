'use strict';

angular.module('rulyticApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/authorize', {
        templateUrl: 'views/authorize.html',
        controller: 'AuthorizeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
