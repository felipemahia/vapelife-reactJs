// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPMCRH5AkuHn6IJ_vzeADg2a3h8XcKhaM",
    authDomain: "react-coder-felipemahia.firebaseapp.com",
    projectId: "react-coder-felipemahia",
    storageBucket: "react-coder-felipemahia.appspot.com",
    messagingSenderId: "428870168187",
    appId: "1:428870168187:web:e136e35fcbc3a9c9123cde",
    measurementId: "G-GQ4DL7FC31"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)

export default database