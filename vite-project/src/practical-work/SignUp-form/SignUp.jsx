import React, { useState } from "react";
import { auth } from "../../../firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile ,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const provider =new GoogleAuthProvider ()

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const registerUser = async () => {
    if (!email || !password || !name) return;
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password ,updateProfile);
      await updateProfile (auth.currentUser, {
        displayName:name
      })
      console.log(user);
    } catch (error) {
    
      console.log("something error  occured ", error);
    
    }
  }
  const  signINWIthGoogle =async ()=>{
    const user = await signInWithPopup(auth,provider)
    console.log(user);
  }
  
  return (
    <div>
      <h1> User Sign-up</h1>

      <form
        style={{ width: "300px " }}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="user name">user name</label>
        <input
          type="text"
          required
          placeholder="your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
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
        <button onClick={registerUser}> submit</button>
        <button onClick={signINWIthGoogle}> signIn with google</button>
      </form>
    </div>
  );
};

export default SignUp;
