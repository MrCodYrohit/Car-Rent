// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "car-rent-178fc.firebaseapp.com",
  projectId: "car-rent-178fc",
  storageBucket: "car-rent-178fc.appspot.com",
  messagingSenderId: "252261312865",
  appId: "1:252261312865:web:c1c1ac60552ebb4987fd20"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);