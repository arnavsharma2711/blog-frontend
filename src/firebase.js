import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiM2XdWXmgA_DM15FQF7GDyHxrmHLa9sc",
  authDomain: "blog-website-2949d.firebaseapp.com",
  projectId: "blog-website-2949d",
  storageBucket: "blog-website-2949d.appspot.com",
  messagingSenderId: "1007724334544",
  appId: "1:1007724334544:web:06deb59877545c3cc67dd5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage();
const db = getFirestore();
export { app, auth, storage, db };
