import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from '../pages/Home';
import About from '../pages/About';
import Academics from '../pages/Academics';
import Admissions from '../pages/Admissions';
import Contact from '../pages/Contact';
import Studentlife from '../pages/Studentlife';
import Layout from '../Layout';

function Approutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics/>} />
            <Route path="/admissions" element={<Admissions/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/studentlife" element={<Studentlife/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Approutes
