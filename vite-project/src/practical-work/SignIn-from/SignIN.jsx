import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../firebase/firebase";

const provider = new GoogleAuthProvider();

const SignIN = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogIn = async () => {
    if (!email || !password) return;
    const user = signInWithEmailAndPassword(auth, email, password).then(()=>{
        alert("success")
    })
    try {
        
      console.log(user)
    } catch (error) {
      console.error(error);
    
    }
  };
  return (
    <>
      <h1>SignIN</h1>
      <form
        style={{ width: "300px " }}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="user name">user name</label>

        <label htmlFor="user email">user email</label>
        <input
          type="email"
          required
          placeholder="your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="user password">user password</label>
        <input
          type="password"
          required
          placeholder="your password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={userLogIn}> submit</button>
        <button> signIn with google</button>
      </form>
    </>
  );
};

export default SignIN;
