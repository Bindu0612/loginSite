import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCV4k-UpFtRl6OH1pw7tkrV6sW29cCayCE",
    authDomain: "loginsite-f066b.firebaseapp.com",
    databaseURL: "https://loginsite-f066b.firebaseio.com",
    projectId: "loginsite-f066b",
    storageBucket: "loginsite-f066b.appspot.com",
    messagingSenderId: "374555142281",
    appId: "1:374555142281:web:abf7fdbc76aff137ac3e58",
    measurementId: "G-42612EF5PH"
  };
  // Initialize Firebase
  const fire= firebase.initializeApp(firebaseConfig);
  export default fire;
  