import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import { useAuth0 } from '@auth0/auth0-react'; // Import the useAuth0 hook
import "../Styles/main.css";

function Navbar() {
  const navRef = useRef();
  const { logout, isAuthenticated } = useAuth0(); // Get the logout function and isAuthenticated value

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  // const openWebsite = () => {
  //   const url = 'https://dawg-squadd.vercel.app'; // Replace with the desired website URL
  //   window.location.href = url;
  // };

  // const GhostSquad = process.env.PUBLIC_URL + 'Ghost Squad Logo.png';

  return (
    <header className="navbar-header">
      <a href='/Homepage' className="gs-color">
        <h3>Ghost Squad</h3>
      </a>
      <nav ref={navRef} className='move-nav'>
        <a href="/Homepage">Home</a>
        <a href="/ContactPage">Contacts</a>
        <a href="/AboutUs">About Us</a>
        {/* Conditionally render the logout button if the user is authenticated */}
        
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn nav-close-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      {isAuthenticated && (
          <a className="logout-btn"  onClick={() => logout({ returnTo: window.location.origin })}>
            <h3>Log Out</h3>
          </a>
        )}
    </header>
  );
}

export default Navbar;
