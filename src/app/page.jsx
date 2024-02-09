"use client";
import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Prj from "./pages/prjarch";
import Contacts from "./pages/contacts";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-archive" element={<Prj />} />
        <Route path="/contacts" element={<Contacts />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
