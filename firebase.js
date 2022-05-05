import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyAF0PfkEOQJGuyn-4Ol0DIwApu2QTDYjsY",
  authDomain: "fir-cli-28279.firebaseapp.com",
  projectId: "fir-cli-28279",
  storageBucket: "fir-cli-28279.appspot.com",
  messagingSenderId: "640818802396",
  appId: "1:640818802396:web:0164d2b1274859cb000e19",
});

export const auth = getAuth(app);
export const db = getFirestore(app);
