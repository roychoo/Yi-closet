'use strict';

angular.module('YiClosetApp', ['xc.indexedDB'])
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
  .config(function($indexedDBProvider){
    $indexedDBProvider
      .connection('myIndexedDB')
      .upgradeDatabase('1', function(event, db, tx){
        var objStore = db.createObjectStore('people', {keypath: 'ssn'});
        objStore.createIndex('name_idx', 'name', {unique: false});
        objStore.createIndex('age_idx', 'age', {unique: false});
      });
  });
