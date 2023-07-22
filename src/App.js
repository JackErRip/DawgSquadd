import './App.css';
import React from 'react';

const WebsiteOpener = () => {
  const openWebsite = () => {
    const url = 'https://dawg-squadd.vercel.app'; // Replace with the desired website URL
    window.open(url, '_blank');
  };


  return (
    <html>
      <body>
    <div className="App">
      <header className="App-header">
      <title>The Dawg Squad Website</title>


    
      <button className="largeButton" onClick={openWebsite}>Ghost Squad</button>
      
        <h1>Homepage</h1>

      </header>

     

    </div>
    </body>
  </html>
  );
}





export default WebsiteOpener;
