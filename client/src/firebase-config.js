// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsZY9mV_KXNZ73YCSL0l89EF8nUerQj40",
  authDomain: "momotalk-76fd4.firebaseapp.com",
  projectId: "momotalk-76fd4",
  storageBucket: "momotalk-76fd4.appspot.com",
  messagingSenderId: "312952489367",
  appId: "1:312952489367:web:5d97aa77c5b91962f170d2",
  measurementId: "G-BXM9PQ9744"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
