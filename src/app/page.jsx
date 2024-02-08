'use client'
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Prj from './pages/prjarch';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-archive" element={<Prj />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;