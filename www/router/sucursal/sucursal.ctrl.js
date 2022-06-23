app.controller("sucursalCtrl", function($scope, $location, $http) {
$scope.categorias = [];
    $http.get("http://localhost:3004/categorias")
        .then(function(response) {
            $scope.categorias = response.data;
        });
});