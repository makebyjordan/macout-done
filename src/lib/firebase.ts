// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  "projectId": "mac-out-recommerce",
  "appId": "1:1061007023556:web:b553944a6d58f5734e1891",
  "storageBucket": "mac-out-recommerce.firebasestorage.app",
  "apiKey": "AIzaSyBRwz_UzAddTSWmP0Qesx5lbJC423XKPVs",
  "authDomain": "mac-out-recommerce.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "1061007023556"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app, "ddbb-macout");

export { app, db };
