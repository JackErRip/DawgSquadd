import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Router, Switch} from 'react-router-dom';
import AboutUs from './AboutUs';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import Navbar from "./Components/Navbar";






export default function App() {
  return (
<div>
<React.Fragment>
    <Navbar/>
</React.Fragment>
<head>
    
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3372873267944362"
     crossorigin="anonymous"></script>

       </head>
    
<BrowserRouter>
<Routes>
   <Route index element={<HomePage />} />
   <Route path="/Components/Navbar" element={<Navbar />} />
  <Route path="/HomePage" element={<HomePage />} />
  <Route path="/AboutUs" element={<AboutUs />} />
  <Route path="/ContactPage" element={<ContactPage />} />
  
</Routes>
</BrowserRouter>



</div>
  );
};
        



