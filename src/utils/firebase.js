// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnYNHLvo013A7vjE9DV9C1cCfpTb0bj6A",
  authDomain: "netflixgpt-66987.firebaseapp.com",
  projectId: "netflixgpt-66987",
  storageBucket: "netflixgpt-66987.firebasestorage.app",
  messagingSenderId: "49268637374",
  appId: "1:49268637374:web:57ed5500e35c6c1a1e68ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth() ;