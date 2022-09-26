// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN2u0hBvih81rphgQcGCvVpRVQlgR5Iic",
  authDomain: "my-notes-eaf5d.firebaseapp.com",
  projectId: "my-notes-eaf5d",
  storageBucket: "my-notes-eaf5d.appspot.com",
  messagingSenderId: "89511000957",
  appId: "1:89511000957:web:5e415e8ca587166371ea14",
  measurementId: "G-00BBHRBT3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
