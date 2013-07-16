'use strict';

angular.module('YiClosetApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.test = 'asd';
   // indexeddbService.sayHello();
  }]);
