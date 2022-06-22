app.controller("cartCtrl", function($scope, $location) {

    $scope.items = window.cartGetProductos();
    $scope.item = {};

    $scope.confirmarEliminarItem = function(item) {
        $scope.item = item;
        navigator.notification.confirm(
            'Decea remover ' + item.producto + '=' + item.precio + '?',
            $scope.confirmCallback, 'Confirme', ['Cancelar', 'Aceptar']
        );
    };

    $scope.confirmCallback = function(btnIndex) {
        if (btnIndex == 1) {
            console.log('Aceptar');
            window.cartRemoveProducto($scope.item);
            setTimeout(function(){
                $scope.items = window.cartGetProductos();
                if ($scope.items.length == 0) {
                    $location.path('#!/')
                }

            }, 1000);
        }
    };
});