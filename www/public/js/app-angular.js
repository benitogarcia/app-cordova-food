var app = angular.module("appMainJS", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "router/categoria/categoria.view.html",
            controller: "categoriaCtrl"
        })
        .when("/categoria/:categoria", {
            templateUrl: "router/productos/productos.view.html",
            controller: "productosCtrl"
        })
        .when("/sucursal", {
            templateUrl: "router/sucursal/sucursal.view.html",
            controller: "sucursalCtrl"
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