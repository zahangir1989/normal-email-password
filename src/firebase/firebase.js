// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUzu3ZB9fjXJEMRZ73AIZBXFlXsp9KZGI",
  authDomain: "normal-email-password.firebaseapp.com",
  projectId: "normal-email-password",
  storageBucket: "normal-email-password.appspot.com",
  messagingSenderId: "906805444369",
  appId: "1:906805444369:web:d4775f3aec630cf6ae56b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;