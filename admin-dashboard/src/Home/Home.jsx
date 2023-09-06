import { Button } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate =useNavigate ()
  return <div className='flex  flex-col justify-center mx-auto mt-28 text-5xl text-center mb-5 font-bold'>

    <h1> welcome to home page</h1>
    <Button  className='bg-gray-800 w-[120px] px-2 shadow-md  align-middle mx-auto mt-8 ' type="primary" onClick={()=>{
      navigate ('/user')
    }} >     Add User</Button>
    <img src="https://img.freepik.com/free-vector/watercolor-wedding-sign-template_23-2149404982.jpg" alt="" className='w-[300px] mt-5 mx-auto' />
     </div>;

};

export default Home;
