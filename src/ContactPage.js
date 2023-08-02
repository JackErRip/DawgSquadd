import React from 'react';


import './App.css';
const backgroundImage = `url('${process.env.PUBLIC_URL}/Contacts.png')`;
const backgroundStyle = {
  backgroundImage: backgroundImage,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight: '100vh', // Set a minimum height to make sure the background covers the entire viewport
  // Add any other custom background-related styles here
};
const ContactPage = () => {
    return (
        <div className="App" style={backgroundStyle}>
            
        </div>
    );
};

export default ContactPage;