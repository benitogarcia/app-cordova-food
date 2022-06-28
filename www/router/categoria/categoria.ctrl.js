app.controller("categoriaCtrl", function($scope, $location, $http, $routeParams) {
    $scope.categorias = [];
    $scope.promociones = [];
    $scope.idsucursal = $routeParams.idsucursal;
    $scope.domains = {
        github: endpoints[entorno].github,
        server: endpoints[entorno].domain
    };
    window.openModal('mdlLoading');
    /** Cargar las promociones */
    $http.get(apis.promociones.getSucursal + $scope.idsucursal)
        .then(function(response) {
            $scope.promociones = response.data;
        }, function errorCallback(response) {
            //navigator.notification.alert("Ocurrio un errror al cargar las promociones", () => {}, "ERROR!", "ACEPTAR");
            //$scope.error = response;
        });

    /** Cargar los productos */
    $http.get(apis.categoria.getAll)
        .then(function(response) {
            $scope.categorias = response.data;
            setTimeout(function() {
                window.closeModal('mdlLoading');
            }, 1000);
        }, function errorCallback(response) {
            window.closeModal('mdlLoading');
            window.showModalInfo('ERROR!', 'No se cargó las categorías.');
        });
    $scope.redirectToProductos = function(idcategoria) {
        $location.path('/sucursal/' + $scope.idsucursal + '/categoria/' + idcategoria);
    };
    $scope.redirectToPromociones = function() {
        alert("Falta");
        //$location.path('/sucursal/' + idsucursal + '/categoria/' + idcategoria);
    };
});