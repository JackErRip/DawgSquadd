import React from 'react';
import Footer from './Footer';
import './ContactPage.css';
import './App.css';
import Navbar from "./Components/Navbar";


const backgroundImage = `url('${process.env.PUBLIC_URL}/Contact.png')`;
const backgroundStyle = {
  backgroundImage: backgroundImage,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight: '100vh', // Set a minimum height to make sure the background covers the entire viewport
  // Add any other custom background-related styles here
};

const Discord = process.env.PUBLIC_URL + 'DiscordLogo.png';
const Gmail = process.env.PUBLIC_URL + 'Gmail-logo.png';

function ContactPage() {
    return (
        <div className="App">
          <React.Fragment>
    <Navbar/>
</React.Fragment>
          <header className="App-header">
<div className="contact-title">
            <h1>Contact Us</h1>
            </div>
            <br />
            <br />
<div className="contacts">
  <header className="gmail-contact-background">
            <img src={Gmail} alt="Gmail Logo" width="192" height="108" className="gmail-logo" /> <h2 className="h2-gmail-translate">Gmail</h2>
            <p className="gmail-contact">daredevillbvan@gmail.com <br /> 
            
            </p>
            </header>
<br />
<br />
            <header className="discord-contact-background">
            <img src={Discord} alt="Discord Logo" width="128" height="128" className="discord-logo" /> <h2 className="h2-translate">DISCORD</h2>

            <p className="contact-translate-y">@phoenix24. <br />
               @jackerrip <br />

            </p>

            </header>
</div>

            </header>
           <Footer /> 
        </div>
    );
};

export default ContactPage;