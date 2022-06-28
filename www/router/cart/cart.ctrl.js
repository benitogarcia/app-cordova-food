app.controller("cartCtrl", function($scope, $location, $filter) {

    $scope.data = {
        items: []
    };

    $scope.items = window.cartGetProductos();
    $scope.data.items = $scope.items;
    $scope.item = {};
    $scope.domains = {
        github: endpoints[entorno].github,
        server: endpoints[entorno].domain
    };
    $scope.confirmarEliminarItem = function(item) {
        $scope.item = item;
        navigator.notification.confirm(
            'Desea remover ' + item.producto + '=' + item.precio + '?',
            (btnIndex) => {
                if (btnIndex == 1) {
                    cartRemoveProducto($scope.item);
                    $scope.$apply(function() {
                        $scope.items = $filter('filter')($scope.items, function(item) {
                            return item.item !== $scope.item.item;
                        });

                        $scope.data.items = $scope.items;
                        if ($scope.items.length == 0) {
                            window.menuItemSelect(document.getElementById("mnHome"));
                            $location.path('/');
                        }
                    });
                }
            }, 'Confirme', ['Aceptar', 'Cancelar']
        );
    };

    $scope.cancelarPedido = function() {
        navigator.notification.confirm(
            'Remover todo el carrito?',
            (btnIndex) => {
                if (btnIndex == 1) {
                    $scope.$apply(function() {
                        window.cartCancelar();
                        window.menuItemSelect(document.getElementById("mnHome"));
                        $location.path('/');
                    });
                }
            }, 'Confirme', ['Aceptar', 'Cancelar']
        );
    };

    $scope.openModalEnvio = function() {
        window.openModal('mdlEnvio');
    };

    $scope.envio = {
        fpagos: [
            {id: 1, forma: 'Efectivo'},
            {id: 2, forma: 'Transferencia'},
        ],
        paginas: [
            {clave: 'fpago', visible: true},
            {clave: 'fenvio', visible: false},
            {clave: 'final', visible: false}
        ],
    };
    $scope.nextPage = function(clave) {

        $scope.envio.paginas[0].visible = ($scope.envio.paginas[0].clave == clave);
        $scope.envio.paginas[1].visible = ($scope.envio.paginas[1].clave == clave);
        $scope.envio.paginas[2].visible = ($scope.envio.paginas[2].clave == clave);
        
    };
});