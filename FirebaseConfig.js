// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1sySwOqEd85Jh5h6gSXzzJmG3MZsTY30",
  authDomain: "app-autenticado-3d466.firebaseapp.com",
  projectId: "app-autenticado-3d466",
  storageBucket: "app-autenticado-3d466.appspot.com",
  messagingSenderId: "868922671517",
  appId: "1:868922671517:web:09370352e5f22252322f74",
  measurementId: "G-M2YJZ65ZLZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
