// src/components/SecondPage.js

// SecondPage.js
import React from 'react';

import './App.css';



const AboutUs = () => {

  const backgroundImage = `url('${process.env.PUBLIC_URL}/AboutUs.png')`;
const backgroundStyle = {
  backgroundImage: backgroundImage,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight: '100vh', // Set a minimum height to make sure the background covers the entire viewport
  // Add any other custom background-related styles here
};

  return (
    <div className="App" style={backgroundStyle}>
      
      
      
    </div>
  );
};

export default AboutUs;
