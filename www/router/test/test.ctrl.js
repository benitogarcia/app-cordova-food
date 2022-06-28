app.controller("testCtrl", function($scope, $location, $http, $cordovaGeolocation) {
console.log($cordovaGeolocation);
    var options = {
        enableHighAccuracy: true,
        maximumAge: 3600000
    };
    $scope.geo = navigator.geolocation.getCurrentPosition(
        function(posicion) {
            console.log("<<< posicion >>>");
            console.log(posicion);
            $scope.$apply(function() {
                $scope.posicion = posicion;
            });
        },
        function(error) {
            console.log("<<< error >>>");
            console.log(error);
            $scope.$apply(function() {
                $scope.error = error;
            });
        },
        options
    );

});