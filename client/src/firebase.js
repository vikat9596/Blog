// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-850c0.firebaseapp.com",
  projectId: "mern-blog-850c0",
  storageBucket: "mern-blog-850c0.appspot.com",
  messagingSenderId: "843973662681",
  appId: "1:843973662681:web:4c3e5ae79b012e6ef06bc8",
  measurementId: "G-XYTCF67Q1E"
};

// Initialize Firebase


export const app = initializeApp(firebaseConfig);