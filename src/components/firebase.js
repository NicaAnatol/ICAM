// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiIEq3toYZYkmbJZjKPuZW_5r8oOdz-WI",
  authDomain: "robot-61a9f.firebaseapp.com",
  projectId: "robot-61a9f",
  storageBucket: "robot-61a9f.appspot.com",
  messagingSenderId: "282189263650",
  appId: "1:282189263650:web:2b734fa65832a299d0ab7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);