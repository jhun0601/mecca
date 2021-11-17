import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import {
    getDatabase,
    ref,
    remove,
    set,
    update,
    child,
    get,
    onValue,
    push,
} from "firebase/database";

import { doc, setDoc, updateDoc } from "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};
const firebaseApp = initializeApp(firebaseConfig);
const googleAuthProvider = new GoogleAuthProvider();
const db = getDatabase();

export { firebaseApp, googleAuthProvider, db as default };
