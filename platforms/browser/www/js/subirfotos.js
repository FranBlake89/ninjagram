window.onload = function () {
    // realizamos la autenticación anónima (debe estar activada en la consola de Firebase)
    authService.signInAnonymously()
        .catch(function (error) {
            console.error('Detectado error de autenticación', error);
        });
    
}
// asociamos el manejador de eventos sobre el INPUT FILE
function subirfotos(){

    // FOR para recorrer el arrayfotos, que viene del INDEX (LINEAS 3 Y 22). 
    // el ref indica la carpeta que se guardará la imagen, pero se necesita el CHILD, que otorga el nombre de la imagen
    // el PUTSTRING nos permite subir imagen base64, es necesario darle la propiedad CONTENTTYPE, para decirle el tipo de archivo

    for (var i=0; i<arrayFotos.length; i++){
        storageService.ref('micarpeta').child('foto'+i+'.jpg').putString(arrayFotos[i], 'base64', {contentType:'image/jpg'}).then(function(snapshot) {
            console.log('Uploaded a base64 string!');
            });
    }
}
