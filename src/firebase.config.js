// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
 import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu_5aMbVlVq2GP4_zUcqSEw5P05pwnB8U",
  authDomain: "bloodirect-c3454.firebaseapp.com",
  projectId: "bloodirect-c3454",
  storageBucket: "bloodirect-c3454.appspot.com",
  messagingSenderId: "142207017877",
  appId: "1:142207017877:web:42980f74003ce420038c9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
<<<<<<< HEAD
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
=======
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
>>>>>>> master



export {app, auth, db, storage}
// Initialize Firebase Authentication and get a reference to the service
