import "./App.css";
import DarkMode from "./components/DarkMode";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import TextFile from "./components/TextFile";
import About from "./components/About";
import Error from "./components/Erorr";
import { BrowserRouter , Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  return (
    <>
   {/* React router setup and usages*/}
    <BrowserRouter>
    <Navbar about="About"/>
    <Routes>
    <Route exact path='/'  element={<TextFile/>} />
      <Route exact path='/about'  element={<About/>} />
      <Route exact path='/darkMode'  element={<DarkMode/>} />
      <Route exact path='*'  element={<Error/>} />
    </Routes>
    

    </BrowserRouter>

</>
  );
}

export default App;
