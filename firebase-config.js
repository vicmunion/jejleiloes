// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHSUBO9oVQuHF8Kudq4QKzY1Xb_E7DXa0",
  authDomain: "malvinnext.firebaseapp.com",
  projectId: "malvinnext",
  storageBucket: "malvinnext.firebasestorage.app",
  messagingSenderId: "193769530693",
  appId: "1:193769530693:web:5337d7aa3a28aeec3a0a2c",
  measurementId: "G-VHT86LJ5K6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Exportar o objeto auth para uso global
window.firebase = {
  auth: () => auth
};
