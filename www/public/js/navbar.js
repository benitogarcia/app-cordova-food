//closeSidebar();

function openSidebar() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function closeSidebar() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

function menuItemSelect(item) {

    var itemHref = document.getElementsByClassName('sb-menu');

    for (i = 0; i < itemHref.length; i++) {

        var clases = itemHref[i].className;
        clases = clases.replace(" w3-theme avoid-clicks", "");
        itemHref[i].className = clases;

    }

    item.className = item.className + " w3-theme avoid-clicks";
    closeSidebar();
}

/** inicio funciones modales **/
window.showModal = function(id) {
    document.getElementById(id).style.display = 'block';
};
window.closeModal = function(id) {
    document.getElementById(id).style.display = 'none';
};
window.showModalInfo = function(titulo, mensaje) {
document.getElementById("txtMdlInfoTitulo").innerHTML = titulo;
document.getElementById("txtMdlInfoMensaje").innerHTML = mensaje;
document.getElementById('mdlInfo').style.display = 'block';
}
/** fin funciones modales **/
