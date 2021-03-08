window.onload = function () {
    // realizamos la autenticación anónima (debe estar activada en la consola de Firebase)
    authService.signInAnonymously()
        .catch(function (error) {
            console.error('Detectado error de autenticación', error);
        });
    // asociamos el manejador de eventos sobre el INPUT FILE
    document.getElementById('campoarchivo').addEventListener('change', function (evento) {
        evento.preventDefault();
        var archivo = evento.target.files[0];
        subirArchivo(archivo);
    });
}
// función que se encargará de subir el archivo
function subirArchivo(archivo) {
    // creo una referencia al lugar donde guardaremos el archivo
    var refStorage = storageService.ref('micarpeta').child(archivo.name);
    // Comienzo la tarea de upload
    var uploadTask = refStorage.put(archivo);

    // defino un evento para saber qué pasa con ese upload iniciado
    uploadTask.on('state_changed', null,
        function (error) {
            console.log('Error al subir el archivo', error);
        },
        function () {
            console.log('Subida completada');
            mensajeFinalizado(uploadTask.snapshot.downloadURL, uploadTask.snapshot.totalBytes);
        }
    );
}

/*     // a esta función la invocamos para mostrar el mensaje final después del upload
    function mensajeFinalizado(url, bytes) {
        var elMensaje = document.getElementById('mensaje');
        var textoMensaje = '<p>Subido el archivo!';
        textoMensaje += '<br>Bytes subidos: ' + bytes;
        textoMensaje += '<br><a href="' + url + '">Ver el fichero</a></p>';
        elMensaje.innerHTML = textoMensaje;
      } */