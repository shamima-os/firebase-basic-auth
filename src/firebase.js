// ------------------------------------------------------------
// firebase.js
// This file connects our React app to our Firebase project.
// ------------------------------------------------------------
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Our Firebase project settings (copied from Firebase Console ->
// Project settings -> Your apps). These web keys are meant to be
// public; they only identify which Firebase project to talk to.
const firebaseConfig = {
  apiKey: "AIzaSyBBcPlTvE5Rz4BzeB6HEePEVO6KePjShUI",
  authDomain: "basic-auth-d8a32.firebaseapp.com",
  projectId: "basic-auth-d8a32",
  storageBucket: "basic-auth-d8a32.firebasestorage.app",
  messagingSenderId: "763917048819",
  appId: "1:763917048819:web:b6a0dadb7da42cb850d086",
  measurementId: "G-44CM36S6EJ",
};

// 1. initializeApp: start Firebase using our settings.
const app = initializeApp(firebaseConfig);

// 2. getAuth: get the Authentication service. We export it so
//    other files (Login, Register, Navbar...) can use it.
export const auth = getAuth(app);
