import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import AboutUs from './AboutUs';
import ContactPage from './ContactPage';
import { Link } from 'react-router-dom';
 
const HomePage = () => {
  const openWebsite = () => {
    const url = 'https://dawg-squadd.vercel.app'; // Replace with the desired website URL
    window.location.href = url;
  };

  const BlueJack = () => {
    const BlueJackUrl = 'https://download1648.mediafire.com/0r1blknyit2g5GpuWI1vXbvO_EFsJhQ7o8GHWlSpXSc29LaJMwVNsZEnc6UwInlUVI4h4BR0wQbIKR1cOX5RjPgfcmsk138ydC5ncK6tyFuZ1DHMYbpQYAEkLMXCHDbQ9khgX_T0bMnWLp7PxFa7n2XPGPthVvJDYe5Nv8HER_B2-MwZ/tzhsxalf9endary/BlueJack.png';
    window.location.href = BlueJackUrl;
  }

  const onlineImageUrl = process.env.PUBLIC_URL + '/blueJack.png';
  const GSLogoUrl = process.env.PUBLIC_URL + 'Ghost Squad Logo.png';
  return (
    <div className="App">
      <header className="App-header">
        <title>The Dawg Squad Website</title>
        
       <div className="ContactPage">
        
        <Link to="/ContactPage">Go to Contacts</Link>
       </div>

      <div className="AboutUs">
        <Link to="/AboutUs">Go to About Us</Link>
      </div>


        <div className="content-container">

        
          <img
            src={onlineImageUrl}
            alt="Logo of the Dawg Squad website"
            width="90" // Set the desired width for the small image
            height="90" // Set the desired height for the small image>

          />
</div>
          <div className="text-container">
            
            <h1>Homepage</h1>
            </div>
   
          <div className="large-button">
          <button className="largeButton" onClick={openWebsite}>
          <img src={GSLogoUrl} alt="Ghost Squad" width="200" // Set the desired width for the small image
            height="200" />
            </button>
           

            </div>

        

          <div className="stupid-string-easter">
          <p>Website was made from scratch using REACT and made by this guy ---> </p>

          </div>

          <div className="BlueJackButton">
          <button className="largeButton" onClick={BlueJack}>
          <img src={onlineImageUrl} alt="BlueJack" width="90" // Set the desired width for the small image
            height="90" />
            </button>
          
        </div>

      </header>
       
    </div>
  );
};
export default HomePage;