// Your web app's Firebase configuration
var firebaseConfig = {
   apiKey: "AIzaSyAwe1RX7le5pd6g0ovAWCguVjuUrPl8x7s",
    authDomain: "ninjagram-bbf39.firebaseapp.com",
    projectId: "ninjagram-bbf39",
    storageBucket: "ninjagram-bbf39.appspot.com",
    messagingSenderId: "365760537804",
    appId: "1:365760537804:web:934cfb3e661433a8ee8e69"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var authService = firebase.auth();
var storageService = firebase.storage();
