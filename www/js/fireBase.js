// Your web app's Firebase configuration
var firebaseConfig = {
   apiKey: "xxxx.xxxxx.xxxxxxxx.xxxxx",
    authDomain: "xxxx.xxxxx.xxxxxxxx.xxxxx",
    projectId: "xxxx.xxxxx.xxxxxxxx.xxxxx",
    storageBucket: "xxxx.xxxxx.xxxxxxxx.xxxxx",
    messagingSenderId: "xxxx.xxxxx.xxxxxxxx.xxxxx",
    appId: "xxxx.xxxxx.xxxxxxxx.xxxxx"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var authService = firebase.auth();
var storageService = firebase.storage();
