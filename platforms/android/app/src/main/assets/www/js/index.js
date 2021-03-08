document.addEventListener("deviceready", onDeviceReady, false);
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
            $('ul').append("<li class='col-4 mt-2 p-1' style='list-style:none;'><img src="+ image.src+" class='img-fluid'></li>");
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }
    }
}
