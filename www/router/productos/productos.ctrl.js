app.controller("productosCtrl", function($scope, $location, $http, $routeParams) {

    $scope.sesionActiva = false;
    if (!window.isLogged()) {
        $location.path('/auth/login');
    }
    $scope.idcategoria = $routeParams.categoria;
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

    $http.get(apis.producto.findBycategoria + $scope.idcategoria)
        .then(function(response) {
            $scope.productos = response.data;
        });
    $scope.addProductoCart = function(prod) {
        $scope.ordenesCount = 1;
        $scope.subtotal = prod.precio;
        $scope.complementoobligatorio.id = 0;
        $scope.complementos.compobligatorios = {};
        $scope.complementos.compopcionales = [];
        $scope.producto = prod;
        window.openModal('mdlAddProducto');
        /*if (!prod.compobl && !prod.compopc) {
            var fecha = new Date();
            window.cartAddProducto({
                id: prod.id,
                producto: prod.producto,
                cantidad: prod.cantidad,
                ordenes: $scope.ordenesCount,
                nota: $scope.nota,
                imagen: prod.imagen,
                precio: $scope.subtotal,
                descripcion: prod.descripcion,
                compobl: false,
                compopc: false,
                item: fecha.getTime()
            });
            window.closeModal('mdlAddProducto');
            navigator.notification.alert("Se agregó a su pedido.", () => {}, "CARRITO!", "ACEPTAR");
        } else {
            $scope.complementoobligatorio.id = 0;
            $scope.complementos.compobligatorios = {};
            $scope.complementos.compopcionales = [];
            $scope.producto = prod;
            window.openModal('mdlAddProducto');
        }*/
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