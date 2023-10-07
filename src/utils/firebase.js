// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-400520.firebaseapp.com",
  projectId: "blog-400520",
  storageBucket: "blog-400520.appspot.com",
  messagingSenderId: "345481026885",
  appId: "1:345481026885:web:e95b06722bebd2fbec722c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
