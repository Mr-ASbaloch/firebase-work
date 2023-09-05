
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.REACT_APP_FIREBASE_KEY,
  authDomain: "dashboard-15a68.firebaseapp.com",
  projectId: "dashboard-15a68",
  storageBucket: "dashboard-15a68.appspot.com",
  messagingSenderId: "106663477513",
  appId: "1:106663477513:web:54a1703015059ad9cad3d8"
};

export  const auth = getAuth ()

const app = initializeApp(firebaseConfig);