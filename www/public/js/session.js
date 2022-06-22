document.getElementById('mdlLoading').style.display = 'block';
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    
}
/** inicio funciones seasion **/
function isLogged() {
    return true;
}

function validUserAuthenticate() {
    if (isLogged()) {
        document.getElementById("myBar").style.display = "block";
        document.getElementById("myFooter").style.display = "block";
    }
    document.getElementById('mdlLoading').style.display = 'none';
}

validUserAuthenticate();
/** fin funciones seasion **/
/** inicio tabs autenticacion **/
function openTabAtenticacion(tab) {
    var i;
    var x = document.getElementsByClassName("tab-atenticacion");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tab).style.display = "block";
}
/** fin tabs autenticacion **/