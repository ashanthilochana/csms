import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDU1DLSOuVc65SRj2YYOrUrTOh_zLldmKo",
    authDomain: "itp-project-702d8.firebaseapp.com",
    projectId: "itp-project-702d8",
    storageBucket: "itp-project-702d8.appspot.com",
    messagingSenderId: "574386769445",
    appId: "1:574386769445:web:e5e5f8c2c21b5197e279cc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);