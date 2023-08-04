// src/components/SecondPage.js

// SecondPage.js
import React from 'react';
import './AboutUs.css';
import './App.css';
import Footer from './Footer';


function AboutUs() {

  const backgroundImage = `url('${process.env.PUBLIC_URL}/AboutUs.png')`;
const backgroundStyle = {
  backgroundImage: backgroundImage,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight: '100vh', // Set a minimum height to make sure the background covers the entire viewport
  // Add any other custom background-related styles here
};

  return (
    <div className="App">
      <header className="App-header">
<div className="aboutus-header">
<h1>About Us</h1>
  </div>
  <header className="about-us-header">
<div className="about-us">
 
<p className="about-us-p">
The Website show details on all 4 current members <br />
the leader the second in command and ECT. <br />
Special thanks to Dhan for some of the buttons. <br />
The website was made using REACT and other stuff <br />
was made in Canva. Ghost Squad is based in the <br />
Philippines.
</p>

</div>
</header>


<div className="credits">
  <header className="credits-header">
<p className="credits-font">
  Web Designer - Velasco Aldrien <br />
  Co Designer - Laurel Matthew and Cordova Dhan
  </p>
</header>
  
  </div>

        </header>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
