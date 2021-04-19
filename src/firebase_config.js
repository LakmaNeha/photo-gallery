import firebase from "firebase";
import 'firebase/storage';
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyDFn_vwdX1_csteYbCmU-iatWbj8FXI-no",
    authDomain: "asthetic-gallery.firebaseapp.com",
    projectId: "asthetic-gallery",
    storageBucket: "asthetic-gallery.appspot.com",
    messagingSenderId: "676145813989",
    appId: "1:676145813989:web:4a3d0b69cde0cbe937370c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const galleryStorage =firebase.storage();
  const db = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { galleryStorage, db , timestamp};