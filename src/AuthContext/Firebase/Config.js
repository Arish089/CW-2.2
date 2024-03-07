// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBixHsFbLkZ7lyDNiVlN0_s8wx5u-J8uA",
  authDomain: "movix-76b1c.firebaseapp.com",
  projectId: "movix-76b1c",
  storageBucket: "movix-76b1c.appspot.com",
  messagingSenderId: "260786581863",
  appId: "1:260786581863:web:10b97eea9e1ab9811a7fc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const googleAuthProvider = new GoogleAuthProvider;
export const auth = getAuth(app)