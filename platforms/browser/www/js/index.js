console.log(firebase);
document.addEventListener("deviceready", onDeviceReady, false);
var arrayFotos =[];

function onDeviceReady() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;


    document.getElementById("cameraTakePicture").addEventListener("click", cameraTakePicture);
    function cameraTakePicture() {
        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL
        });

        function onSuccess(imageData) {
            var image = document.getElementById('myImage');
            image.src = "data:image/jpeg;base64," + imageData;
            $('ul').append("<li class='col-4 p-1' style='list-style:none;'><img  id='photo' src=" + image.src + " class='img-fluid'></li>");
            var source = image.src;
            arrayFotos.push(imageData);
           
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }
    }
}
$('#upload-file-selector').change(function(){
    if(this.files&&this.files[0]){
        var archivo = new FileReader();
        archivo.onload = function(){
            var imagenRedimenzionada = onSuccess(e.target.result)
            tablaDB.push({
                urlLArge:e.target.result,
                url:imagenRedimenzionada
            })
        }
    }
})