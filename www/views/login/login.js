//import {Storage, SqlStorage} from 'lib/ionic/ionic';
var db;
angular.module('starter')
  .controller('LoginController', function($scope,$cordovaSQLite,$state) {
    // $scope.user.password = 'ffff';
    // $scope.user.username = 'kkkk';

    $scope.insert = function(firstname, lastname) {
      var query = "INSERT INTO people (firstname, lastname) VALUES (?,?)";
      $cordovaSQLite.execute(db, query, [firstname, lastname]).then(function(res) {
        console.log("INSERT ID -> " + res.insertId);
      }, function(err) {
        console.error(err);
      });
    }

    $scope.select = function(lastname) {
      var query = "SELECT firstname, lastname FROM people WHERE lastname = ?";
      $cordovaSQLite.execute(db, query, [lastname]).then(function(res) {
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            console.log("SELECTED -> " + res.rows.item(i).firstname + " " + res.rows.item(i).lastname);
          }
          //console.log("SELECTED -> " + res.rows.item(0).firstname + " " + res.rows.item(0).lastname);
        } else {
          console.log("No results found");
        }
      }, function(err) {
        console.error(err);
      });
    }


    $scope.login = function(user) {
      console.log(user.username);
      console.log(user.password);
      //$scope.insert(user.username,user.password);
      //$scope.select(user.password);
      $state.go('home.cash');
    };
  });
