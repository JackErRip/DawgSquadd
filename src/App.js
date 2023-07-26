import React from 'react';
import './App.css';



const WebsiteOpener = () => {
  const openWebsite = () => {
    const url = 'https://dawg-squadd.vercel.app'; // Replace with the desired website URL
    window.location.href = url;
  };

  const onlineImageUrl = process.env.PUBLIC_URL + '/blueJack.png';
  const GSLogoUrl = process.env.PUBLIC_URL + 'Ghost Squad Logo.png';
  return (
    <div className="App">
      <header className="App-header">
        <title>The Dawg Squad Website</title>
        

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

          

      </header>
       
    </div>
  );
};
export default WebsiteOpener;
