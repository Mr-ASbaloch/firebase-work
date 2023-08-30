
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore'
 

const firebaseConfig = {
  apiKey: "AIzaSyBz4rpo9W-fgiaaEbBbnOtgZXTRPyZNyfI",
  authDomain: "practice-cba1d.firebaseapp.com",
  projectId: "practice-cba1d",
  storageBucket: "practice-cba1d.appspot.com",
  messagingSenderId: "338489767568",
  appId: "1:338489767568:web:329b11171af8134dea4a15"
};


 const app = initializeApp(firebaseConfig);
 export const auth =getAuth(app)
 export const db= getFirestore(app)

