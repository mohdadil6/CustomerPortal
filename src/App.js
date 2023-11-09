import React, { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Home from './components/Home/Home.js';
import Contact from './components/Contact/Contact.js';
import About from './components/About/About.js';
import Services from './components/Services/Services.js';
import Media from './components/Media/Media.jsx';
import Nopage from './components/Nopage/Nopage.js';
import CNavbar from './components/Navbar/CNavbar.js';
import CFooter from './components/Footer/CFooter.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import WhatWeDo from './components/WhatWeDo/SeamexHeader.jsx';
// import Newsletterpage from './components/Newsletter/Newsletterpage.js';
// import Testimonials from './components/Testimonials/Testimonials.js';
function App() {
  const [progress, setProgress] = useState(0);
  return (
    <Router>
      {/* <LoadingBar
        color='#0000FF'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <button onClick={() => setProgress(100)}>Complete</button>
      <br /> */}

      <CNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/media" element={<Media />} />
        <Route path="*" element={<Nopage />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/whatwedo" element={<WhatWeDo />}/>

        
        {/* <Route path="/newsletter" element={<Newsletterpage />}/> */}

        {/* <Route path="/testimonials" element={<Testimonials />}/> */}

      </Routes>
      <CFooter />
      <a id="back2Top" href="#" style={{ display: "inline" }}>
        <i className="fa fa-angle-up" aria-hidden="true" />
        <span>Top</span>
      </a>
    </Router>

  );
}

export default App;
