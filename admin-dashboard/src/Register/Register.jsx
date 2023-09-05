import React, { useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
const provider = new GoogleAuthProvider();

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const registerUser = async () => {
    if (!email || !password || !name) return;
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        updateProfile
      );

      await updateProfile(auth.currentUser, {
        displayName: name,
      })
        .then(() => {
          console.log(user);
          message.success(" successfully registered");
        })
        .catch((error) => {
          alert(error);
        });
    } catch (error) {
      console.log("something error  occured ", error);
    }
  };

  const signINWIthGoogle = async () => {
    const user = await signInWithPopup(auth, provider);
    console.log(user);
  };

  return (
    <div className=" mt-28">
      <h1 className="text-3xl font-semibold text-blue-900 mb-5 text-center">
        {" "}
        Register User
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="text-[#00204a] rounded-md font-semibold bg-gradient-to-t from-gray-200 via-blue-100 to-pink-100 h-[400px] mx-auto  justify-center  w-[90%] lg:w-[50%]  flex flex-col "
      >
        <label
          htmlFor="user name"
          className="ml-[10%] text-xl capitalize mb-3 mt-3 "
        >
          user name :
        </label>
        <input
          type="text"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="w-[80%] lg:w-[50%] flex mx-auto bg-[#fafafa]  text-black text-center outline-none p-2 rounded-md"
        />
        <label
          htmlFor="user email"
          className="ml-[10%] capitalize text-xl mb-3 mt-3 "
        >
          user email :
        </label>
        <input
          type="email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="w-[80%] lg:w-[50%] flex mx-auto bg-[#fafafa] outline-none p-2 rounded-md text-black text-center  "
        />
        <label
          htmlFor="user password"
          className="ml-[10%] capitalize  text-xl mb-3 mt-3 "
        >
          user password :
        </label>
        <input
          type="password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="w-[80%] lg:w-[50%] flex mx-auto outline-none rounded-md bg-[#fafafa] text-black text-center  p-2"
        />
        <button
          onClick={registerUser}
          className="bg-[#6643b5] mt-5 p-2  mx-auto w-2/4 px-3  lg:w-1/4 rounded-sm capitalize font-semibold hover:bg-[#9896f1] text-white"
        >
          {" "}
          Create account
        </button>
        <div className="flex mx-auto mt-5">
          {" "}
          <span>Already have account ! </span>{" "}
          <Link to="/" className="text-blue-400 ml-3">
            {" "}
            Login{" "}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
