import { Button } from "antd";
import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../firebase";

const User = () => {
const [name,setName] =useState("")
const[email,setEmail] =useState ("")
const [phone, setPhone]=useState("")
const [address, setAddress]=useState (" ")
const [password ,setPassword]=useState ("")
const [country, setCountry] =useState ("")

    const handleData = async(e)=>{
        e.preventDefault()
   await setDoc(doc(db, "user", "LA"), {
    name: name,
    state: country,
    country: address,
    email :email,
    password :password
  });

    }
  return (
    <div>
  
      <form
        onSubmit={handleData}
        className="text-[#00204a] mt-11 rounded-md font-semibold bg-gray-300 h-auto pb-8 pt-5 mx-auto  justify-center  w-[90%] lg:w-[50%]  flex flex-col "
      >
        <label
          htmlFor="user name"
          className="ml-[10%] text-xl capitalize mb-3 mt-3 "
        >
          name :
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
          email :
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
          htmlFor="user email"
          className="ml-[10%] capitalize text-xl mb-3 mt-3 "
        >
          Phone No :
        </label>
        <input
          type="number"
          required
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          className="w-[80%] lg:w-[50%] flex mx-auto bg-[#fafafa] outline-none p-2 rounded-md text-black text-center  "
        />
        <label
          htmlFor="user password"
          className="ml-[10%] capitalize  text-xl mb-3 mt-3 "
        >
          password :
        </label>
        <input
          type="password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="w-[80%] lg:w-[50%] flex mx-auto outline-none rounded-md bg-[#fafafa] text-black text-center  p-2"
        />
        <label
          htmlFor="user password"
          className="ml-[10%] capitalize  text-xl mb-3 mt-3 "
        >
          address:
        </label>
        <input
          type="password"
          required
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          className="w-[80%] lg:w-[50%] flex mx-auto outline-none rounded-md bg-[#fafafa] text-black text-center  p-2"
        />
        <label
          htmlFor="user password"
          className="ml-[10%] capitalize  text-xl mb-3 mt-3 "
        >
          country :
        </label>
        <input
          type="password"
          required
          onChange={(e) => {
            setCountry(e.target.value);
          }}
          className="w-[80%] lg:w-[50%] flex mx-auto outline-none rounded-md bg-[#fafafa] text-black text-center  p-2"
        />

        <Button type="primary" className="bg-green-700 w-[30%] mx-auto mt-5" onClick={handleData}>
          {" "}
          Add User
        </Button>
      </form>
    </div>
  );
};

export default User;
