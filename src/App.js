import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Assuming you're using BrowserRouter

import Home from './components/Home/Home.js';
import Contact from './components/Contact/Contact.js';
import About from './components/About/About.js';
import Services from './components/Services/Services.js';
import Media from './components/Media/Media.js';
import Nopage from './components/Nopage/Nopage.js';
import CNavbar from './components/Navbar/CNavbar.js';
import CFooter from './components/Footer/CFooter.js';

function App() {
  return (
    <Router>
      <CNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/media" element={<Media />} />
        <Route path="*" element={<Nopage />} />

      </Routes>
      <CFooter/>
    </Router>
    
  );
}

export default App;
