import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "process.env.REACT_APP_FIREBASE_API_KEY",
  authDomain: "process.env.REACT_APP_FIREBASE_AUTH_DOMAIN",
  projectId: "process.env.REACT_APP_FIREBASE_PROJECTID",
  storageBucket: "process.env.REACT_APP_FIREBASE_STORAGE_KEY",
  messagingSenderId: "process.env.REACT_APP_FIREBASE_MESSAGINGID",
  appId: "process.env.REACT_APP_FIREBASE_APPID",
  measurementId: "process.env.REACT_APP_FIREBASE_MEASUREMENTID",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
