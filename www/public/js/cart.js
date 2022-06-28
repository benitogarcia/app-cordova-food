/**
 * METODOS DE CARRRITO
 **/
function cartAddProducto(prod) {
    var productos = cartGetProductos();
    productos.push(prod);
    window.localStorage.setItem('cart_productos', JSON.stringify(productos));
    cartCount();
}

function cartGetProductos() {
    var productos = [];
    if (window.localStorage.getItem("cart_productos")) {
        productos = JSON.parse(window.localStorage.getItem("cart_productos"));
    }
    return productos;
}

function cartCount() {
    document.getElementById("myBtnCartCount").innerHTML = cartGetProductos().length + "";
    if (cartGetProductos().length > 0) {
        document.getElementById('myBtnCart').style.display = "block";
    } else {
        document.getElementById('myBtnCart').style.display = "none";
    }
}

cartCount();

function cartRemoveProducto(producto) {
    
    var productos = cartGetProductos();
    
    productos = productos.filter(p => p.item.toString() != producto.item.toString());
    
    window.localStorage.setItem('cart_productos', JSON.stringify(productos));
    
    cartCount();
}

function cartCancelar() {    
    var productos = [];    
    window.localStorage.setItem('cart_productos', JSON.stringify(productos));
    cartCount();
}
/**
 * METODOS DE GERALES
 */
function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

function openModal(id) {
    document.getElementById(id).style.display = 'block';
}