import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const LogIN = () => {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 
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
        <button > submit</button>
    
      </form>
    </>
  );
};

export default LogIN;
