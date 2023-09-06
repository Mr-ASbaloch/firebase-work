import React, { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { message } from "antd";
import { useNavigate,Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const LogIN = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const {dispatch} = useContext (AuthContext)

  const navigate =useNavigate ()
  const handleLogIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch (  {type :"LOGIN" , payload:user})
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
    <div className='mt-28'>
      <form
        onSubmit={handleLogIn}
        className="text-[#00204a] shadow-md rounded-md font-semibold bg-gradient-to-r from-gray-100 to-gray-300 h-[400px] mx-auto  justify-center  w-[90%] lg:w-[50%]  flex flex-col "
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
          className="w-[80%] lg:w-[50%] flex mx-auto bg-[#fafafa]  text-black text-center outline-none p-2 rounded-md"
     
        />
        <label htmlFor="password" className="ml-[25%] text-xl mb-3 mt-3  ">
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
          className="w-[80%] lg:w-[50%] flex mx-auto bg-[#fafafa]  text-black text-center outline-none p-2 rounded-md"
        />
        <button className="bg-[#2c5d63] mt-5 p-1   mx-auto w-2/4 px-1 md:p-2 md:w-1/4  rounded-md capitalize font-semibold hover:bg-[#9896f1] text-white">
          {" "}
          login
        </button>
        <div className='flex mx-auto mt-5'>  <span>Don't have account ! </span > <Link to='/signup' className='text-[#f70776] ml-3'> Register Here </Link></div>
 
      
      </form>
    </div>
  );
};

export default LogIN;
