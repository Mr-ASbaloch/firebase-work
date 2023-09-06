
import "./App.css";
import LogIN from "./Login/Login";
import Home from "./Home/Home.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./Register/Register";

function App() {
  const currentUser =true;

  const RequireAuth =  ({children})=>{
  return currentUser ?  children : <Navigate to="/ "/>
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact  path="/" element={<LogIN/>}/>
          <Route path="/home" element={ <RequireAuth><Home/></RequireAuth>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
