const multer = require('multer')
const firebase = require('firebase/app')
const { getStorage, ref, uploadBytes, getDownloadURL } = require('firebase/storage')

const firebaseConfig = {
    apiKey: "AIzaSyBbxM8TZIvv8lBd9A-s6hPLTpbmrr_xqPI",
    authDomain: "server-uplaod-video.firebaseapp.com",
    databaseURL: "https://server-uplaod-video-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "server-uplaod-video",
    storageBucket: "server-uplaod-video.appspot.com",
    messagingSenderId: "9648235506",
    appId: "1:9648235506:web:bf68d25d731af49af4c16b",
    measurementId: "G-WKKFW9F0HQ"
  };

firebase.initializeApp(firebaseConfig);
const uplaod = multer({ storage: multer.memoryStorage() });

module.exports = uplaod;

