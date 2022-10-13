import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config();

export const firebaseConfig = {
  apiKey: "AIzaSyABh8qcPATUszEeSj-Zvg1n45LvKyJaOOA",
  authDomain: "img-itb.firebaseapp.com",
  projectId: "img-itb",
  storageBucket: "img-itb.appspot.com",
  messagingSenderId: "42127320999",
  appId: "1:42127320999:web:6609ae0a09345b21d6b882",
  measurementId: "G-V5D8TKJSLV"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
