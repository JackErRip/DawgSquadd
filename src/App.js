import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Router, Switch} from 'react-router-dom';
import AboutUs from './AboutUs';
import HomePage from './HomePage';
import ContactPage from './ContactPage';


export default function App() {
  return (
<div>

<BrowserRouter>
<Routes>
   <Route index element={<HomePage />} />
  <Route path="/HomePage" element={<HomePage />} />
  <Route path="/AboutUs" element={<AboutUs />} />
  <Route path="/ContactPage" element={<ContactPage />} />
</Routes>
</BrowserRouter>

</div>
  );
};
        



