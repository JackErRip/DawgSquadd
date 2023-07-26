import React from 'react';
import './App.css';



const WebsiteOpener = () => {
  const openWebsite = () => {
    const url = 'https://dawg-squadd.vercel.app'; // Replace with the desired website URL
    window.location.href = url;
  };

  const onlineImageUrl = 'https://scontent.fcgy2-2.fna.fbcdn.net/v/t39.30808-6/336098390_1290576248205706_6307620226466032412_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Qtlq3wbzk34AX96vssC&_nc_ht=scontent.fcgy2-2.fna&_nc_e2o=c&oh=00_AfCZIO1CYsYHqHpdlEH4v8WYPIt6xAaSLTjSeTyHOH0mHw&oe=64C0FC90'; // Replace with the URL of the online image

  return (
    
    <div className="App">
      <body>
      <header className="App-header">
        <title>The Dawg Squad Website</title>
        

        <div className="content-container">

        
          <img
            src={onlineImageUrl}
            alt="Logo of the Dawg Squad website"
            width="192" // Set the desired width for the small image
            height="108" // Set the desired height for the small image>

          />
</div>
          <div className="text-container">
            
            <h1>Homepage</h1>
            </div>
   
          <div className="large-button">
          <button className="largeButton" onClick={openWebsite}>
              Ghost Squad
            </button>
           

            </div>

        

          <div className="stupid-string-easter">
          <p>Website was made from scratch using and made by this guy ---> </p>

          </div>

          

      </header>
       </body>
    </div>
  );
};
export default WebsiteOpener;