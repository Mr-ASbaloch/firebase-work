
import "./App.css";
import LogIN from "./Login/Login";
import Home from "./Home/Home.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./Register/Register";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import User from "./User/User";

function App() {
  const {currentUser}=useContext(AuthContext)

  const RequireAuth =  ({children})=>{
  return currentUser ?  children : <Navigate to="/ "/>
  
  }
  console.log(currentUser);
  return (
    <>
    
        <Routes>
          <Route exact  path="/" element={<LogIN/>}/>
          <Route path="/home" element={ <RequireAuth><Home/></RequireAuth>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/user" element={<RequireAuth><User/></RequireAuth>}/>
        </Routes>
   
    </>
  );
}

export default App;
