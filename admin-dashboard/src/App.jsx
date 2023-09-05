
import "./App.css";
import LogIN from "./Login/Login";
import Home from "./Home/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Register/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact  path="/" element={<SignUp/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<LogIN/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
