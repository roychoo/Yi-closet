'use strict';

angular.module('YiClosetApp', ['services'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function(indexeddbServiceProvider){
    //indexeddbServiceProvider.init();
    console.log(indexeddbServiceProvider.setName('hello'));
  });
