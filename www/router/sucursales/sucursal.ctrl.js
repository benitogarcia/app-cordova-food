app.controller("sucursalCtrl", function($scope, $location, $http) {

    $scope.sesionActiva = false;
    if (!window.isLogged()) {

        $location.path('/auth/login');
    }
    window.openModal('mdlLoading');
    $scope.domains = {
        github: endpoints[entorno].github,
        server: endpoints[entorno].domain
    };
    $scope.sucursales = [];
    $http.get(apis.sucursal.getAll).then(
        function(response) {
            $scope.sucursales = response.data;
            setTimeout(function() {
                window.closeModal('mdlLoading');
            }, 1000);
        },
        function(err) {
            console.log('error');
            console.log(err);
            window.closeModal('mdlLoading');
            window.showModalInfo('ERROR!', 'No se cargó las sucursales.');
        }
    );

    $scope.redirectToSucursal = function(idsucursal) {
        $location.path('/sucursal/' + idsucursal);
    }
});