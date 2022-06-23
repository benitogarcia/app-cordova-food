app.controller("categoriaCtrl", function($scope, $location, $http) {
    $scope.categorias = [];
    console.log(apis.categoria.getAll);
    $http.get(apis.categoria.getAll)
        .then(function(response) {
            $scope.categorias = response.data;
        }, function errorCallback(response) {
            navigator.notification.alert("Ocurrio un errror al cargar las categorias", () => {}, "ERROR!", "ACEPTAR");
            console.log('<<< categoriaCtrl >>>');
            console.log(response);
            $scope.response = response;
        });
    $scope.redirectToProductos = function(idcategoria) {
        $location.path('/categoria/' + idcategoria);
    };
});