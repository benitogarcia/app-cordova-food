app.controller("cartCtrl", function($scope, $location, $filter) {

    $scope.data = {
        items: []
    };

    $scope.items = window.cartGetProductos();
    $scope.data.items = $scope.items;
    $scope.item = {};

    $scope.confirmarEliminarItem = function(item) {
        $scope.item = item;
        navigator.notification.confirm(
            'Decea remover ' + item.producto + '=' + item.precio + '?',
            (btnIndex) => {
                if (btnIndex == 1) {
                    console.log('Aceptar');
                    cartRemoveProducto($scope.item);
                    console.log($scope.items);
                    $scope.$apply(function() {
                        $scope.items = $filter('filter')($scope.items, function(item) {
                            return item.item !== $scope.item.item;
                        });
                        console.log($scope.items);
                        $scope.data.items = $scope.items;
                        if ($scope.items.length == 0) {
                            $location.path('#!/')
                        }
                    });
                }
            }, 'Confirme', ['Cancelar', 'Aceptar']
        );
    };
    /*

            (btnIndex) => {
                if (btnIndex == 1) {
                    console.log('Aceptar');
                    cartRemoveProducto($scope.item);
                    console.log($scope.items);
                    $scope.items = $filter('filter')($scope.items, function(item) {
                        return item.item !== $scope.item.item;
                    });
                    console.log($scope.items);
                    $scope.data.items = $scope.items;
                    if ($scope.items.length == 0) {
                        $location.path('#!/')
                    }
                }
            }
    */

    $scope.confirmCallback = function(btnIndex) {
        if (btnIndex == 1) {
            console.log('Aceptar');
            cartRemoveProducto($scope.item);
            $scope.items = $filter('filter')($scope.items, function(item) {
                return item.item !== $scope.item.item;
            });

            //$scope.items.filter(it => it.item != $scope.item.item);
            //setTimeout(function() {
            //$scope.items = cartGetProductos();
            if ($scope.items.length == 0) {
                $location.path('#!/')
            }

            //}, 1000);
        }
    };

    $scope.cancelarPedido = function() {
        window.cartCancelar();
        $location.path('/');
    };
});