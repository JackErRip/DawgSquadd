import React from 'react';
import './App.css';
import './HomePage.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import YouTube from 'react-youtube';
import Navbar from "./Components/Navbar";
 
function HomePage() {

 
    const videoId = 'Vg1jcbUMAms';
  
    const opts = {
      width: '768',
      height: '480', // Adjust the height as needed
      playerVars: {
        autoplay: 1, // Autoplay the video
      },
    
    };

  const openWebsite = () => {
    const url = 'https://dawg-squadd.vercel.app'; // Replace with the desired website URL
    window.location.href = url;
  };

  const BlueJack = () => {
    const BlueJackUrl = 'https://download1648.mediafire.com/0r1blknyit2g5GpuWI1vXbvO_EFsJhQ7o8GHWlSpXSc29LaJMwVNsZEnc6UwInlUVI4h4BR0wQbIKR1cOX5RjPgfcmsk138ydC5ncK6tyFuZ1DHMYbpQYAEkLMXCHDbQ9khgX_T0bMnWLp7PxFa7n2XPGPthVvJDYe5Nv8HER_B2-MwZ/tzhsxalf9endary/BlueJack.png';
    window.location.href = BlueJackUrl;
  }

  const GhostSquadText = process.env.PUBLIC_URL + 'GhostSquad.png';

  const onlineImageUrl = process.env.PUBLIC_URL + '/blueJack.png';
  const GSLogoUrl = process.env.PUBLIC_URL + 'Ghost Squad Logo.png';

  const backgroundImage = `url('${process.env.PUBLIC_URL}/HomePage.png')`;
  const backgroundStyle = {
    backgroundImage: backgroundImage,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '100vh', // Set a minimum height to make sure the background covers the entire viewport
    // Add any other custom background-related styles here
  };
 
  return (
    <div className="app">
      <React.Fragment>
    <Navbar/>
</React.Fragment>
      
        <header className="App-header">
           
          <div className="Homepage-text">
            <header className="Homepage-header">
<h1 className="H1-translate">GHOST SQUAD</h1>
            </header>
            </div>

            <br />
            <YouTube videoId={videoId} opts={opts} className="youtube-border" />
           
          </header>
     

          

        <Footer />
    
     
    </div>

    
  );
};
export default HomePage;