angular.module('starter')
  .controller('HomeController', function($scope, $ionicSideMenuDelegate) {
    console.log('this is Home controller');
    $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };
});
