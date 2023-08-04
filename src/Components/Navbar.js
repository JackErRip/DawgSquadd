import {FaBars, FaTimes} from "react-icons/fa";
import { useRef } from "react";
import "../Styles/main.css";

function Navbar() {
     const navRef = useRef();


    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
     
    return ( 
       <header className="navbar-header">
          <h3>Ghost Squad</h3>
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