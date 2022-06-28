app.controller("productosCtrl", function($scope, $location, $http, $routeParams) {

    $scope.sesionActiva = false;
    if (!window.isLogged()) {
        $location.path('/auth/login');
    }
    window.openModal('mdlLoading');
    $scope.idcategoria = $routeParams.idcategoria;
    $scope.sesionActiva = true;
    $scope.productos = [];
    $scope.producto = {};
    $scope.complementoobligatorio = {
        id: 0
    };
    $scope.complementos = {
        compobligatorios: {},
        compopcionales: []
    };
    $scope.ordenesCount = 0;
    $scope.nota = "";
    $scope.subtotal = 0;
    $scope.isSubmit = false;
    $scope.domains = {
        github: endpoints[entorno].github,
        server: endpoints[entorno].domain
    };
    $http.get(apis.producto.findBycategoria + $scope.idcategoria)
        .then(function(response) {
            $scope.productos = response.data;
            setTimeout(function() {
                window.closeModal('mdlLoading');
            }, 1000);
        }, function errorCallback(response) {
            window.closeModal('mdlLoading');
            window.showModalInfo('ERROR!', 'No se cargó las categorías.');
        });
    $scope.addProductoCart = function(prod) {
        $scope.ordenesCount = 1;
        $scope.subtotal = prod.precio;
        $scope.complementoobligatorio.id = 0;
        $scope.complementos.compobligatorios = {};
        $scope.complementos.compopcionales = [];
        $scope.producto = prod;
        $scope.msgError = "";
        window.openModal('mdlAddProducto');
    };
    $scope.addProductoCartComplementos = function() {

        if ($scope.producto.compobl &&
            ($scope.complementoobligatorio.id == 0 || $scope.complementoobligatorio.id == null)) {
            $scope.msgError = "Complemento obligatorio.";
            return;
        }
        $scope.isSubmit = true;
        if ($scope.producto.compobl) {
            $scope.complementos.compobligatorios = $scope.producto.compobligatorios.find(c => c.id == $scope.complementoobligatorio.id);
        }
        var fecha = new Date();
        window.cartAddProducto({
            id: $scope.producto.id,
            producto: $scope.producto.producto,
            cantidad: $scope.producto.cantidad,
            ordenes: $scope.ordenesCount,
            nota: $scope.nota,
            imagen: $scope.producto.imagen,
            precio: $scope.subtotal,
            descripcion: $scope.producto.descripcion,
            compobl: $scope.producto.compobl,
            compopc: $scope.producto.compopc,
            compobligatorio: $scope.complementos.compobligatorios,
            compopcionales: $scope.complementos.compopcionales,
            item: fecha.getTime()
        });
        window.closeModal('mdlAddProducto');
        $scope.isSubmit = false;

    };
    $scope.eventClickCmplOpc = function(complopc) {
        var compls = $scope.complementos.compopcionales;
        if (compls.indexOf(complopc) !== -1) {
            compls = compls.filter(com => com != complopc);
            $scope.complementos.compopcionales = compls;
            $scope.subtotal -= complopc.precio;
        } else {
            $scope.complementos.compopcionales.push(complopc);
            $scope.subtotal += complopc.precio;
        }
    };
    $scope.incrementar = function() {
        $scope.ordenesCount++;
        $scope.subtotal += $scope.producto.precio;
    };
    $scope.decrementar = function() {
        if ($scope.ordenesCount > 1) {
            $scope.ordenesCount--;
            $scope.subtotal -= $scope.producto.precio;
        }
    };
});