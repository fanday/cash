// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

//reference URL:https://blog.nraboy.com/2014/11/use-sqlite-instead-local-storage-ionic-framework/
var db = null;
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform,$cordovaSQLite) {
  $ionicPlatform.ready(function() {
    db = $cordovaSQLite.openDB("my.db");
    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS people (id integer primary key, firstname text, lastname text)");
    
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
    //$cordovaSQLite.deleteDB("my.db");
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'views/home/home.html'
    })
    .state('login', {
      url: '/login',
      controller: 'LoginController',
      templateUrl: 'views/login/login.html'
    });

  console.log('config');
  $urlRouterProvider.otherwise('login');
})
