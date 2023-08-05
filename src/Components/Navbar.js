import {FaBars, FaTimes} from "react-icons/fa";
import { useRef } from "react";
import "../Styles/main.css";



function Navbar() {
     const navRef = useRef();


    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
     
    const openWebsite = () => {
        const url = 'https://dawg-squadd.vercel.app'; // Replace with the desired website URL
        window.location.href = url;
      };

      const GhostSquad = process.env.PUBLIC_URL + 'Ghost Squad Logo.png';

    return ( 
       <header className="navbar-header">
          <a href='/Homepage' className="gs-color">
            <h3>Ghost Squad</h3>
          </a>
          <nav ref={navRef}>
            <a href="/Homepage">
                Home
            </a>
            <a href="/ContactPage">Contacts</a>
            <a href="/AboutUs">About Us</a>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaBars />
             </button>
            
        </header>

    );
}

export default Navbar;