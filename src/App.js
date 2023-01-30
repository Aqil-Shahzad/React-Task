// import logo from './logo.svg';
// import { useState } from 'react';
// import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Page404 from "./Page404";
import Information from "./Information";
import Facebook from "./Facebook";
import Instragram from "./Instragram";
// import Profile from "./profile";
// import React from 'react'
// import Login from "./Login";
// import User1 from "./User1";
// import Member from "./Member";
// import Hide from "./Hide";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus/" element={<ContactUs />} >
            <Route path="facebook" element={<Facebook />}/>
            <Route path="instragram" element={<Instragram />}/>
            </Route>






          <Route path="/information/name:" element={<Information />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
