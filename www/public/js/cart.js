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
    if (cartGetProductos().length > 0) {
        document.getElementById('myBtnCart').style.display = "block";
    } else {
        document.getElementById('myBtnCart').style.display = "none";
    }
}

cartCount();

function cartRemoveProducto(producto) {
    console.log(producto);
    var productos = cartGetProductos();
    console.log(productos);
    productos = productos.filter(p => p.item.toString() != producto.item.toString());
    console.log(productos);
    window.localStorage.setItem('cart_productos', JSON.stringify(productos));
    console.log(productos);
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