import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { app } from "../../firebase";
const auth = getAuth();

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) => alert("added") );
  };
  return (
    <div>
      <h1> User Sign-up</h1>

      <form action="">
        <input
          type="email"
          value={email}
          required
          placeholder="your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          required
          placeholder="your password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" onClick={createUser}>
          {" "}
          submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
