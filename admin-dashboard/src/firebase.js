import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADd2F7fwWSQBgWeSTbO4EiOPFircY15xQ", 
  authDomain: "dashboard-15a68.firebaseapp.com",
  projectId: "dashboard-15a68",
  storageBucket: "dashboard-15a68.appspot.com",
  messagingSenderId: "106663477513",
  appId: "1:106663477513:web:54a1703015059ad9cad3d8",
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
