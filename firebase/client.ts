
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB5bdV8zJ1YqH05dgFWLNceG73KNI1DRJI",
    authDomain: "prepwise-faad4.firebaseapp.com",
    projectId: "prepwise-faad4",
    storageBucket: "prepwise-faad4.firebasestorage.app",
    messagingSenderId: "441851266535",
    appId: "1:441851266535:web:8fc03fc6745e1a8eb96942",
    measurementId: "G-L5GE59DJC9"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)







