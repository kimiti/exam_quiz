// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArgU6FOvUNehyUdlYQC9Oqyuuf4DLZGdQ",
  authDomain: "kcpe-guru.firebaseapp.com",
  projectId: "kcpe-guru",
  storageBucket: "kcpe-guru.appspot.com",
  messagingSenderId: "485526935905",
  appId: "1:485526935905:web:75bbb4ef98a7e82c634d20",
  measurementId: "G-9M3PFWMTHT",
};

// Initialize Firebase
// export const fbconfig = initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
