import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA-5FDalWVeMXgK6JYP1hfOTPYMtXoIsOI",
    authDomain: "portofolio-5f613.firebaseapp.com",
    projectId: "portofolio-5f613",
    storageBucket: "portofolio-5f613.firebasestorage.app",
    messagingSenderId: "605388600805",
    appId: "1:605388600805:web:cae149be3d2c3f2019ab0c",
    measurementId: "G-LXBBEVHW4Y"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };