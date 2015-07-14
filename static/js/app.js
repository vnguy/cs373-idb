var db = '../../copaDB.sqlite3';
var example = angular.module('starter', ['ngCordova'])
    .run(function($cordovaSQLite) {
        $ionicPlatform.ready(function() {
            db = $cordovaSQLite.openDB("my.db");
            $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS player (id integer primary key, player text)");
        });
    });


example.controller("ExampleController", function($scope, $cordovaSQLite) {

    $scope.select = function(player) {
        var query = "SELECT player FROM Player WHERE player = ?";
        $cordovaSQLite.execute(db, query, [player]).then(function(res) {
            if(res.rows.length > 0) {
                console.log("SELECTED -> " + res.rows.item(0).player);
            } else {
                console.log("No results found");
            }
        }, function (err) {
            console.error(err);
        });
    }

});