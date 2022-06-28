var app = angular.module("appMainJS", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "router/sucursales/sucursal.view.html",
            controller: "sucursalCtrl"
        })
        .when("/sucursal/:idsucursal", {
            templateUrl: "router/categoria/categoria.view.html",
            controller: "categoriaCtrl"
        })
        .when("/sucursal/:idsucursal/categoria/:idcategoria", {
            templateUrl: "router/productos/productos.view.html",
            controller: "productosCtrl"
        })
        .when("/auth/login", {
            templateUrl: "router/auth/login/login.view.html",
            controller: "loginCtrl"
        })
        .when("/auth/registrar", {
            templateUrl: "router/auth/registrar/registrar.view.html",
            controller: "registrarCtrl"
        })
        .when("/cart", {
            templateUrl: "router/cart/cart.view.html",
            controller: "cartCtrl"
        })
        .when("/test", {
            templateUrl: "router/test/test.view.html",
            controller: "testCtrl"
        })
        .when("/template", {
            templateUrl: "templates/home.html"
        })
        .when("/spinner", {
            templateUrl: "templates/spinner.html"
        })
        .otherwise({
            template: "<h3>Ventana no encontrada</h4>"
        });
});