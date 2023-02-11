// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzfLL8Os0M3Iky2eHh93TlPhQb09DoEkQ",
  authDomain: "house-marketplace-app-91941.firebaseapp.com",
  projectId: "house-marketplace-app-91941",
  storageBucket: "house-marketplace-app-91941.appspot.com",
  messagingSenderId: "172034953098",
  appId: "1:172034953098:web:c0da170569e11435970273"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();