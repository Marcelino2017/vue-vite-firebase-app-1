// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXLSgxzsjuA2vjlj9f6tUMKY2XL_rmvio",
  authDomain: "vur-3-2024.firebaseapp.com",
  projectId: "vur-3-2024",
  storageBucket: "vur-3-2024.appspot.com",
  messagingSenderId: "865404755877",
  appId: "1:865404755877:web:1743784b99655949f0d24c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };