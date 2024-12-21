// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3Pxvz7jTYOp4Kf3Eu1wZnHgMIRDmq2eg",
  authDomain: "osjewelsecommerce.firebaseapp.com",
  projectId: "osjewelsecommerce",
  storageBucket: "osjewelsecommerce.firebasestorage.app",
  messagingSenderId: "619452276450",
  appId: "1:619452276450:web:a3b494145f8d7a3aca88bb",
  measurementId: "G-MSNDNDN2L6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 // Initialize other services on Firebase here if needed, e.g. Auth, Database, Storage, Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);