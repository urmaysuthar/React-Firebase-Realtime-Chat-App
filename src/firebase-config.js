// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRSnc2ynrYBXZ0PoH9_6ld3MKUm3DDMDU",
  authDomain: "chatapp-39a19.firebaseapp.com",
  projectId: "chatapp-39a19",
  storageBucket: "chatapp-39a19.appspot.com",
  messagingSenderId: "686821887014",
  appId: "1:686821887014:web:a52ac48ada2cf61d622ae7",
  measurementId: "G-16MBZ96MK3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();