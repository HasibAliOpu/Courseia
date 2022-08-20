// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgx5P18RkiSD4zWfu9MKwIUm17kAtHDwU",
  authDomain: "curseia.firebaseapp.com",
  projectId: "curseia",
  storageBucket: "curseia.appspot.com",
  messagingSenderId: "226706168810",
  appId: "1:226706168810:web:642a490745692a47f07093",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
