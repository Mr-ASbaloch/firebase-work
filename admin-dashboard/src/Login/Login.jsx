import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const LogIN = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const navigate =useNavigate ()
  const handleLogIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        message.success("Successfully login");
       navigate ('/home ')
        setEmail("");
        setPassword("");

        // ...
      })

      .catch((error) => {
        message.error("Incorrect password or email");
      });
  };

  return (
    <div>
      <form
        onSubmit={handleLogIn}
        className="text-[#00204a] font-semibold bg-[#eeeeee] h-[400px] mx-auto mt-32 justify-center  w-2/5 flex flex-col "
      >
        <label htmlFor="user email" className="ml-[25%] mb-3 text-xl">
          {" "}
          Email :
        </label>
        <input
          type="email"
          required
          placeholder="test@gmail.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="w-1/2 flex mx-auto bg-[#fafafa] text-black text-center  p-1"
        />
        <label htmlFor="password" className="ml-[25%] text-xl mb-3 mt-3 ">
          {" "}
          Password:
        </label>
        <input
          type="password"
          required
          placeholder="******"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="w-1/2 flex mx-auto bg-[#fafafa] text-black text-center p-1 "
        />
        <button className="bg-[#272343] mt-5 p-2  mx-auto w-1/4 px-3  rounded-full capitalize font-semibold hover:bg-[#9896f1] text-white">
          {" "}
          submit
        </button>
      </form>
    </div>
  );
};

export default LogIN;
