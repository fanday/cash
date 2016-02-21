angular.module('starter')
  // .factory('data', function() {
  //   var shinyNewServiceInstance;
  //   // factory function body that constructs shinyNewServiceInstance
  //   return shinyNewServiceInstance;
  // });
  .factory('data', function($cordovaSQLite) {

    console.log("init data service");
    var db = null;
    db = $cordovaSQLite.openDB("my.db");
    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS people (id integer primary key, firstname text, lastname text)");
    $cordovaSQLite.execute(db,"CREATE TABLE IF NOT EXISTS dish_cat (dish_cat_id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT,rec_sts_id INTEGER)");
    $cordovaSQLite.execute(db,"CREATE TABLE IF NOT EXISTS dishes (dish_id INTEGER PRIMARY KEY AUTOINCREMENT, crt_time DATE, mdf_time DATE, cat_id INTEGER, name TEXT, price REAL,rec_sts_id INTEGER)");
    $cordovaSQLite.execute(db,"CREATE TABLE IF NOT EXISTS dishe_cat_rltn (id INTEGER PRIMARY KEY AUTOINCREMENT,dish_id INTEGER, cat_id INTEGER,crt_time DATE, mdf_time DATE,rec_sts_id INTEGER )");

    var data = new Object;
    data.all = function() {
      var query = "SELECT firstname, lastname FROM people";
      $cordovaSQLite.execute(db, query).then(function(res) {
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
      return data;
    };

    data.addDish=function(name,cat_id,price){

    };

    data.getAllDishes=function(){

    };

    data.updateDishByID=function(id,name,cat_id,price){

    };

    data.deleteDishByID=function(id){

    };

    data.getDishByCat=function(catId){

    };

    data.addCat=function(name){

    };

    data.updateCatById=function(id){

    };

    data.deleteCatById=function(id){

    };

    data.destory=function(){
      $cordovaSQLite.deleteDB("my.db");
    };

    return data;
  });
