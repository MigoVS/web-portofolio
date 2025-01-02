import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-5FDalWVeMXgK6JYP1hfOTPYMtXoIsOI",
  authDomain: "portofolio-5f613.firebaseapp.com",
  projectId: "portofolio-5f613",
  storageBucket: "portofolio-5f613.firebasestorage.app",
  messagingSenderId: "605388600805",
  appId: "1:605388600805:web:cae149be3d2c3f2019ab0c",
  measurementId: "G-LXBBEVHW4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };