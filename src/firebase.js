import "firebase/firestore";
import firebase from "firebase/app";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBIZyucVozqhuEREGlqgU3u2OivhwUGiHY",
  authDomain: "reactive-demo-e4f20.firebaseapp.com",
  databaseURL: "https://reactive-demo-e4f20.firebaseio.com",
  projectId: "reactive-demo-e4f20",
  storageBucket: "reactive-demo-e4f20.appspot.com",
  messagingSenderId: "628284081823",
  appId: "1:628284081823:web:7520ca5719c3411ce284aa",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
